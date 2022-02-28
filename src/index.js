import './style.css';
import { loadNavBar } from './loadNavBar';
import { loadHomePage } from './loadHomePage';
import { loadMenuPage } from './loadMenuPage';
import { loadContactPage } from './loadContactPage';


loadNavBar();
loadHomePage();

const content = document.getElementById("content");


homeLink.addEventListener("click", () => {
    let mainBody = document.getElementsByClassName("mainPageBody")[0];
    content.removeChild(mainBody);
    loadHomePage();
});

menuLink.addEventListener("click", () => {
    let mainBody = document.getElementsByClassName("mainPageBody")[0];
    content.removeChild(mainBody);
    loadMenuPage();
});

contactLink.addEventListener("click", () => {
    let mainBody = document.getElementsByClassName("mainPageBody")[0];
    content.removeChild(mainBody);
    loadContactPage();
});