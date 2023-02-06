type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

type User = { name: string; age: number };
function greet(user: User) {
  console.log(`Hi, I am ${user.name}`);
}

function isOlder(user: User, checkAge: number) {
  console.log(checkAge > user.age);
  return checkAge > user.age;
}

let user1: User = { name: 'Kevin', age: 26 }

greet(user1)
isOlder(user1, 25)

function combine(input1: Combinable, input2: Combinable, resultConverison: ConversionDescriptor) {
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
