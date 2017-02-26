console.log(Object.getPrototypeOf({}) == Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));


console.log(Object.getPrototypeOf(isNaN) == Function.prototype);
console.log(Object.getPrototypeOf([]) == Array.prototype);

console.log(0.1+0.2);

function test() {
	
}

console.log(test.toString == Object.toString);