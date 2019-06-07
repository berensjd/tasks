import totalRecordValues from "./utils/totalRecordValues.js";
import tagCommonRecords from "./utils/tagCommonRecords.js";

function removeDuplicates(feed = []) {
  let removed = [];
  for (let curr of feed)
    if (!removed.includes(curr)) removed = [...removed, curr];
  return removed;
}

function tagObjects(feederRecords) {
  const { outputRecords: records, uniqueRecordTotals } = totalRecordValues(
    feederRecords
  );
  let tags = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let outputRecords = [];
  for (let currentTotal of uniqueRecordTotals) {
    outputRecords = [
      ...outputRecords,
      tagCommonRecords(tags.shift(), records, currentTotal)
    ];
  }
  outputRecords = outputRecords.flat();
  return outputRecords;
}

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
