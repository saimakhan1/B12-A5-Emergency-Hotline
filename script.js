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
let callHistoryList = [];
for (const call of greenCall) {
  call.addEventListener("click", function (event) {
    if (coinCount < 20)
      alert(
        "❌ You don't have enough balance to call. To make a successful call, you need at least 20 coins. "
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

  //call history
  const data = {
    service: pText,
    cellNo: h2Text,
    date: new Date().toLocaleTimeString(),
  };

  callHistoryList.push(data);
  console.log(callHistoryList);
  const callHistoryRecord = document.getElementById("callHistoryRecord");
  const div = document.createElement("div");
  div.style.backgroundColor = "#ecf0f1";
  div.style.margin = "3px";
  div.style.marginTop = "10px";
  div.style.padding = "5px";
  div.innerHTML = `
   <div style="display:flex ;align-items:center; justify-content: space-between">
    <div>
        <p>${data.service}</p>
        <p>${data.cellNo}</p>
    </div>

    <div> <p>${data.date}</p></div>
   </div>
    `;
  callHistoryRecord.appendChild(div);

  //clear button of callHistory

  const clearButton = document.getElementById("clearButton");
  clearButton.addEventListener("click", function () {
    callHistoryList = [];
    callHistoryRecord.innerHTML = "";
  });
}

//Challenge Part- Copy

function copyAlert(copy) {
  // Get the h2 text
  const copyItem = copy.parentElement.querySelector("h2").innerText;

  // Copy to clipboard
  navigator.clipboard
    .writeText(copyItem)
    .then(() => {
      alert(copyItem + " is copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}

const copyClass = document.getElementsByClassName("copyClass");
const copyCount = document.getElementById("copyCount");
let copyCountValue = 0;

for (const copy of copyClass) {
  copy.addEventListener("click", function () {
    copyAlert(copy);
    copyCountValue++;
    copyCount.innerText = copyCountValue;
  });
}
/* function copyAlert(copy) {
  // go to parent div of the button
  const copyItem = copy.parentElement.querySelector("h2");
  // get its text
  alert(copyItem.innerText + " is copying");
}

const copyClass = document.getElementsByClassName("copyClass");
const copyCount = document.getElementById("copyCount");
let copyCountValue = 0;

// loop through buttons
for (const copy of copyClass) {
  copy.addEventListener("click", function () {
    copyAlert(copy);
    copyCountValue++;
    copyCount.innerText = copyCountValue;
  });
} */

// challenge part- copy

/* function copyAlert(copy) {
  const copyItem = copy.parentDiv.child(h2);
  alert(copyItem + " is copying");
}
const copyClass = document.getElementsByClassName("copyClass");
const copyCount = document.getElementById("copyCount");
let copyCountValue = 0;

for (const copy of copyClass) {
  copy.addEventListener("click", function () {
    copyAlert(copy);
    copyCountValue++;
    // console.log("total copy count is: " + copyCountValue);
    copyCount.innerText = copyCountValue;
  });
} */
