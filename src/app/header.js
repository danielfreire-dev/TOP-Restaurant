import logo from "/src/assets/logo.png";
import "/src/style/style.css";

function header() {
  let contentDiv = document.getElementById("content");
  let headerContent = document.createElement("div");
  let h1Div = document.createElement("div");
  headerContent.setAttribute("id", "header");

  let logoHeader = document.createElement("img");
  logoHeader.setAttribute("id", "logo");
  /* logoHeader.style.width = "30px"; */
  logoHeader.src = logo;

  h1Div.appendChild(logoHeader);

  h1Div.className = "title";
  let title = document.createElement("h1");
  title.textContent = "Valhalla's Feast";
  h1Div.appendChild(title);
  headerContent.appendChild(h1Div);
  contentDiv.appendChild(headerContent);
}

export { header, logo };
