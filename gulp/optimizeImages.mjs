import gulp from 'gulp';
import rename from 'gulp-rename';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';
import svgstore from 'gulp-svgstore';
import squoosh from 'gulp-libsquoosh';
import mozJpeg from 'imagemin-mozjpeg';
import svgo from 'imagemin-svgo';

const sprite = () =>
  gulp
      .src('source/img/sprite/*.svg')
      .pipe(svgstore({inlineSvg: true}))
      .pipe(rename('sprite.svg'))
      .pipe(gulp.dest('build/img'));

const optimizeSvg = () =>
  gulp
      .src('build/img/**/*.svg')
      .pipe(
          imagemin([
            svgo({
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
                {
                  name: 'removeRasterImages',
                  active: true,
                },
                {
                  name: 'removeUselessStrokeAndFill',
                  active: false,
                }],
            })]))
      .pipe(gulp.dest('build/img'));

const optimizeJpg = () =>
  gulp
      .src('build/img/**/*.{jpg,jpeg}')
      .pipe(imagemin([mozJpeg({quality: 90, progressive: true})]))
      .pipe(gulp.dest('build/img'));

const optimizePng = () =>
  gulp
      .src('build/img/**/*.png')
      .pipe(squoosh({
              oxipng: { level: 3 },
              //mozjpeg: { quality: 75, progressive: true }
            }))
      .pipe(gulp.dest('build/img'));

const createWebp = () => {
  const root = '';
  return gulp
      .src(`source/img/${root}**/*.{png,jpg}`)
      .pipe(webp({quality: 90}))
      .pipe(gulp.dest(`source/img/${root}`));
};

export {sprite, createWebp, optimizeSvg, optimizePng, optimizeJpg};
