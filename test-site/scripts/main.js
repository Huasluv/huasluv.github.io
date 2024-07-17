let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Arona_Portrait.webp") {
    myImage.setAttribute("src", "images/Arona_New_Year_Portrait.webp");
  } else {
    myImage.setAttribute("src", "images/Arona_Portrait.webp");
  }
};


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "hello，" + myName;
  }

  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "hello，" + storedName;
  }
  

  myButton.onclick = function () {
    setUserName();
  };

  
  function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = "hello，" + myName;
    }
  }
  