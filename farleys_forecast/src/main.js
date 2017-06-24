/*
author: Emily Moses
project: Farley's Forecast, Asymmetrik Programming Challenge
date: 6/23/17
version: 1.0.0
*/

window.onload = function() {

  //start of game
  class Game {
  	constructor() {
  		console.log('Welcome to Farleys Forecast. Version 1.0.0');

  		this.canvas = document.getElementById("game-canvas");

      var game = new Game();
}
}

// animation

//rain function
var rainFall = document.querySelector('.rain'),
    ctx = rainFall.getContext('2d'),
    windowW = window.innerWidth,
    windowH = window.innerHeight,
    numDrops = 800,
    drops = [];

//adjust weight and speed of drops to mimic rain
function Drop(x, y) {
  var maxWeight = 0.75,
      maxSpeed = 2.7;

  this.x = x;
  this.y = y;
  this.r = randomBetween(0, 1);
  this.a = randomBetween(0, Math.PI);
  this.aStep = 0.01;


  this.weight = randomBetween(2, maxWeight);
  this.alpha = (this.weight / maxWeight);
  this.speed = (this.weight / maxWeight) * maxSpeed;

  this.update = function() {
    this.x += Math.cos(this.a) * this.r;
    this.a += this.aStep;

    this.y += this.speed;
  }

}

function init() {
  var i = numDrops,
      drop,
      x,
      y;

  while (i--) {
    x = randomBetween(0, windowW, true);
    y = randomBetween(0, windowH, true);


    drop = new Drop(x, y);
    drops.push(drop);
  }

  loop();
}

function loop() {
  var i = drops.length,
      z,
      dist,
      dropA,
      dropB;

  // clear canvas
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, windowW, windowH);
  ctx.restore();

  while (i--) {

    dropA = drops[i];
    dropA.update();

    ctx.beginPath();
    ctx.arc(dropA.x, dropA.y, dropA.weight, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'rgba(255, 255, 255, ' + dropA.alpha + ')';
    ctx.fill();

    if (dropA.y >= windowH) {
      dropA.y = -dropA.weight;
    }
  }

  requestAnimationFrame(loop);
}

function randomBetween(min, max, round) {
  var num = Math.random() * (max - min + 1) + min;

  if (round) {
    return Math.floor(num);
  } else {
    return num;
  }
}

function distanceBetween(vector1, vector2) {
  var dx = vector2.x - vector1.x,
      dy = vector2.y - vector1.y;

  return Math.sqrt(dx*dx + dy*dy);
}
init();
}


//button function Try This! button
function flipFunct() {
    var flip = document.getElementById("game-canvas");
    if (flip.className === "rain") {
        flip.className = "thunder";
        document.getElementById('try').innerHTML = "Hold Up";
    } else {
        flip.className = "rain";
        document.getElementById('try').innerHTML = "Try This!";
    }
}

//button function Now This! button
function antFunct() {
    var flip = document.getElementById("game-canvas");
    if (flip.className === "rain") {
        flip.className = "ant";
        document.getElementById('now').innerHTML = "That's Enough";
    } else {
        flip.className = "rain";
        document.getElementById('now').innerHTML = "Now This!";

    }
}

function pauseFunct() {
    var flip = document.getElementById("sheep");
    if (flip.className === "farley") {
        flip.className = "pause";
        document.getElementById('pause').innerHTML = "Play";
    } else {
        flip.className = "farley";
        document.getElementById('pause').innerHTML = "Pause";
    }
}



//other capabilities : snow
/*
//snow animation function
var snowFall = document.querySelector('.snow'),
    ctx = snowFall.getContext('2d'),
    windowW = window.innerWidth,
    windowH = window.innerHeight,
    numFlakes = 300,
    flakes = [];

//adjust weight and speed of flakes to mimic snow
function Flake(x, y) {
  var maxWeight = 4,
      maxSpeed = 0.75;

  this.x = x;
  this.y = y;
  this.r = randomBetween(0, 1);
  this.a = randomBetween(0, Math.PI);
  this.aStep = 0.01;


  this.weight = randomBetween(2, maxWeight);
  this.alpha = (this.weight / maxWeight);
  this.speed = (this.weight / maxWeight) * maxSpeed;

  this.update = function() {
    this.x += Math.cos(this.a) * this.r;
    this.a += this.aStep;

    this.y += this.speed;
  }

}

function init() {
  var i = numFlakes,
      flake,
      x,
      y;

  while (i--) {
    x = randomBetween(0, windowW, true);
    y = randomBetween(0, windowH, true);


    flake = new Flake(x, y);
    flakes.push(flake);
  }

  loop();
}

function loop() {
  var i = flakes.length,
      z,
      dist,
      flakeA,
      flakeB;

  // clear canvas
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, windowW, windowH);
  ctx.restore();

  while (i--) {

    flakeA = flakes[i];
    flakeA.update();

    ctx.beginPath();
    ctx.arc(flakeA.x, flakeA.y, flakeA.weight, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'rgba(255, 255, 255, ' + flakeA.alpha + ')';
    ctx.fill();

    if (flakeA.y >= windowH) {
      flakeA.y = -flakeA.weight;
    }
  }

  requestAnimationFrame(loop);
}

function randomBetween(min, max, round) {
  var num = Math.random() * (max - min + 1) + min;

  if (round) {
    return Math.floor(num);
  } else {
    return num;
  }
}

function distanceBetween(vector1, vector2) {
  var dx = vector2.x - vector1.x,
      dy = vector2.y - vector1.y;

  return Math.sqrt(dx*dx + dy*dy);
}
init();
}*/
