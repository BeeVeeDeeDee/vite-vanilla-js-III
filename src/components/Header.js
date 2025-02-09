import { Component } from '@core';

export class Header extends Component {
  constructor(attributes) {
    super(attributes);
  }

  init() {
    super.init();
    this.render();
  }

  bindEvents() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    // handle scroll event
    const scrolled = window.scrollY > 300;
    this.$element.classList.toggle('header--scrolled', scrolled)
  } 

  render () {
    if(!this.$element) {
      alert('no element found')
    }
  }

  destroy () {
    window.removeEventListener('scroll', this.handleScroll);
    super.destroy();
  }
}