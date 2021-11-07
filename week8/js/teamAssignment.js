const container = document.getElementById("persons");
let pageLink = "https://swapi.dev/api/people/?page=1";

//Onload, displays the names on the first page
window.onload = function () {
  fetchData(pageLink);
};

//fetches and displays data and buttons on html page
function fetchData(dataLink) {
  fetch(dataLink)
    .then((list) => list.json())
    .then(
      (data) =>
        (container.innerHTML =
          displayData(data, dataLink) + "<br>" + displayBtns(data))
    );
}

function fetchPersonData(dataLink) {
  fetch(dataLink)
    .then((list) => list.json())
    .then((data) => (container.innerHTML = displayPersonData(data)));
}

//grabs names from object and returns string of names
function displayPersonData(obj) {
  let dataNum = JSON.stringify(obj.url).match(/(\d+)/);
  let pageNum = 0;

  if (dataNum[0] >= 0 && dataNum[0] <= 10) {
    pageNum = 1;
  } else if (dataNum[0] >= 11 && dataNum[0] <= 21) {
    pageNum = 2;
  } else if (dataNum[0] >= 22 && dataNum[0] <= 31) {
    pageNum = 3;
  } else if (dataNum[0] >= 32 && dataNum[0] <= 41) {
    pageNum = 4;
  } else if (dataNum[0] >= 42 && dataNum[0] <= 51) {
    pageNum = 5;
  } else if (dataNum[0] >= 52 && dataNum[0] <= 61) {
    pageNum = 6;
  } else if (dataNum[0] >= 62 && dataNum[0] <= 71) {
    pageNum = 7;
  } else if (dataNum[0] >= 72 && dataNum[0] <= 81) {
    pageNum = 8;
  } else if (dataNum[0] >= 82 && dataNum[0] <= 83) {
    pageNum = 9;
  }

  return (
    JSON.stringify(
      "Name: " +
        obj.name +
        "<br><br>" +
        "Gender: " +
        obj.gender +
        "<br><br>" +
        "Birth Year: " +
        obj.birth_year +
        "<br><br>" +
        "Hair Color: " +
        obj.hair_color +
        "<br><br>" +
        "Skin: " +
        obj.skin_color +
        "<br><br>" +
        "Eye Color: " +
        obj.eye_color
    ) +
    "<br><br>" +
    `<button onclick=fetchData("https://swapi.dev/api/people/?page=${pageNum}")>Back</button>`
  );
}

//grabs names from object and returns string of names
function displayData(obj, dataLink) {
  let people = [];
  let pageNum = dataLink.match(/(\d+)/);
  let varNum = 0;
  let offNum = 0;

  switch (pageNum[0]) {
    case "1":
      varNum = 0;
      offNum = 1;
      break;
    case "2":
      varNum = 10;
      offNum = 1;
      break;
    case "3":
      varNum = 20;
      offNum = 2;
      break;
    case "4":
      varNum = 30;
      offNum = 2;
      break;
    case "5":
      varNum = 40;
      offNum = 2;
      break;
    case "6":
      varNum = 50;
      offNum = 2;
      break;
    case "7":
      varNum = 60;
      offNum = 2;
      break;
    case "8":
      varNum = 70;
      offNum = 2;
      break;
    case "9":
      varNum = 80;
      offNum = 2;
      break;
    default:
      varNum = 0;
      offNum = 0;
      break;
  }

  let objSize = obj.results.length;

  for (let i = 0; i < objSize; i++) {
    if (pageNum[0] == 2 && i >= 6) {
      people.push(
        `<p onclick="fetchPersonData('https://swapi.dev/api/people/${
          i + 2 + varNum
        }/')">${JSON.stringify(obj.results[i].name)}</p>`
      );
    } else {
      people.push(
        `<p onclick="fetchPersonData('https://swapi.dev/api/people/${
          i + offNum + varNum
        }/')">${JSON.stringify(obj.results[i].name)}</p>`
      );
    }
  }

  return people.join("<br>");
}

//displays buttons with link to the next or pervious pages
function displayBtns(obj) {
  let nextLink = JSON.stringify(obj.next);
  let preLink = JSON.stringify(obj.previous);

  let preBtn = "<button onclick=fetchData(" + preLink + ")>Previous</button>";
  let nextBtn = "<button onclick=fetchData(" + nextLink + ")>Next</button>";

  return preBtn + " " + nextBtn;
}
