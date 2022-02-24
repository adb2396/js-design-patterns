/* Example of chainable JS library */

// Reusable 'method' function for the interface
Function.prototype.method = (function (name, fn) {
  this.prototype[name] = fn;
  return this;
})(function () {
  function _$(els) {
    // ...
  }
  /* 
        Events
            * addEvent
            * getEvent   
        */

  // adding 'addEvent' directly to function prototype
  // using 'method' function
  _$.method('addEvent', function (type, fn) {
    // ...
  })
    .method('getEvent', function (e) {
      // ...
    })
    /* 
    DOM
        * addClass
        * removeClass
        * replaceClass
        * hasClass
        * getStyle
        * setStyle
    */
    .method('addClass', function (className) {
      // ...
    })
    .method('removeClass', function (className) {
      // ...
    })
    .method('replaceClass', function (oldClass, newClass) {
      // ...
    })
    .method('hasClass', function (className) {
      // ...
    })
    .method('getStyle', function (prop) {
      // ...
    })
    .method('setStyle', function (prop, val) {
      // ...
    })
    /* 
    AJAX
       * load
    */
    .method('load', function (uri, method) {
      // ...
    });

  window.$ = function () {
    return new _$(arguments);
  };
})();
