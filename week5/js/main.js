import Hikes from "hikes.js";

const hikes = new Hikes('hikes');
window.addEventListener('load', () => {
    hikes.showHikeList();
});