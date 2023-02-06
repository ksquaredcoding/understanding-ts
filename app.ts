const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Kevin',
  age: 26,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
}
// can't reassing types, but can add into array. at least one problem fixed
// person.role[1] = 10
// person.role.push('admin')
console.log(person.role);


let favoriteActivities: string[]
let randomArray: any[]
favoriteActivities = ['Sports']
randomArray = ['Words', 1, true]

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}