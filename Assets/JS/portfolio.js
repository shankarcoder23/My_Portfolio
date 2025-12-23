
  const typingElement = document.querySelector(".typing");
  const text = typingElement.getAttribute("data-text");
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 120);
    }
  }

  typeEffect();

