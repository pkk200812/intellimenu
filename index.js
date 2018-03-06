document.getElementById('speaker1').onclick = clickEnglish1();

document.getElementById('speaker1').onclick = clickEnglish2();

document.getElementById('speaker1').onclick = clickEnglish3();

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
