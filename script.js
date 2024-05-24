document.addEventListener('DOMContentLoaded', function() {
  var sentences = ["اختر اللغة.", "choose the language."];
  var currentIndex = 0;
  var currentSentence = sentences[currentIndex];
  var typingSpeed = 100;
  var deleteSpeed = 50;
  
  function typeText() {
    var index = 0;
    var typingInterval = setInterval(function() {
      if (index < currentSentence.length) {
        document.getElementById('typing-text').textContent += currentSentence.charAt(index);
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(deleteText, 2000); //
      }
    }, typingSpeed);
  }
  
  function deleteText() {
    var index = currentSentence.length - 1;
    var deleteInterval = setInterval(function() {
      if (index >= 0) {
        var newText = document.getElementById('typing-text').textContent.slice(0, -1);
        document.getElementById('typing-text').textContent = newText;
        index--;
      } else {
        clearInterval(deleteInterval);
        currentIndex = 0;
        if (currentIndex < sentences.length) {
          currentSentence = sentences[currentIndex];
          setTimeout(typeText, 500); // Wait for 0.5 second before typing next sentence
        }
      }
    }, deleteSpeed);
  }
  
  typeText();
});
