import Auth from './auth.js';

import {makeRequest} from './authHelpers.js';


const myAuth = new Auth();

async function getPosts() {
    let allPosts = await makeRequest('posts?', 'GET',null, myAuth.jwtToken);
    console.log("allPosts in week11: ", allPosts);
    let postsDiv =document.querySelector('#postsID');
    postsDiv.classList.remove('hidden');
    renderCommentList(allPosts, postsDiv);
    

    //console.log("the function getPosts is called");
}

function renderCommentList(listOfCommentsToRender, divToRender) {

    let titleOfComments = document.createElement("h1");
    titleOfComments.innerHTML = "List of Posts";
    divToRender.appendChild(titleOfComments);

    //console.log("listOfCommentsToRender: ",listOfCommentsToRender);
    let listOfComments = document.createElement("ul");
    listOfCommentsToRender.forEach( comment => {
        let individualComment = document.createElement("li");
        let commentId = document.createElement("p");
        commentId.innerHTML = comment.id;
        let commentTitle = document.createElement("p");
        commentTitle.innerHTML = comment.title;
        let commentContent = document.createElement("p");
        commentContent.innerHTML = comment.content;

        individualComment.appendChild(commentId); // add the first paragraph
        individualComment.appendChild(commentTitle); // add the second paragraph
        individualComment.appendChild(commentContent); // add the third paragraph

        listOfComments.appendChild(individualComment); // add the line
    });

    divToRender.appendChild(listOfComments);

    let addNewDiv = document.createElement("div");
    addNewDiv.id = "addNewDiv";
    let newCommentInput = document.createElement("input");
    newCommentInput.type = 'text';
  
    let addCommentInputButton = document.createElement("input");
    addCommentInputButton.type = 'button';
    addCommentInputButton.value = "+";
        
    addCommentInputButton.addEventListener('click', () => {
    this.addComment(newCommentInput.value, typeOfFilter);
    });

    addNewDiv.appendChild(newCommentInput);
    addNewDiv.appendChild(addCommentInputButton);

    divToRender.appendChild(addNewDiv);
}

const form = document.forms['login'];
form.addEventListener('submit', tryToLog, false);

function tryToLog(event) {
    event.preventDefault();
    myAuth.login(getPosts);
}
