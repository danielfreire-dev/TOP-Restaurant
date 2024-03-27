import { homePage } from "/src/app/home";
import { menu } from "/src/app/menu";
import { location } from "/src/app/location";
import logo from "/src/assets/logo.png";
import css from "/src/style/style.css";

homePage();

let homeButton = document.getElementById("home");
let menuButton = document.getElementById("menu");
let locationButton = document.getElementById("location");
let contentDiv = document.getElementById("content");

homeButton.addEventListener("click", function (event) {
  event.preventDefault();
  homePage();
});

menuButton.addEventListener("click", function (event) {
  event.preventDefault();
  menu();
});

locationButton.addEventListener("click", function (event) {
  event.preventDefault();
  location();
});
