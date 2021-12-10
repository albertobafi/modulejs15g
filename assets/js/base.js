// metodos de objetos

let koder = {
	name: "jorge",
	lastName: "pirul",
	age: 87,
	// getFullName: function () {
	// 	console.log(this)
	// 	return `${this.name} ${this.lastName} ${this.age}`
	// }
}

koder.getFullName= function(){
	console.log(this)
	return `${this.name} ${this.lastName} ${this.age}`
}
console.log(koder.getFullName())

