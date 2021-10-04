function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  console.log(user);
  console.log( user.ref.name );

  let user2 = {
    name: "John",
    ref: this,
    printref() {
        console.log("inside the function in printref");
        console.log(this.name);
        this.name="carlos";
        
    }
  };
  let newobj = new makeUser();
  console.log("new obj:" ,newobj.ref);
  console.log(user2);
  user2.printref();