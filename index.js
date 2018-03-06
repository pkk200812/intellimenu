document.getElementById('speaker1').onclick = function() {
  clickEnglish1();
}

document.getElementById('speaker2').onclick = function() {
  clickEnglish2();
}

document.getElementById('speaker3').onclick = function() {
  clickEnglish3();
}

function clickEnglish1() {
  this.snd = new Audio('english1.mp3');
  this.snd.play();
  this.snd.currentTime = 0;
}

function clickEnglish2() {
  this.snd = new Audio('english2.mp3');
  this.snd.play();
  this.snd.currentTime = 0;
}

function clickEnglish3() {
  this.snd = new Audio('english3.mp3');
  this.snd.play();
  this.snd.currentTime = 0;
}
