import { groupBy, camelCase, random } from "@utils";


export class Component {
  
  // constructor: instellingen van mijn klasse
  constructor(attributes = {}){
    if(!attributes.element) {
      throw new Error('Component requires an element');
    }
    this.devMode = true;
    this.id = attributes.id;
    this.$element = attributes.element;
    this.$refs = this.getElements();
    this.config = { ...this.$element.dataset }

    this.init()

  }
  // end constructor

  // initialiseert het component
  init() {
    this.bindEvents();
    this.devMode && console.log({
      id: this.id,
      element: this.$element,
      refs: this.$refs,
      config: this.config
    });
  }

  bindEvents() {
    // Override in child classes
  }

  getElements() {
    const nodes = [ ...this.$element.querySelectorAll('[data-select]')];
    return groupBy(nodes, (node) => camelCase(node.dataset.select));
  }

  destroy() {
    this.$element = null;
    this.$refs = null;
  }
}

