import totalRecordValues from "./totalRecordValues.js";
import tagCommonRecords from "./tagCommonRecords.js";

export default feederRecords => {
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
};
