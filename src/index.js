function removeDuplicates(feed = []) {
  let removed = [];
  for (curr of feed) if (!removed.includes(curr)) removed = [...removed, curr];
  return removed;
}

function tagObjects(feed) {
  // Loop through each record of array
  for (let currentRecord of feed) {
    // loop through the props of each record
    let newRecord = {};
    let propertyValus = [];
    for (let currentProperty in currentRecord) {
      propertyValus = [...propertyValus, currentRecord[currentProperty]];
      newRecord[currentProperty] = currentRecord[currentProperty];
    }
    const total = propertyValus.reduce((acc, value) => acc + value);
    newRecord.total = total;
    console.log({ newRecord });
  }
}

const removed = removeDuplicates([1, 2, 2, 3, 5, 5, 5, 5, 5, 6, 7, "A", "A"]);
document.getElementById("removeDuplicates").innerHTML = removed;

tagObjects([{ a: 1, b: 2 }, { a: 3 }]);
