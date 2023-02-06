function combine(input1: number | string, input2: number | string, resultConverison: 'as-number' | 'as-text') {
  let result
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConverison === 'as-number') {
    result = +input1 + +input2
  } else {
    result = input1.toString() + input2.toString()
  }
  // if (resultConverison === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
  return result
}

const combinedAges = combine(26, 22, 'as-number')
console.log(combinedAges);

const combinedStringAges = combine('26', '22', 'as-number')
console.log(combinedStringAges);

const combinedNames = combine('Kevin', 'Val', 'as-text');
console.log(combinedNames);
