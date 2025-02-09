import { Component } from '@core';

export class Contact extends Component {
  constructor(attributes) {
    super(attributes);
  }

  init() {
    super.init();
    this.render();
  }

  bindEvents() {
    this.$element.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick() {
    console.log('Contact clicked');
    // your functionality here
  }

  render () {
    if(!this.$element) {
      alert('No Element found');
    }
  }

  destroy() {
    this.$element.remove();
    this.$element = null;
  }
}