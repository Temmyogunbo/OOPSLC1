

 
(function(){
  'use strict';
  var jasmine = require("jasmine");

  var myApp = require('../app/library.js');
  describe("Car Class: Create a car, give it properties", function() {

    it("The car should be a type of `object`, and an instance of the `Car` class", function() {
      var volvo = new myApp.Car('Volvo');
      expect(typeof volvo).toEqual(typeof {});
      expect(volvo instanceof myApp.Car).toBeTruthy();
    });

    it("The car name and model should be a property of the car", function() {
     var toyota = new myApp.Car("Toyota", 4, "corolla", 2014,140, "",4);
      expect(toyota.name).toBe('Toyota');
      expect(toyota.model).toBe(2014);
    });

    it("The car shoud have four (4) wheels", function() {

      var koenigsegg = new myApp.Car('Koenigsegg', 4, "spider", 2014,140);
      expect(koenigsegg.wheels).toBe(4);
    });
  });
})();