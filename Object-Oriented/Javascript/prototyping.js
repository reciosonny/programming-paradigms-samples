function Rabbit(type) {
	this.type = type;
}

Rabbit.prototype.speak = function(line) {
	console.log("The "+this.type+" rabbit says '"+line+"'");
};

var killerRabbit = new Rabbit("Killer");
var blackRabbit = new Rabbit("Black");
// killerRabbit.speak("doom");
// blackRabbit.speak("slay");

var map = {};
map["test"] = "test property";
Object.prototype.testerPrototype = function() {
	// body...
};
Object.defineProperty(Object.prototype, "hiddenProperty", {enumerable: false, value: "hi"}); //define it as non-enumerable ot hide this property or prototype
console.log(map.hiddenProperty);

for (var name in map) {
	console.log(name);
	if (map.hasOwnProperty(name)) {
		// ... this is an own property
		console.log('has own property');
		console.log('property name: '+name);
	}
}
