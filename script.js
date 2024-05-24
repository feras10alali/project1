
  var sentences = ["اختر اللغة.", "choose the language."];
  function typewriter() {
  if (i < sentences.length) {
    var currentSentence = sentences[i]; // Get the current sentence

    // Loop through characters in the current sentence
    for (var j = 0; j < currentSentence.length; j++) {
      document.getElementById("typewriter").innerHTML += currentSentence.charAt(j);
      setTimeout(function() {}, 10); // Short delay between characters
    }

    // Clear the paragraph after typing the sentence (optional)
    document.getElementById("typewriter").innerHTML = "";

    i++; // Move to the next sentence in the array
    setTimeout(typewriter, 1000); // Delay between sentences (1 second here)
   }
  }

