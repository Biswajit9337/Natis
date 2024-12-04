function playSoundAndSpeak(buttonName) {
  // Play click sound
  const audio = document.getElementById('clickSound');
  audio.currentTime = 0;
  audio.play();

  // Speak the button name using Text-to-Speech
  if ('speechSynthesis' in window) {
    const speech = new SpeechSynthesisUtterance(buttonName);
    speech.lang = 'en-US';
    speech.rate = 1; // Set speed (1 is normal speed)
    window.speechSynthesis.speak(speech);
  } else {
    alert('Text-to-Speech is not supported in your browser. Please use audio files instead.');
  }
}
function startNewGame() {
  // Play click sound
  const audio = document.getElementById('clickSound');
  audio.currentTime = 0;
  audio.play();

  // Create the speech synthesis utterance
  const speech = new SpeechSynthesisUtterance('New Game');
  speech.lang = 'en-US';
  speech.rate = 1; // Set speed (1 is normal speed)

  // After speech ends, redirect to the second page
  speech.onend = function () {
    // Redirect to second page after the speech is finished
    window.location.href = "second.html";  // Change 'second.html' to your actual second page file name
  };

  // Speak the text
  window.speechSynthesis.speak(speech);
}


