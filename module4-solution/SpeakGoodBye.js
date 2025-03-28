// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2

//Immediatly Invoked Function Expression
(function (window) {
var byeSpeaker = {};


  var speakWord = "Good Bye";

  byeSpeaker.simpleSpeak = function(name){
    return speakWord + " " + name;

}
  
  byeSpeaker.speak = function(name){
  console.log(speakWord + " " + name);
}

  window.byeSpeaker = byeSpeaker;

})(window);


