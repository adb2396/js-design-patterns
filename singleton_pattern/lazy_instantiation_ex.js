/* 
  A singleton that is expensive to configure, or resource-intensive,
  it might make more sense to defer instantiation util it is needed.
  Known as lazy loading, this technique is used most often for singleton
  that must load large amount of data
*/

// General skeleton for a lazy loading singleton
MyNamespace.Singleton = (function () {
  var uniqueInstance; // private attribute that holds the single instance

  function constructor() {
    // private members
    var privateAttribute1 = false;
    var privateAttribute2 = [1, 2, 3];

    function privateMethod1() {
      // ...
    }

    function privateMethod2() {
      // ...
    }

    return {
      // Public members
      publicAttribute1: true,
      publicAttribute2: 10,

      publicMethod1: function () {
        // ...
      },
      publicMethod1: function () {
        // ...
      },
    };
  }

  return {
    getInstance: function () {
      if (!uniqueInstance) {
        // Instantiate only if the instance does't exists
        uniqueInstance = constructor();
      }

      return uniqueInstance;
    },
  };
})();

/* 
  Once the singleton has been converted to a lazy loading 
  singleton the we have to convert all calls made to it.
*/

MyNamespace.Singleton.getInstance().publicMethod1();
