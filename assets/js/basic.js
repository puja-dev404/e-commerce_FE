const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const result = Object.assign(target, source);
const returnedTarget = Object.assign(target, source);
console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

// const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
console.log(returnedTarget);
console.log(target);
console.log(source);
console.log(result);

// Expected output: true
 