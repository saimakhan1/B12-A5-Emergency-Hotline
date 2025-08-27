const whiteHeart = document.getElementsByClassName("whiteHeart");
const redHeart = document.getElementById("redHeart");
let heartCount = 0;

for (const heart of whiteHeart) {
  heart.addEventListener("click", function () {
    heartCount++;
    console.log("heart count" + heartCount);
  });
}

console.log(3);
