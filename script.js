// JS part 1--> heart count
const whiteHeart = document.getElementsByClassName("whiteHeart");
const heartCountFinal = document.getElementById("heartCountFinal");
let heartCount = 0;

for (const heart of whiteHeart) {
  heart.addEventListener("click", function () {
    heartCount++;
    //console.log("heart count " + heartCount);
    heartCountFinal.innerText = heartCount;
  });
}

// call button deal - common part
const greenCall = document.getElementsByClassName("greenCall");
const coinCountFinal = document.getElementById("coinCountFinal");
//let coinCount = 100;
let coinCount = parseInt(coinCountFinal.innerText);
//console.log("initial coin count is: " + coinCount);

for (const call of greenCall) {
  call.addEventListener("click", function (event) {
    if (coinCount < 20)
      alert(
        "You don't have enough balance to call. To make a successful call, you need at least 20 coins. "
      );
    else {
      coinCount = coinCount - 20;
      //alert(coinCount);
      coinCountFinal.innerText = coinCount;

      callAlert(event.target.id);
    }
  });
}

// Function to handle call alert
function callAlert(id) {
  const clicked = document.getElementById(id);

  // parent container (where h2 and p live)
  let parentDiv;
  if (id === "card1") {
    parentDiv = clicked.parentElement;
  } else if (id === "card2") {
    parentDiv = clicked.parentElement.parentElement;
  } else if (id === "card3") {
    parentDiv = clicked.parentElement.parentElement;
  } else if (id === "card4") {
    parentDiv = clicked.parentElement.parentElement;
  }
  if (id === "card5") {
    parentDiv = clicked.parentElement;
  } else if (id === "card6") {
    parentDiv = clicked.parentElement.parentElement;
  } else if (id === "card7") {
    parentDiv = clicked.parentElement.parentElement;
  } else if (id === "card8") {
    parentDiv = clicked.parentElement.parentElement;
  } else if (id === "card9") {
    parentDiv = clicked.parentElement.parentElement;
  }
  // find h2 and p inside that parent
  const h2Text = parentDiv.querySelector("h2")?.innerText || "";
  const pText = parentDiv.querySelector("p")?.innerText || "";

  alert("📞Calling " + pText + " " + h2Text + "...");
}
