(function (browserWindow) {
  var byeSpeaker = {};

  var speakWord = "Good Bye";

  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }

  browserWindow.byeSpeaker = byeSpeaker;
})(window);