// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1
// Some data we can work with
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];
const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William",
];
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

function solution_01() {
  const result = inventors.filter(
    inventor => (inventor.year >= 1500 && inventor.year < 1600)
  );
  console.log("Solution 01.");
  console.log(result);
}
solution_01();

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
function solution_02() {
  const result = inventors.map((x) => x.first + " " + x.last);
  console.log("Solution 02");
  console.log(result);
}
solution_02();

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
function solution_03() {
  const result = inventors.sort(function (y1, y2) {
    return y1.year - y2.year;
  });
  console.log("Solution 03");
  console.log(result);
}
solution_03();

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
function solution_04() {
  const yearsLiving = inventors.reduce((totalOfYears, thisInventor) => {
    totalOfYears = totalOfYears + (thisInventor.passed - thisInventor.year);
    return totalOfYears;
  },0);
  console.log("Solution 04");
  console.log(`The inventors lived a total of ${yearsLiving} years`);

  /* older code
  inventors.forEach((e) => (e.age = e.passed - e.year));
  
  inventors.forEach((e) => console.log(e.last + " " + e.age));
  */
}
solution_04();

// 5. Sort the inventors by years lived
function solution_05() {
  inventors.forEach((e) => (e.age = e.passed - e.year));
  const result = inventors.sort(function (age1, age2) {
    return age1.age - age2.age;
  });
  console.log("Solution 05");
  console.table(result);

}
solution_05();

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// goto the link above and open the console. Paste the following two lines in. That will create a list of links in memory that you can reference through the console. Use that list to finish the problem.
// const category = document.querySelector('.mw-category'); // const links = Array.from(category.querySelectorAll('a'));

// 7. sort Exercise // Sort the people alphabetically by last name
function stretchSolution_01() {
  const result = inventors.sort((a, b) => a.last.localeCompare(b.last));
  console.log("Strech Solution 01");
  console.log(result);
}
stretchSolution_01();

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

function stretchSolution_02() {
  /*const car = data.reduce(function (a, b, c) {
    if (b === "car") {
      a.push(c);
    }
    return a;
  }, []);
  const truck = data.reduce(function (a, b, c) {
    if (b === "truck") {
      a.push(c);
    }
    return a;
  }, []);
  const van = data.reduce(function (a, b, c) {
    if (b === "van") {
      a.push(c);
    }
    return a;
  }, []);
  const bike = data.reduce(function (a, b, c) {
    if (b === "bike") {
      a.push(c);
    }
    return a;
  }, []);

  const walk = data.reduce(function (a, b, c) {
    if (b === "walk") {
      a.push(c);
    }
    return a;
  }, []);

  console.log(car.length);
  console.log(truck.length);
  console.log(van.length);
  console.log(walk.length);
  console.log(bike.length);*/

  const transportation = data.reduce(function (obj, item) {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }, {});

  console.log("Strech Solution 02");
  console.log(transportation);
}
stretchSolution_02();

/*
// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
*/
