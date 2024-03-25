/* import homePage from "/src/app/home";
import menu from "/src/app/menu";
import location from "/src/app/location"; */
import logo from "/src/assets/logo.png";
import "/src/style/style.css";

/* alert("Hey there!"); */

/* let HomePage = new homePage();
let Menu = new menu();
let Location = new location(); */

let homeButton = document.getElementById("home");
let menuButton = document.getElementById("menu");
let locationButton = document.getElementById("location");
let contentDiv = document.getElementById("content");

/* contentDiv.innerHTML = homePage; */

homeButton.addEventListener("click", function (event) {
  event.preventDefault();
  contentDiv.innerHTML = "";
  /* contentDiv.innerHTML = "Best homepage ever!!! <br>"; */

  header();

  let image = document.createElement("img");
  let divContent = document.getElementById("content");
  /* append picture */

  /* image.src = "/src/assets/food.jpg";
  image.style.cssText = "width: 80%";
  divContent.appendChild(image);
  let frameDiv = document.createElement("div"); */

  let bodyDiv = document.createElement("div");
  bodyDiv.className = "body";
  bodyDiv.innerHTML = `<p>Welcome to Valhalla's Feast, where the spirit of the Viking era comes alive through our culinary delights! Nestled in the heart of [insert location], our restaurant offers a unique and immersive dining experience inspired by the legendary Norse warriors. Step into a world where long tables are adorned with hearty feasts, mead flows freely, and the ambiance resonates with the echoes of ancient sagas.</p>
<p>At Valhalla's Feast, we pride ourselves on crafting authentic Viking cuisine, meticulously prepared to transport you back in time. From savory smoked meats to freshly baked breads and robust stews, each dish pays homage to the rich culinary traditions of the Norse people. Our chefs source the finest ingredients, drawing inspiration from historical recipes and modern culinary techniques to create a menu that honors the spirit of adventure and exploration.</p>
<p>Whether you're a seasoned warrior or a curious traveler, join us on a gastronomic journey through the Viking age. Raise your horn, share tales of valor, and indulge in a feast fit for Odin himself. At Valhalla's Feast, every meal is an epic saga waiting to unfold. </p>
<p>Skål!</p>
`;

  contentDiv.appendChild(bodyDiv);
});

menuButton.addEventListener("click", function (event) {
  event.preventDefault();
  contentDiv.innerHTML = "";
  /* contentDiv.innerHTML = "Best food ever!!!"; */
  header();

  let menuDiv = document.createElement("div");
  menuDiv.className = "menu";
  contentDiv.appendChild(menuDiv);

  let menuTitle = document.createElement("h2");
  menuTitle.innerHTML = "Valhalla's Feast: A Journey Through Norse Cuisine";
  menuDiv.appendChild(menuTitle);

  let contentHTML = document.createElement("div");
  contentHTML.innerHTML = `
  <h3>Appetizers:</h3>
<ol>
<li>Viking Platter:</li>
<ul>
   <li style="list-style-type:"-"">A selection of smoked fish, including herring and salmon, served with pickled vegetables, flatbread, and herb-infused butter.</li>
</ul>
<li>Thor's Flame-Roasted Vegetables:</li>
<ul>
   <li> Seasonal vegetables roasted over an open flame and seasoned with Viking spices, served with a drizzle of honey and a sprinkle of toasted nuts.</li>
</ul>
</ol>
<h3>Main Courses:</h3>
<ol>
<li>Ragnar's Roast Lamb:</li>
<ul>
   <li>Tender lamb leg slow-roasted with herbs and garlic, served with roasted root vegetables and a juniper berry sauce.</li>
</ul>
<li>Berserker's Beef Stew:</li>
<ul>
   <li>Hearty beef stew cooked with root vegetables, barley, and ale, served in a bread bowl for an authentic Viking experience.</li>
</ul>
<li>Valkyrie's Bounty Seafood Skewers:</li>
<ul>
   <li>Skewers of marinated shrimp, scallops, and whitefish grilled to perfection and served with a side of Viking rice pilaf.</li>
</ul>
</ol>
<h3>Sides:</h3>
<ol>
<li>Viking Lager Bread:</li>
<ul>
   <li>Freshly baked bread made with Viking Lager beer, served warm with whipped herb butter.</li>
</ul>
<li>Foraged Greens Salad:</li>
<ul>
   <li>Mixed greens tossed with foraged berries, toasted seeds, and a Viking herb vinaigrette.</li>
</ul>
</ol>
<h3>Desserts:</h3>
<ol>
<li>Mead-infused Honey Cake:</li>
<ul>
   <li>Moist honey cake infused with mead, topped with whipped cream and a drizzle of honey.</li>
</ul>
<li>Valhalla's Apple Skald:</li>
<ul>
   <li>Baked apples stuffed with nuts, dried fruits, and spices, served warm with a dollop of vanilla skyr.</li>
</ul>
</ol>
<h3>Beverages:</h3>
<ol>
<li>Odin's Mead:</li>
<ul>
   <li>A traditional honey wine brewed according to ancient Viking recipes.</li>
</ul>
<li>Valkyrie's Ale:</li>
<ul>
   <li>A robust ale brewed with Nordic grains and hops, served in tankards for an authentic touch.</li>
</ul>
<li>Thor's Thunder Punch:</li>
<ul>
   <li>A fruity punch spiked with Viking spirits and served in carved wooden goblets.</li>
   </ul>
</ol>
`;
  contentDiv.appendChild(contentHTML);
});

locationButton.addEventListener("click", function (event) {
  event.preventDefault();
  contentDiv.innerHTML = "";

  header();

  let locationDiv = document.createElement("div");
  locationDiv.innerHTML =
    "<p>Located in the Heart of Viking land. Only true Vikings are allowed to learn our ture location.</p>";
  contentDiv.appendChild(locationDiv);
});

/* function homePage() {
  /* let image = document.createElement("img");
  let divContent = document.getElementById("content");
  image.src = "/src/assets/food.jpg";
  document.divContent.appendChild(image); */
/*  let homeContent = document.getElementById("content");
  homeContent.innerHTML = "Best homepage ever!!!";
}

function location() {
  let locationContent = document.getElementById("content");
  locationContent.innerHTML = "Best location ever!!!";
} */
function header() {
  let headerContent = document.createElement("div");
  let h1Div = document.createElement("div");
  headerContent.setAttribute("id", "header");

  let logoHeader = document.createElement("img");
  logoHeader.setAttribute("id", "logo");
  logoHeader.style.width = "30px";
  logoHeader.src = logo;

  h1Div.appendChild(logoHeader);

  h1Div.className = "title";
  let title = document.createElement("h1");
  title.textContent = "Valhalla's Feast";
  h1Div.appendChild(title);
  headerContent.appendChild(h1Div);
  contentDiv.appendChild(headerContent);
}
