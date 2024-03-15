import { homePage } from "./app/home";
import { menu } from "./app/menu";
import { location } from "./app/location";
import { runtime } from "webpack";
//alert("Hey there!");

let HomePage = new homePage();
let Menu = new menu();
let Location = new location();

let homeButton = document.getElementById("home");
let menuButton = document.getElementById("menu");
let locationButton = document.getElementById("location");
let contentDiv = document.getElementById("content");

contentDiv.innerHTML = homePage;

homeButton.addEventListener("click", function (event) {
  contentDiv.innerHTML = homePage;
});

menuButton.addEventListener("click", function (event) {
  contentDiv.innerHTML = menu;
});

locationButton.addEventListener("click", function (event) {
  contentDiv.innerHTML = location;
});
