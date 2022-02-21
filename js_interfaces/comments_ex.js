// In this way we are just mimicking the style of other oop languages,
// the interface and implements keywords are used but are commented. Ex,

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

var CompositeForm = function (id, method, action) { // implements Composite, FormItem
  // ...
};


/* Implement the Composite interface */
CompositeForm.prototype.add = function(child) {
  // ...
};

CompositeForm.prototype.remove = function(child) {
  // ...
};

CompositeForm.prototype.getChild = function(child) {
  // ...
};

/* Implement the FormItem interface */
CompositeForm.prototype.save = function() {
  // ...
};


/* 
  In this case there is no checking to ensure that CompositeForm 
  actually does implements the correct set of methods
*/