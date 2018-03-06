document.getElementById('speaker1').onclick = clickEnglish1();

document.getElementById('speaker2').onclick = clickEnglish2();

document.getElementById('speaker3').onclick = clickEnglish3();

function clickEnglish1() {
  var snd = new Audio('english1.mp3');
  snd.play();
  snd.currentTime = 0;
}

function clickEnglish2() {
  var snd = new Audio('english2.mp3');
  snd.play();
  snd.currentTime = 0;
}

function clickEnglish3() {
  var snd = new Audio('english3.mp3');
  snd.play();
  snd.currentTime = 0;
}
