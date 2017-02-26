//method 1: 
function Person(_firstName, _lastName) {
	this.firstName = _firstName;
	this.lastName = _lastName;
}
Person.prototype.DisplayName = function() {
	console.log(this.firstName + ' '+this.lastName);
};

var person = new Person("Sonny", "Recio");
console.log(person.firstName);
person.DisplayName();


//method 2: using anonymous method and auto-invocation
//note: I prefer this one
var Fruit = (function () {
	function Fruit(_fruitName) {
		console.log('I am fruit');
	}
	Fruit.prototype.displayFruitInformation = function() {
		
	};
	return Fruit;
})();

var test = new Fruit();