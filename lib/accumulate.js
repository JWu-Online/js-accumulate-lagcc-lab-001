function accumulate(list, accumulator) {
  // write the code in here to make your tests pass!
  const result = [];
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    const transformedItem = accumulator(item);
    result.push(transformedItem);
  }
return result;

}

module.exports = accumulate;
