try {
  //const form = document.forms.search;
  //const form = document.forms['search'];
  //const form = document.getElementsByTagname('form')[0];
  // const form = document.forms[0];
  // const input = form.searchInput to search elements of the form
  //const input = form['searchInput']
  // form.action = '/an/other.url'

  //const input = form.elements.searchInput;
  /*input.addEventListener('focus', () => alert('focused'), false);

  input.addEventListener('blur', () => alert('blurred'), false);
  input.addEventListener('change', () => alert('changed'), false);
  input.value = 'Search Here';
  */

  const form = document.forms['search'];
  form.addEventListener ('submit', search, false);
  const input = form['searchInput'];
  //input.value = 'Search Here';

  input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
        input.value = '' 
    }
  }, false);

  input.addEventListener('blur', function(){
    if(input.value === '') {
        input.value = 'Search Here';
    } }, false);

  
  function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
  }

  const hero = {};
  alert(JSON.stringify(hero));

  // Second form
  const form1 = document.forms['hero'];
  form1.addEventListener('submit', makeHero, false);

  function makeHero(event) {

    event.preventDefault(); // prevent the form from being submitted

    //const hero = {}; // create an empty object

    hero.name = form1.heroName.value; // create a name property based on the input field's value
    hero.realName = form1.realName.value;

    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
  }

  const form2 = document.forms['hero2'];
  form2.addEventListener('submit', makeHero2, false);

  function makeHero2(event) {

    event.preventDefault(); // prevent the form from being submitted

    //const hero2 = {}; // create an empty object

    document.forms.hero2.powers[0].checked = true;

    hero.powers = [...form2.powers].filter(box => box.checked).map(box => box.value);
    /*
    hero2.powers = [];
    for (let i=0; i < form2.powers.length; i++) {
        if (form2.powers[i].checked) {
            hero2.powers.push(form2.powers[i].value);
        }
    }
    */

    alert(`We have added the first superpower \n The hero is:\n ${JSON.stringify(hero)}`); // convert object to JSON string and display in alert dialog
    return hero;
  }

  //const [input,button] = form.elements;
} catch (errorMessage) {
  console.log("error: ",errorMessage);
}