import Hikes from "./hikes.js";
//import Comments from "./comments.js";

const hikes = new Hikes('hikes');
//const comments = new Comments('commentsDiv', 'hikes');

window.addEventListener('load', () => {
    hikes.showHikeList();
    //comments.showCommentsList('all');
});
