import { Component, Store } from '@core';
import { smoothScrolling } from '@utils';

export class ScrollButton extends Component {
  constructor(attributes) {
    super(attributes);
  }

  init() {
    // Create store
    this.buttonStore = new Store({ count: 0 });
    // Register a listener for changes to the 'count' key & fire a callback each time it changes
    this.buttonStore.change('count', (newCount) => {
      console.log(`Count for ${this.$element.className} changed to ${newCount}`);
    });
    super.init();
    this.render();
  }


  bindEvents() {
    this.$element.addEventListener('click', () => {
      // Update store
      this.buttonStore.set('count', this.buttonStore.get('count') + 1)
      // Smooth scroll to target. If offset is provided, scroll to target with offset
      smoothScrolling(this.config.target, this.config.offset && parseInt(this.config.offset));
    })
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
