function TestClass() {
	// body...
	console.log('hello world!');
}

TestClass.prototype.testmethod = function() {
	// console.log('hello world!');
};


TestClass.call();

var pile = {
	elements: ["eggshell", "orange peel", "worm"],
	get height() {
		return this.elements.length;
	},
	set height(value) {
		console.log("Ignoring attempt to set height to ", value);
	}
}

console.log(pile.height);
pile.height = 100;

function Cars() {
	
}

function Honda() {

}

Honda.prototype = Object.create(Cars);

