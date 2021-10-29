
var type = ""; // dellete may be
export default class Comments {
    constructor(elementId, typeOfComments) {
        console.log("elementId:", elementId);
        console.log("typeOfComments:", typeOfComments);
        this.parentElement = document.getElementById(elementId);
        this.type = typeOfComments;
        console.log("this.type:", this.type);
        this.cl = getFromLocalStorge(this.type) || [];
        console.log("this.cl:", this.cl);
        
    }

    showCommentsList(typeOfFilter) {
        if (typeOfFilter == 'all') {
            this.renderCommentList(this.getAllComments(), typeOfFilter);
        } else {
            this.renderCommentList(this.filterCommentsByName(typeOfFilter), typeOfFilter);
        }

    }
    
    getAllComments() {
        return this.cl;
    }
    
    filterCommentsByName(typeOfFilter) {
        return this.cl.filter(comment => (comment.name === typeOfFilter));
    }
    
    renderCommentList(listOfCommentsToRender, typeOfFilter) {
        console.log("listOfCommentsToRender: ",listOfCommentsToRender);
        console.log("ttypeOfFilter: ",typeOfFilter);
        
        let listOfComments = document.createElement("ul");
        listOfCommentsToRender.forEach( comment => {
            let individualComment = document.createElement("li");
            let commentName = document.createElement("p");
            commentName.innerHTML = comment.name;
            let commentDate = document.createElement("p");
            commentDate.innerHTML = comment.date;
            let commentContent = document.createElement("p");
            commentContent.innerHTML = comment.content;

            individualComment.appendChild(commentName); // add the first paragraph
            individualComment.appendChild(commentDate); // add the second paragraph
            individualComment.appendChild(commentContent); // add the third paragraph

            listOfComments.appendChild(individualComment); // add the line
        });
        this.parentElement.innerHTML = '';
        let title = document.createElement("h1");
        title.innerText = "Comments";
        this.parentElement.appendChild(title);
        this.parentElement.appendChild(listOfComments); // add to the list

        
        //addNewDiv.id = "addNewDiv";

        
        if (typeOfFilter !== "all") {
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

            this.parentElement.appendChild(addNewDiv);
        }
    }

    addComment(newComment, nameOfComment) {
        var c = {
            name: nameOfComment,
            date: '2001-06-27',
            content: newComment,
            type: this.type
        }
        this.cl.push(c);
        console.log("cl: ", this.cl);
        addLocalSotrage(this.type, this.cl);
        this.showCommentsList(nameOfComment);

    }
}
    function addLocalSotrage(key, data) {
        console.log("key in LS:", key);
        console.log("data in LS:", data);
        localStorage.setItem(key, JSON.stringify(data));
    }

    function getFromLocalStorge(key) {
        return JSON.parse(window.localStorage.getItem(key));
    }
