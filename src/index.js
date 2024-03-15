/* import homePage from "/src/app/home";
import menu from "/src/app/menu";
import location from "/src/app/location"; */
//alert("Hey there!");

/* let HomePage = new homePage();
let Menu = new menu();
let Location = new location(); */

let homeButton = document.getElementById("home");
let menuButton = document.getElementById("menu");
let locationButton = document.getElementById("location");
let contentDiv = document.getElementById("content");

//contentDiv.innerHTML = homePage;

homeButton.addEventListener("click", function (event) {
  event.preventDefault();
  let logoDiv = document.createElement("div");
  logoDiv.className = "logo";
  // insert Logo
  let h1Div = document.createElement("div");
  h1Div.className = "Title";
  h1Div.appendChild.innerHTML = "<h1>TOP Restaurant</h1>";
  let image = document.createElement("img");
  let divContent = document.getElementById("content");
  image.src = "/src/assets/victoria-shes-UC0HZdUitWY-unsplash.jpg";
  image.style.cssText = "width: 80%";
  divContent.appendChild(image);
  let frameDiv = document.createElement("div");
  //append picture
  let bodyDiv = document.createElement("div");
  bodyDiv.className = "body";
  bodyDiv.innerHTML = `<p>Welcome to Valhalla's Feast, where the spirit of the Viking era comes alive through our culinary delights! Nestled in the heart of [insert location], our restaurant offers a unique and immersive dining experience inspired by the legendary Norse warriors. Step into a world where long tables are adorned with hearty feasts, mead flows freely, and the ambiance resonates with the echoes of ancient sagas.</p>
<p>At Valhalla's Feast, we pride ourselves on crafting authentic Viking cuisine, meticulously prepared to transport you back in time. From savory smoked meats to freshly baked breads and robust stews, each dish pays homage to the rich culinary traditions of the Norse people. Our chefs source the finest ingredients, drawing inspiration from historical recipes and modern culinary techniques to create a menu that honors the spirit of adventure and exploration.</p>
<p>Whether you're a seasoned warrior or a curious traveler, join us on a gastronomic journey through the Viking age. Raise your horn, share tales of valor, and indulge in a feast fit for Odin himself. At Valhalla's Feast, every meal is an epic saga waiting to unfold. Skål!</p>`;
  contentDiv.innerHTML = "Best homepage ever!!! <br>";
});

menuButton.addEventListener("click", function (event) {
  event.preventDefault();
  contentDiv.innerHTML = "Best food ever!!!";
  let logoDiv = document.createElement("div");
  logoDiv.className = "logo";
  // insert Logo
  let h1Div = document.createElement("div");
  h1Div.className = "title";
  h1Div.appendChild.innerHTML = "<h1>TOP Restaurant</h1>";
  let menuDiv = document.createElement("div");
  menuDiv.className = "menu";
  let menuTitle = document.createElement("h1");
  menuTitle.innerHTML = "Valhalla's Feast: A Journey Through Norse Cuisine";
  menuDiv.appendChild(menuTitle);
  let courseDiv = document.createElement("div");
  courseDiv.className = "course";
  let List = document.createElement("ol");
  let item1List = List.appendChild("li");
  item1List.innerHTML = "Viking Platter:";
  let item2List = List.appendChild("li");
});

locationButton.addEventListener("click", function (event) {
  event.preventDefault();
  contentDiv.innerHTML = "Best location ever!!!";
});

/* function homePage() {
  /* let image = document.createElement("img");
  let divContent = document.getElementById("content");
  image.src = "/src/assets/victoria-shes-UC0HZdUitWY-unsplash.jpg";
  document.divContent.appendChild(image); */
/*  let homeContent = document.getElementById("content");
  homeContent.innerHTML = "Best homepage ever!!!";
}

function menu() {
  let menuContent = document.getElementById("content");
  menuContent.textContent = "Best food ever!!!";
}

function location() {
  let locationContent = document.getElementById("content");
  locationContent.innerHTML = "Best location ever!!!";
} */
