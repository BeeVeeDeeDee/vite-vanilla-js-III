import { Component } from '@core';
import { GalleryItem } from '@components';

export class Gallery extends Component {
  constructor(attributes) {
    super(attributes);
  }

  init() {
    super.init();
    this.render();
  }

  bindEvents() {
    
    // for now, just log the clicked item
    // this.$refs.galleryItem.forEach($item => {
    //   $item.addEventListener('click', () => {
    //     console.log($item);
    //   });
    // });
    
  }

  async render () {
    if(!this.$element) {
      alert('No Element found');
    }
    // wrap the fetch in a try/catch block
    try {
      const response = await fetch("http://localhost:3000/api/gallery-items");
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      
      data.forEach(item => {
        new GalleryItem(this.$element, item);
      });
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }

  }

  handleClick() {
    console.log('clicked');
  }

  destroy() {
    this.$element.remove();
    this.$element = null;
  }
}

