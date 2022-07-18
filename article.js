const popUp = document.querySelector(".pop-up");
const popUp2 = document.querySelector(".pop-up-2");
const shareBtn = document.querySelector(".share-btn");
const shareBtn2 = document.querySelector(".share-btn-2");
const shareIcon = document.querySelector(".fa-share");
const shareIcon2 = document.getElementById("fa-share-2");

shareBtn.addEventListener("click", () => {
  popUp.classList.toggle("active");
  shareIcon.classList.toggle("active");
  shareBtn.classList.toggle("active");
});

shareBtn2.addEventListener("click", () => {
  popUp2.classList.toggle("active");
  shareIcon2.classList.toggle("active");
  shareBtn2.classList.toggle("active");
});
