import { Elements } from "@core";

export class GalleryItem {
  constructor(parent, itemData){
    this.parent = parent;
    this.itemData = itemData;
    this.itemLiked = false;
    this.state = {
      likes: this.itemData.likes,
    }
    this.render();
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.reRenderLikeElement();
  }

  render(){
    // dynamically render the gallery item utilizing the Elements object literal
    this.item = Elements.DIV(this.parent, "gallery-item");
    this.image = Elements.IMG(this.item, this.itemData.img, null, null, this.showBlowUp, this.itemData.title);
    this.itemDetails = Elements.DIV(this.item, 'item-details');
    this.title = Elements.Heading(this.itemDetails, 3, null, null, this.itemData.title);
    this.likeButton = Elements.Button(this.itemDetails, null, () => this.itemLiked ? this.unlike() : this.like(), false, 'like-btn');
    this.icon = Elements.fontAwesomeI(this.likeButton, this.itemLiked ? ['fas', 'fa-heart'] : ['far', 'fa-heart']);
    this.counter = Elements.span(this.likeButton, 'likes', null, this.state.likes);
  }

  showBlowUp = () => {
    // console.log(`show blow up for ${this.itemData.title}`);

    // SKIP FIRST: disable scrolling when the modal is open
    document.body.style.overflow = 'hidden';

    // create a modal to display the image full size
    this.modal = Elements.DIV(document.body, 'gallery-modal');
    this.modal.addEventListener('click', this.hideBlowUp);
    this.modalImage = Elements.IMG(this.modal, this.itemData.img, 'modal-image');

    this.modal.style.opacity = 0;
    this.modal.style.transition = 'opacity 0.5s';
    requestAnimationFrame(() => {
      this.modal.style.opacity = 1;
    });
    

  }

  hideBlowUp = () => {
    this.modal.style.opacity = 0;
    this.modal.style.transition = 'opacity 0.5s';
    setTimeout(() => {
      this.modal.remove();
      document.body.style.overflow = 'auto';
    }, 500);
    
  }

  like() {
    this.itemLiked = true;
    this.setState({ likes: this.state.likes + 1 });
  }

  unlike() {
    this.itemLiked = false;
    this.setState({ likes: this.state.likes - 1 });
  }
  
  reRenderLikeElement() {
    this.counter.innerText = this.state.likes;
    this.icon.className = this.itemLiked ? 'fas fa-heart' : 'far fa-heart';
  }

}