function imitateTyping() {
  var options1 = {
    strings: ['artem'],
    typeSpeed: 100,
    showCursor: false,
  };
  var typed = new Typed('.typing-imitation-1', options1);
  
  var options2 = {
    strings: ['Lomakin'],
    typeSpeed: 200,
  };
  var typed = new Typed('.typing-imitation-2', options2);
}

function fadeOut(element, animTime) {  
  element.style.transition = `opacity ${animTime}ms`;
  element.style.opacity = '0';
  setTimeout(() => {
    element.style.display = 'none';
  }, animTime);
}

window.onload = () => {
  let onloader = document.getElementById('onloader');
  setTimeout(() => {
    try {
      fadeOut(onloader, 350);
      setTimeout(imitateTyping, 350);
    } finally {
      window.scrollTo(0, 0);
    }
  }, 500);  
};
