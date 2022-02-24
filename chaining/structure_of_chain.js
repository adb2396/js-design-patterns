/* 
  '$' function which usually return an HTML element or collection
  of HTML elements. To built it as a constructor we should store the 
  elements as an array in an instance property, then return reference
  to the instance in all prototype methods, gives the ability to chain.
*/

(function () {
  // private class
  function _$(els) {
    this.elements = [];
    for (let i = 0, len = els.length; i < len; i++) {
      var element = els[i];
      if (typeof element === 'string') {
        element = document.getElementById(element);
      }

      this.elements.push(element);
    }
  }

  // public interface
  window.$ = function () {
    return new _$(arguments);
  };
})();

// ================================================================================ //

/* 
  Taking advantage of the reference to the instance object being
  returned and run each of the methods attached to prototype as a chain. Ex,
*/

// Adding methods to prototype of '$' function
(function () {
  // private class
  function _$(els) {
    // same as above
  }

  _$.prototype = {
    each: function (fn) {
      for (let i = 0, len = this.elements.length; i < len; i++) {
        fn.call(this, this.elements[i]);
      }

      return this;
    },
    setStyle: function (prop, val) {
      this.each(function (el) {
        el.style[prop] = val;
      });

      return this;
    },
    show: function () {
      this.each((el) => {
        this.setStyle('display', 'block');
      });

      return this;
    },
    addEvent: function (type, fn) {
      var add = function (el) {
        if (window.addEventListener) {
          el.addEventListener(type, fn, false);
        } else if (window.attachEvent) {
          el.attachEvent('on' + type, fn);
        }
      };

      this.each(function (el) {
        add(el);
      });

      return this;
    },
  };

  // public interface
  window.$ = function () {
    return new _$(arguments);
  };
})();

/* 
  Last line in each method of the class all end in 'return this'.
  This passes on the object to next method in the chain. Ex,
*/
$(window).addEvent('load', function () {
  $('test-1', 'test-2')
    .show() // show elements with ID's test-1, test-2
    .setStyle('color', 'red') // set text color of the elements 'red'
    .addEvent('click', function (e) { // attach 'click' event to the elements
      $(this).setStyle('color', 'green'); // upon firing 'click' event change text color to 'green'
    });
});
