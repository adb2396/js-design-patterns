/*  
  It is basically a object literal containing
  related attributes and methods
*/

// Basic singleton
var Singleton = {
  attribute1: true,
  attribute2: 10,

  method1: function () {},
  method2: function (arg) {},
};

// all the members are now accessible through
// singleton variable

Singleton.attribute1 = false;

var total = Singleton.attribute2 + 5;
var result = Singleton.method1();

/* 
  Definition of the singleton pattern describes a class that
  can only instantiated once and accessible through a well-known
  access points. Above example is not a proper singleton pattern.
*/
