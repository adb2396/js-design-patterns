// Here idea is, if an object contains methods that are named the
// same as the methods defined in the interface, it implements that interface.
// With the helper function we can ensure that the required methods are there. Ex,

/* Interface Constructor (in js we can use it as class) */

var Interface = function (name, methods) {
  if (arguments.length != 2) {
    throw new Error(
      `Interface constructor called with ${arguments.length}, but expected 2.`
    );
  }

  this.name = name;
  this.methods = [];

  for (let i = 0, len = methods.length; i < len; i++) {
    if (typeof methods[i] !== 'string') {
      throw new Error(`Expected method names to be string`);
    }
    this.methods.push(methods[i]);
  }
};

/* Static method, to ensure implementation */

Interface.ensureImplements = function (object) {
  // check valid no of arguments

  for (let i = 1, len = arguments.length; i < len; i++) {
    var interface = arguments[i];

    if (interface.constructor !== Interface) {
      throw new Error('Expected arguments to be instances of Interface.');
    }

    for (let j = 0, mLen = interface.methods.length; j < mLen; j++) {
      var method = interface.methods[j];

      if (!object[method] || typeof object[method] !== 'function') {
        throw new Error(`${interface.method} method was not found`);
      }
    }
  }
};

/* Create interfaces */

var Composite = new Interface('Composite', ['add', 'remove', 'getChild']);
var FormItem = new Interface('FormItem', ['save']);

/* CompositeForm class */

var CompositeForm = function (id, methods, action) {
  // implements Composite, FormItem
  // ...
};

// ...

function addForm(formInstance) {
  Interface.ensureImplements(formInstance, Composite, FormItem);

  // This fn will provide a strict check, if problem is found,
  // an error will be thrown

  // ...
}
