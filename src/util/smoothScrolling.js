export const smoothScrolling = (target, offset = 0) => {
  // Get target element  
  const targetElement = document.getElementById(target);

  // Scroll to target
  if(targetElement) {
    let targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: targetElement.getBoundingClientRect().top === 0 ? targetPosition = 0 : targetPosition - offset,
      behavior: 'smooth'
    });
  } else {
    console.error('Target element not found');
  }
}


