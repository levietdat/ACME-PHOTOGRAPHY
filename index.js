const imgOne = document.querySelector("#id-1");
const imgTwo = document.querySelector("#id-2");
const imgThree = document.querySelector("#id-3");
const imgFour = document.querySelector("#id-4");
const imgFive = document.querySelector("#id-5");
const overlay = document.querySelector(".overlay");
const imgOverlay = document.querySelector(".overlay-image");


const listImage = [ imgOne, imgTwo, imgThree, imgFour, imgFive];

const images = listImage.forEach(function (image, index) {
  image.onclick = function () {
    const srcElement = image.getAttribute("src");
     imgOverlay.setAttribute("src",srcElement);
      overlay.style.display = "flex"
 };  
});
imgOverlay.onclick = function(e) {
  e.stopPropagation()
}


overlay.onclick = function (e) {
  overlay.style.display= "none"
}
