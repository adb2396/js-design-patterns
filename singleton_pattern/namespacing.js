/* 
  Namespacing is large part of responsible JS programming. Because everything
  can be overwritten. Ex,
*/

// Variables declared globally
function findProduct(id) {
  // ...
}

// ...

// Later in the code, someone adds
var resetProduct = $('reset-product-button');
var findProduct = $('find-product-button'); // just got overwritten

// ================================================================================ //

/* 
  One of the best ways to prevent this is to 
  namespacing code withing singleton object
*/

// Using namespace
var ProductTools = {
  findProduct: function (id) {
    // ...
  },

  // ...
};

// Later in the code, someone adds ...
var resetProduct = $('reset-product-button');
var findProduct = $('find-product-button'); // Nothing was overwritten

// accessing method 'findProduct'
ProductTools.findProduct();

// ================================================================================ //

/*  
  Multiple smaller namespaces can be put into 
  single namespace to prevent collisions 
*/

// GiantCorp namespace
var GiantCorp = {};

GiantCorp.common = {
  // A Singleton with common methods
};

GiantCorp.ErrorCode = {
  // An object literal to store errors
};

GiantCorp.pageHandles = {
  // ...
};
