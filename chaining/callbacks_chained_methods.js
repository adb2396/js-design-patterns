/* 
  For using chaining in accessor methods we can use
  function callbacks to return accessed data. Ex,
*/

// Accessor with fn callbacks
var API = function () {};

API.prototype = (function () {
  var name = 'Hello World';

  return {
    setName: function (newName) {
      name = newName;
      return this;
    },
    getName: function (callback) {
      callback.call(this, name);
      return this;
    },
  };
})();

var o = new API();
console.log(o.getName(console.log).setName('Meow').getName(console.log));
// Logs: 'Hello World' and then 'Meow'
