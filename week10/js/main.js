const form = document.forms['testing'];
form.addEventListener('submit', checking, false);

  function checking(event) {

    event.preventDefault(); // prevent the form from being submitted
    alert("form sent");
  }