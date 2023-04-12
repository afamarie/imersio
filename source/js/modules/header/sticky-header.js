export class StickyHeader {
  constructor() {
    this._stickyHeader = document.querySelector('[data-header="sticky"]');
    this._headerHeight = this._stickyHeader ? this._stickyHeader.offsetHeight : '';
    this._hidePoint = this._stickyHeader ? +this._stickyHeader.dataset.hidePoint : 0;
    this._hidePoint = this._hidePoint ? this._hidePoint : 0;

    this._scrollY = null;
    this._prevScrollY = null;

    this._isHidden = false;
    this._isDisableScrolling = false;

    this._onWindowScroll = this._onWindowScroll.bind(this);
  }

  init() {
    if (!this._stickyHeader) {
      return;
    }
    window.addEventListener('scroll', this._onWindowScroll);
  }

  _hideHeader() {
    if (!this._isHidden) {
      this._isHidden = true;
      this._stickyHeader.classList.add('is-hidden');
    }
  }

  _showHeader() {
    if (this._isHidden) {
      this._isHidden = false;
      this._stickyHeader.classList.remove('is-hidden');
      this._stickyHeader.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    }
  }

  _checkScrollDirection() {
    if (this._scrollY > this._prevScrollY) {
      return 'down';
    }
    return 'up';
  }

  _onWindowScroll() {
    this._scrollY = document.documentElement.scrollTop;

    if (this._checkScrollDirection() === 'down' && this._scrollY > this._hidePoint) {
      this._hideHeader();
    }

    if (this._checkScrollDirection() === 'up' || this._scrollY <= this._hidePoint) {
      this._showHeader();
      if (window.pageYOffset === 0) {
        this._stickyHeader.style.backgroundColor = '#181819';
      }
    }

    this._prevScrollY = this._scrollY;
  }
}
