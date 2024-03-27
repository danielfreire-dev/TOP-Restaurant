import { header } from "/src/app/header";
import logo from "/src/assets/logo.png";
import "/src/style/style.css";

/* console.log("I will find you and I will visit you!"); */

function location() {
  let contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  header();

  let locationDiv = document.createElement("div");
  locationDiv.innerHTML =
    "<p>Located in the Heart of Viking land. Only true Vikings are allowed to learn our ture location.</p>";
  contentDiv.appendChild(locationDiv);
}
/* locationButton.addEventListener("click", function (event) {
  event.preventDefault();
  contentDiv.innerHTML = "";

  header();

  let locationDiv = document.createElement("div");
  locationDiv.innerHTML =
    "<p>Located in the Heart of Viking land. Only true Vikings are allowed to learn our ture location.</p>";
  contentDiv.appendChild(locationDiv);
}); */

export { location };
