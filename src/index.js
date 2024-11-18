import "./styles.css";
import { loadHomeFunction } from "./home";
import { loadContactPage } from "./contact";
import { loadMenuFunction } from "./menu";
console.log("Hello world!");

loadHomeFunction();

function tabSwitch() {
    const homeButton = document.querySelector(".homeButton");
    homeButton.addEventListener("click", () => {
        document.getElementById("content").innerHTML = "";
        loadHomeFunction();
    });
    const menuButton = document.querySelector(".menuButton");
    menuButton.addEventListener("click", () => {
        document.getElementById("content").innerHTML = "";
        loadMenuFunction();
    });
    const contactButton = document.querySelector(".contactButton");
    contactButton.addEventListener("click", () => {
        document.getElementById("content").innerHTML = "";
        loadContactPage();
    });

};

tabSwitch();