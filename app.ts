let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Kevin'
if (typeof userInput === 'string') {
  userName = userInput
}

// never type means the function will NEVER have a return value, whereas void type can
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code }
}

generateError('An error occurred!', 500)

// tsc app.ts -w
// or
// tsc app.ts --watch
// checks for changes automatically and will recompile