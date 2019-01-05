(function (browserWindow) {
  var helloSpeaker = {};

  var speakWord = "Hello";

  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }

  browserWindow.helloSpeaker = helloSpeaker;
})(window);