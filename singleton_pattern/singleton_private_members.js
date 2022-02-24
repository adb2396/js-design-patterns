/* 
  The easiest and most straightforward way to create the appearance of private 
  members withing singleton object is to use the underscore notation. Ex, 
*/

// DataParser singleton, converts character delimited strings into arrays
let GiantCorp = {} || window.GiantCorp;

GiantCorp.DataParser = {
  // Private methods
  _stripWhitespace: function (str) {
    return str.replace(/\s+/, '');
  },
  _stringSplit: function (str, delimiter) {
    return str.split(delimiter);
  },

  // Public methods
  stringToArray: function (str, delimiter, stripWS) {
    if (stripWS) {
      str = this._stripWhitespace(str);
    }
    var outputArray = this._stringSplit(str, delimiter);
    return outputArray;
  },
};

/*  
  The methods/attributes in underscore notation are intended to private
  and is used in the internal workings of the object, not outside.
*/

// ================================================================================ //

/* 
  The second best way to get private members within a singleton 
  object is to create a closure. 
*/
// Singleton as Object Literal
MyNamespace.Singleton = {};

// Singleton with private members
MyNamespace.Singleton = (function () {
  // Private members
  var privateAttribute1 = false;
  var privateAttribute2 = [1, 2, 3];

  function privateMethod1() {
    // ...
  }

  function privateMethod2() {
    // ...
  }

  return {
    // public members
    publicAttribute1: true,
    publicAttribute2: 10,

    pubicMethod1: function () {
      // ...
    },
    pubicMethod2: function () {
      // ...
    },
  };
})();

/* This particular singleton pattern above also known as Module Pattern. */
