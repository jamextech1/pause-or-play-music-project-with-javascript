let playIcon = document.querySelector(".play--icon");
let pauseIcon = document.querySelector(".pause--icon");
let playSong = new Audio("GUC_All_That_Matters_9jaflaver.com_.mp3");
playIcon.addEventListener("click", function () {
  playIcon.style.display = "none";
  pauseIcon.style.display = "block";
  playSong.play();
});
pauseIcon.addEventListener("click", function () {
  pauseIcon.style.display = "none";
  playIcon.style.display = "block";
  playSong.pause();
});
