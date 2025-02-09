import './css/main.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { componentFactory } from '@core/Factory';
import { Header, ScrollButton, Gallery, Contact } from '@components';

// Registreer componenten 1 voor 1.
// componentFactory.register('header', Header);
// componentFactory.register('button', Button);
// componentFactory.register('gallery', Gallery);
// componentFactory.register('contact', Contact);

// regisreer componenten in bulk 
componentFactory.registerBulk({
  header: Header,
  scrollButton: ScrollButton,
  gallery: Gallery,
  contact: Contact
});


// Initialiseer componenten
document.addEventListener('DOMContentLoaded', () => {
  componentFactory.init();
});



