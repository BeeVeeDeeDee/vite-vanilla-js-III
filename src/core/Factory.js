import { camelCase } from '@utils';

export class Factory {
  constructor(attributes = {}) {
    this.components = new Map();
    this.instances = new Map();
  }

  register(name, ComponentClass) {
    this.components.set(name, ComponentClass);
  }

  registerBulk(components) {
    Object.entries(components).forEach(([name, component]) => {
      this.register(name, component);
    });
  }

  create(element) {
    const componentName = element.dataset.component;
    const ComponentClass = this.components.get(componentName);

    if (!ComponentClass) {
      console.warn(`No component registered for: ${componentName}`);
      return null;
    }

    const id = element.id || camelCase(componentName);
    const instance = new ComponentClass({ 
      id, 
      element 
    });
    
    this.instances.set(id, instance);
    return instance;
  }

  init() {
    document.querySelectorAll('[data-component]').forEach(element => {
      this.create(element);
    });
  }

  getInstance(id) {
    return this.instances.get(id);
  }

  destroyInstance(id) {
    const instance = this.instances.get(id);
    if (instance && instance.destroy) {
      instance.destroy();
    }
    this.instances.delete(id);
  }
}

// Maak singleton instance: 
export const componentFactory = new Factory();