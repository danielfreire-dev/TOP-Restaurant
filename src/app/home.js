import { header } from "/src/app/header";
import { logo } from "/src/assets/logo.png";
import "/src/style/style.css";

/* console.log("Webpack phone home"); */

function homePage() {
  let contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  header();

  let divContent = document.getElementById("content");

  /* append picture*/
  /* let image = document.createElement("img");
image.src = "/src/assets/food.jpg";
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
}

export { homePage };
