import Auth from './auth.js';

import {makeRequest} from './authHelpers.js';


const myAuth = new Auth();

/*async function addPosts(comment) {
    
    let listToAdd = document.querySelector("#listOfComments");
    let individualComment = document.createElement("li");
    let commentId = document.createElement("p");
    commentId.innerHTML = comment.id;
    let commentTitle = document.createElement("p");
    commentTitle.innerHTML = comment.title;
    let commentContent = document.createElement("p");
    commentContent.innerHTML = comment.content;
    individualComment.appendChild(commentId); 
    individualComment.appendChild(commentTitle);
    individualComment.appendChild(commentContent);
    listToAdd.appendChild(individualComment);
}*/

async function createNewPost(e) {
    e.preventDefault();
    const addForm = document.forms['addNewForm'];
    const newComment = {
        title: addForm.title.value,
        content: addForm.content.value
    };
    
    const answer = await makeRequest('posts?', 'POST', newComment, myAuth.token);
    getPosts();
    console.log("res in createPosts: ", answer);

    /*let comment = {
        title: newComment.title,
        content: newComment.content,
        userId: 1,
        id: 4
      }
    addPosts(comment);*/
    //getPosts();

}

async function getPosts() {
    console.log("myAuth.jwtToken in getPosts", myAuth.jwtToken);
    let allPosts = await makeRequest('posts?', 'GET',null, myAuth.jwtToken);
    console.log("allPosts in week11: ", allPosts);
    let postsDiv =document.querySelector('#postsID');
    postsDiv.classList.remove('hidden');
    renderCommentList(allPosts, postsDiv);
    //allPosts = await makeRequest('posts?', 'GET',null, myAuth.jwtToken);
    //console.log("allPosts in week11 2: ", allPosts);
    //console.log("the function getPosts is called");
}

function renderCommentList(listOfCommentsToRender, divToRender) {

    divToRender.innerHTML = '';
    let titleOfComments = document.createElement("h1");
    titleOfComments.innerHTML = "List of Posts";
    divToRender.appendChild(titleOfComments);

    //console.log("listOfCommentsToRender: ",listOfCommentsToRender);
    let listOfComments = document.createElement("ul");
    listOfComments.id = 'listOfComments';
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

    let addNewForm = document.createElement("form");
    addNewForm.id = "addNewForm";

    let newTitleInput = document.createElement("input");
    newTitleInput.type = 'text';
    newTitleInput.name = 'title';

    let newCommentInput = document.createElement("input");
    newCommentInput.type = 'text';
    newCommentInput.name = 'content';
  
    let addCommentInputButton = document.createElement("input");
    addCommentInputButton.type = 'button';
    addCommentInputButton.value = "+";
        
    addCommentInputButton.addEventListener('click', createNewPost, false);

    addNewForm.appendChild(newTitleInput);
    addNewForm.appendChild(newCommentInput);
    addNewForm.appendChild(addCommentInputButton);

    divToRender.appendChild(addNewForm);
}

const form = document.forms['login'];
form.addEventListener('submit', tryToLog, false);

function tryToLog(event) {
    event.preventDefault();
    myAuth.login(getPosts);
}
