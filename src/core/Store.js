/**
 * Store class that can be used to manage the state of the application.
 * @class Store
 * @method set - Set a single key-value pair in the state and dispatch the change.
 * @method setMultiple - Set multiple key-value pairs in the state and dispatch the changes.
 * @method get - Get the value of a specific key from the state.
 * @method dispatch - Dispatch the change of a specific key to the listeners.
 * @method change - Register a callback function to be called when a specific key changes.
 * @param {Object} defaultState - The default state of the application.
 * @returns {Object} - The Store instance.
 */

export class Store {
  listeners = {};

  constructor(defaultState = {}) {
    // Initialize the state with the provided default state
    this.state = { ...defaultState };
  }

  // Set a single key-value pair in the state and dispatch the change.
  set(key, value) {
    this.state[key] = value;
    this.dispatch(key);    
  }

  // Set multiple key-value pairs in the state and dispatch the changes.
  setMultiple(keys) {
    this.state = { ...this.state, ...keys };
    for (let key in keys) {
      this.dispatch(key);
    }
  }

  // Get the value of a specific key from the state.
  get(key) { 
    return this.state[key];
  }

  // Get the value of a specific key from the state.
  dispatch(key) {
    if (this.listeners[key]) {
      for (let index = 0, limit = this.listeners[key].length; index < limit; index++) {
        this.listeners[key][index](this.get(key));
      }
    }
  }

  // Register a callback function to be called when a specific key changes.
  change(key, callback) {
    if (!this.listeners[key]) {
      this.listeners[key] = [];
    }

    this.listeners[key].push(callback);
    
  }
}

export default Store;

/*  
  For a simple example of using the Store class,
  have a look at the Button component in src/components/Button.js. 
*/