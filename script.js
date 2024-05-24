document.addEventListener('DOMContentLoaded', function() {
  // Text to be typed out
  var text = "Hello, world!";

  // Delay between each letter being typed (in milliseconds)
  var typingSpeed = 100;

  var index = 0;
  var typingInterval = setInterval(function() {
    if (index < text.length) {
      document.getElementById('typing-text').textContent += text.charAt(index);
      index++;
    } else {
      clearInterval(typingInterval);
    }
  }, typingSpeed);
});
