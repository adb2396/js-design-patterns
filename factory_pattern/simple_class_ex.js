/* 
  Example of a bicycle shop which offers several models of bikes 
  for sale. Class Representation,
*/

var BicycleShop = function () {};

BicycleShop.prototype = {
  sellBicycle: function (model) {
    var bicycle;

    switch (model) {
      case 'The Speedster':
        bicycle = new Speedster();
        break;
      case 'The Lowrider':
        bicycle = new Lowrider();
        break;
      case 'The Comfort Cruiser':
      default:
        bicycle = new ComfortCruiser();
    }

    Interface.ensureImplements(bicycle, Bicycle);

    bicycle.assemble();
    bicycle.wash();

    return bicycle;
  },
};

// ================================================================================ //

/* Example of Speedster Bicycle class */

// The Bicycle interface
var Bicycle = new Interface('Bicycle', ['assemble', 'wash', 'ride', 'repair']);

// Speedster class
var Speedster = function () {
  // implements Bicycle
  // ...
};

Speedster.prototype = {
  assemble: function () {
    // ...
  },
  wash: function () {
    // ...
  },
  ride: function () {
    // ...
  },
  repair: function () {
    // ...
  },
};

// To sell certain model of bike, call the 'sellBicycle' method
var californiaCruisers = new BicycleShop();
var yourName = californiaCruisers.sellBicycle('The Speedster');

// ================================================================================ //

/* 
  What if we want to add a new model of bicycle to the lineup?
  This would require to modify the code in 'BicycleShop', even 
  though the actual functionality of 'BicycleShop' hasn't really 
  changed.

  A better solution to handle this is to pass off the 'create a new instance'
  part of the method to a simply factory object.
*/

// BicycleFactory namespace
var BicycleFactory = {
  createBicycle: function (model) {
    var bicycle;

    switch (model) {
      case 'The Speedster':
        bicycle = new Speedster();
        break;
      case 'The Lowrider':
        bicycle = new Lowrider();
        break;
      case 'The Comfort Cruiser':
      default:
        bicycle = new ComfortCruiser();
    }

    Interface.ensureImplements(bicycle, Bicycle);
    return bicycle;
  },
};

// ================================================================================ //

/* Improvised BicycleShop class */

var BicycleShopImproved = function () {};

BicycleShopImproved.prototype = {
  sellBicycle: function (model) {
    var bicycle = BicycleFactory.createBicycle(model);

    bicycle.assemble();
    bicycle.wash();

    return bicycle;
  },
};

/* 
  This way we can add anu number of classes on the 'BicycleFactory' object
  to create new instances. All of the information about which models 
  are available is centralized in one location.

  The factory object either could be a simple namespace or an instance of 
  a class. It often makes sense to use singleton or static class method
  to create these member instances when the creation method don't vary.
*/
