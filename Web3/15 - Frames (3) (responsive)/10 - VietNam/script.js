function goToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function back() {
  history.back();
}

function forward() {
  history.forward();
}

var audio = new Audio('audio/HelloVietNam-QuynhAnh.mp3');
audio.play();