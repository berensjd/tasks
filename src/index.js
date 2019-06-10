import tagObjects from "./utils/tagObjects.js";
import removeDuplicates from "./utils/removeDuplicates.js";

const removed = removeDuplicates([1, 2, 2, 3, 5, 5, 5, 5, 5, 6, 7, "A", "A"]);
document.getElementById("removeDuplicates").innerHTML = JSON.stringify(removed);

const records = tagObjects([
  { a: 1, b: 2 },
  { a: 3 },
  { c: 5 },
  { a: 1 },
  { d: 1 }
]);
document.getElementById("tagObjects").innerHTML = JSON.stringify(records);
