/**
 * -----------------------------------------------------------------------------------------
 * 1. Iterates through an array of records
 * 2. Sums the property values of each record and augments each record with a total property
 * 3. Returns an array of augmented records and an array of unique record totals
 * @param {array} feederRecords
 * -----------------------------------------------------------
 */
export default feederRecords => {
  let outputRecords = [];
  let uniqueRecordTotals = [];

  // Loop through each record
  for (let currentRecord of feederRecords) {
    let augmentedRecord = {};
    let propertyValus = [];

    // loop through the props of each record
    for (let currentProperty in currentRecord) {
      propertyValus = [...propertyValus, currentRecord[currentProperty]];
      augmentedRecord[currentProperty] = currentRecord[currentProperty];
    } //end of record prop loop

    const total = propertyValus.reduce((acc, value) => acc + value);
    augmentedRecord.total = total;
    if (!uniqueRecordTotals.includes(total))
      uniqueRecordTotals = [...uniqueRecordTotals, total];
    outputRecords = [...outputRecords, augmentedRecord];
  } //end of record loop

  return { outputRecords, uniqueRecordTotals };
};
