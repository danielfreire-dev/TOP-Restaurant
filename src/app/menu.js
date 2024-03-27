import { header } from "/src/app/header";
import { logo } from "/src/assets/logo.png";
import "/src/style/style.css";

/* console.log("Bring da food!"); */

function menu() {
  let contentDiv = document.getElementById("content");
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
  menuDiv.appendChild(contentHTML);
}

export { menu };
