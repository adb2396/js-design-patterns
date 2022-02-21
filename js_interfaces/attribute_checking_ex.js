// In this case all the classes explicitly declare which
// interfaces they implement. Ex,

/* 

interface Composite {
  function add(child);
  function remove(child);
  function getChild(index);
}

interface FormItem {
  function save();
} 

*/

var CompositeForm = function (id, method, action) {
  // explicit declaration of supported interfaces
  this.implementsInterfaces = ['Composite', 'FormItem'];

  // ...
};

/* 
    interface Validation {
      function validateForm(formInstance);
    }
*/

var FormValidation = function (action) {
  this.implementsInterfaces = ['Validation'];
};

FormValidation.prototype.validateForm = function (formInstance) {
  // implements fn checks if an object declares that it implements
  // the required interfaces
  if (!implements(formInstance, 'Composite', 'FormItem')) {
    throw new Error('Object does not implement a required interface');
  }

  // ...
};

/* Utility  */
function implements(object) {
  for (let i = 1; i < arguments.length; i++) {
    var interfaceName = arguments[i];
    var interfaceFound = false;

    for (let j = 0; j < object.implementsInterfaces.length; j++) {
      if (object.implementsInterfaces[j] == interfaceName) {
        interfaceFound = true;
        break;
      }
    }

    if (!interfaceFound) {
      return false; // An interface was not found
    }
  }

  return true; // An interfaces were found
}
