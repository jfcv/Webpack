require("!style-loader!css-loader!./style.css");
let people = require("./people.js");
let $ = require("jquery");

$.each(people, (key, value) => {
  $("body").append(`<h2>${people[key].name}</h2>`);
});

console.log(people[0]);
console.log(people[1]);
console.log(people[2]);
