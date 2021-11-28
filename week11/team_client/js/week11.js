import Auth from "./auth.js";
import { Errors, makeRequest } from "./authHelpers.js";
// makeRequest('login', 'POST', {
//   password: 'user1',
//   email: 'user1@email.com'
// });

const myErrors = new Errors("errors");
const myAuth = new Auth(myErrors);

const loginForm = document.getElementById("login");
loginForm.querySelector("button").addEventListener("click", () => {
  myAuth.login(getPosts);
});
async function getPosts() {
  try {
    const data = await makeRequest("posts", "GET", null, myAuth.token);
    // make sure the element is shown
    document.getElementById("content").classList.remove("hidden");
    console.log(data);
    let ul = document.getElementById("list");
    ul.innerHTML = "";

    for (var i = 0; i < data.length; i++) {
      let li = document.createElement("li");
      li.appendChild(document.createTextNode("Title: " + data[i].title));

      let ul2 = document.createElement("ul");
      let li2 = document.createElement("li");
      li2.appendChild(document.createTextNode(" Content: " + data[i].content));

      //attaches post content to the title as a seperate list
      ul2.appendChild(li2);
      li.appendChild(ul2);

      //attaches post title and content unordered list
      ul.appendChild(li);
    }
    myErrors.clearError();
  } catch (error) {
    // if there were any errors display them
    myErrors.handleError(error);
  }
}
// when the submit button is clicked it launches the createPost() function
document.getElementById("createSubmit").addEventListener("click", () => {
  createPost();
});

//creats post
async function createPost() {
  const form = document.forms.postForm;
  console.dir(form);

  if (form.title.validity.valid && form.content.validity.valid) {
    //clears warning
    myErrors.clearError();

    //data object to be posted
    const data = {
      title: form.title.value,
      content: form.content.value,
    };

    try {
      const result = makeRequest("posts", "POST", data, myAuth.token);
      console.log("Post create:", data);
      form.title.value = "";
      form.content.value = "";
      getPosts();
    } catch (error) {
      myErrors.handleError(error);
    }
  } else {
    //displays error message just in case the title and/or content inputs are empty
    myErrors.displayError({ message: "Title and Content are required" });
  }
}

/*
import Auth from "./auth.js";

const mylogin = new Auth();

const form = document.forms["login"];
form.addEventListener("submit", tryToLog, false);

function tryToLog(event) {
  event.preventDefault();
  mylogin.login();
}*/
