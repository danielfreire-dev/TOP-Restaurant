import home from "/src/app/home";
import menu from "/src/app/menu";
import location from "/src/app/location";

export default function changePage(page) {
  if (page === "home") {
    home();
  } else if (page === "location") {
    location();
  } else if (page === "menu") {
    menu();
  } else {
    console.log(`error, ${page} is not an available page`);
  }
}
