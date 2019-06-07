/**
 * -----------------------------------------------------------------------------------
 * Returns all tagged records for a given total and tag value
 * @param {string} tag    The allocated tag name for the records with the common total
 * @param {array} records All records
 * @param {number} total   The record tolal to filter
 * -----------------------------------------------------------------------------------
 */
export default (tag, records, total) => {
  const commonTotals = records.filter(records => records.total === total);

  return commonTotals.map(record => {
    record.tag = tag;
    delete record.total;
    return record;
  });
};
