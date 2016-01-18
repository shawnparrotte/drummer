$(document).ready(function(){

  createjs.Sound.registerSound("audio/Kick.mp3", "kick");
  createjs.Sound.registerSound("audio/Snaredrum.mp3", "snare");
  createjs.Sound.registerSound("audio/Hats.mp3", "hats");
  createjs.Sound.registerSound("audio/Crash.mp3", "crash");
  createjs.Sound.registerSound("audio/Ride.mp3", "ride");
  createjs.Sound.registerSound("audio/HT.mp3", "ht");
  createjs.Sound.registerSound("audio/LT.mp3", "lt");

})


$("#kick").mousedown(function(){
  createjs.Sound.play("kick");
});

$("#snare").mousedown(function(){
  createjs.Sound.play("snare");
});

$("#hats").mousedown(function(){
  createjs.Sound.play("hats");
});

$("#crash").mousedown(function(){
  createjs.Sound.play("crash");
});

$("#ride").mousedown(function(){
  createjs.Sound.play("ride");
});

$("#ht").mousedown(function(){
  createjs.Sound.play("ht");
});

$("#lt").mousedown(function(){
  createjs.Sound.play("lt");
});


$(window).keydown(function(event){
  console.log(event.which);

  if(event.which === 86){
    createjs.Sound.play("kick");
  }

  if(event.which === 70){
    createjs.Sound.play("snare");
  }

  if(event.which === 74){
    createjs.Sound.play("hats");
  }

  if(event.which === 73){
    createjs.Sound.play("crash");
  }

  if(event.which === 79){
    createjs.Sound.play("ride");
  }

  if(event.which === 75){
    createjs.Sound.play("ht");
  }

  if(event.which === 76){
    createjs.Sound.play("lt");
  }

});
