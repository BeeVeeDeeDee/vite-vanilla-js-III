/**
 * @namespace Elements
 * @description A object literal for creating various HTML elements with specified attributes and appending them to a parent element.
 * @property {function} DIV - Creates a <div> element.
 * @property {function} ICON - Creates a <span> element styled as an icon.
 * @property {function} IMG - Creates an <img> element.
 * @property {function} Heading - Creates a heading element (h1, h2, etc.).
 * @property {function} Button - Creates a <button> element.
 * @property {function} fontAwesomeI - Creates an <i> element styled with Font Awesome classes.
 * @property {function} span - Creates a <span> element.
 * @property {function} createElement - General method for creating any HTML element with specified attributes.
 */
export const Elements = {

  DIV: (parent, cssClass = null, cssText = null, innerHTML = null, onClick = null, id = null) => {
    let el = Elements.createElement("div", parent, cssClass, cssText, innerHTML, onClick, id);
    
    return el;
  },

  ICON: (parent, iconName = null, cssClass = null, cssText = null, innerHTML = null, onClick = null, id = null) => {
    let el = Elements.createElement("span", parent, cssClass, cssText, innerHTML, onClick, id);
    el.classList.add("material-symbols-outlined");
    el.innerText = iconName;
    
    return el;
  },

  IMG: (parent, src = null, cssClass = null, cssText = null, onClick = null, alt = null, id = null) => {
    let el = Elements.createElement("img", parent, cssClass, cssText, null, onClick, id);
    el.ondragstart = (e) => { return false; };
    if (src !== null) el.src = src;
    if (alt !== null) el.alt = alt;

    return el;
  },
  
  Heading: (parent, Number, cssClass = null, cssText = null, innerHTML = null, onClick = null, id = null) => {
    return Elements.createElement("h" + parseInt(Number), parent, cssClass, cssText, innerHTML, onClick, null, id)
  },
  
  Button: (parent, value = null, onClick = null, disabled = false, classNames = "", cssText = null, id = null,) => {
    let cssClass = classNames === null || classNames === undefined ? [] : classNames.split(" ");
    //cssClass.push("ds-btn");

    let cssDisabled = disabled ? "disabled" : null;
    if (disabled) {cssClass.push(cssDisabled)};

    let el = Elements.createElement("button", parent, cssClass.toString().replaceAll(","," "), cssText, value, onClick, id);
    
    return el;
  },

  fontAwesomeI: (parent, classNames = []) => {
    let el = Elements.createElement("i", parent, classNames.toString().replaceAll(","," "));
    return el;
  },

  span: (parent, cssClass = null, cssText = null, innerHTML = null, onClick = null, id = null) => {
    return Elements.createElement("span", parent, cssClass, cssText, innerHTML, onClick, id);
  },

  createElement: (elementType, parent, cssClass = null, cssText = null, innerHTML = null, onClick = null, id = null, name = null) => {
    let element = document.createElement(elementType);

    if (cssClass !== null) element.className = cssClass;
    if (cssText !== null) element.style.cssText = cssText;
    if (innerHTML !== null) element.innerHTML = innerHTML;
    if (onClick !== null) element.addEventListener("click", onClick);
    if (id !== null) element.id = id;
    if (name !== null) element.name = name;
    if (parent !== null) parent.appendChild(element);

    return element;
  }
}
