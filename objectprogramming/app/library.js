function Vehicle (name, wheels, type, model, speed, soldOn) {
    
    // instance properties
    this.name = name;
	this.wheels = wheels;
	this.speed = speed;
	this.soldOn = soldOn;
	this.type = type;
	this.model = model;
}

//We define the class-owned instance method

Vehicle.prototype.drive = function(){
	return "You are driving a " + this.name + " " + this.type +  " at a speed of " + this.speed + " Km/hr";
}

Vehicle.prototype.salePrice = function(){
	if(this.soldOn !== ""){
		return "This car has been sold";
	}
	return "The price of your car is " + "$" + 10000.0 * this.wheels;
}

//A subclass of vehicle
function Car(name, wheels, type, model, speed, soldOn, numOfDoors = 2){
	Vehicle.call(this, name, wheels, type, model, speed, soldOn)
	this.numOfDoors = numOfDoors;
	
};

//Our vehicle function is being inherited by car
Car.prototype = Object.create(Vehicle.prototype);

//VehicleType function is beinassigned t0 Car prototype
Car.prototype.vehicleType = function(){
	return "Your type of car is " + this.type + " with " + this.numOfDoors + " doors";
}
// var toyota = new Car("Toyota", 4, "corolla", 2014, 40, "",4);
// console.log(toyota.name)
// console.log(toyota.wheels)
// console.log(toyota.type)
// console.log(toyota.model)
// console.log(toyota.soldOn)
// console.log(toyota.speed)
// console.log(toyota.drive())
// console.log(toyota.salePrice())
// console.log(toyota.numOfDoors)
// console.log(toyota.vehicleType())
// console.log(typeof toyota === typeof {});
// console.log(toyota instanceof Car)
module.exports = {Car:Car};
