// JavaScript Events

/*
function subscribe() {
  document.getElementById("text").innerHTML = "Subscribed";
  document.getElementById("btn").innerHTML = "Subscribed";
  document.getElementById("btn").style.backgroundColor = "#262626";
}
*/

/*
function like() {
  document.getElementById("like").innerHTML =
    "<i class='fa-solid fa-thumbs-up'></i> Liked";
}
*/

/*
function keyPress() {
  document.getElementById("text").innerHTML = "Key Pressed";
}
*/

/*
function onLoad() {
  alert("Testing JavaScript OnLoad");
  document.getElementById("text").innerHTML = "Website Loaded Successfully";
}
*/

/*
function windowResize() {
  document.getElementById("textarea").style.height = "100px";
  document.getElementById("form").style.fontFamily = "'Courier New'";
}
*/

/*
function onScroll() {
  document.getElementById("form").innerHTML = "Scolling";
}
*/

/*
document.getElementById("btn").onclick = function () {
  document.getElementById("btn").innerHTML = "Subscribed";
};
*/

/*
document.getElementById("btn").addEventListener(
  "click",
  function (e) {
    document.getElementById("btn").innerHTML = "Subscribed";
  },
  false, // ? Event Bubbling
  true // ? Event Capturing
);
*/

document.getElementById("ul").addEventListener(
  "click",
  function (e) {
    console.log("ul Clicked");
  },
  true
);

document.getElementById("li").addEventListener(
  "click",
  function (e) {
    console.log("li Clicked");
  },
  true
);

document.getElementById("btn").mouseovers = function () {
  document.getElementById("btn").innerHTML = "Subscribed";
};
