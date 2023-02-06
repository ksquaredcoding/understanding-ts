const person: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: 'Kevin',
  age: 26,
  hobbies: ['Sports', 'Cooking']
}

let favoriteActivities: string[]
let randomArray: any[]
favoriteActivities = ['Sports']
randomArray = ['Words', 1, true]

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}