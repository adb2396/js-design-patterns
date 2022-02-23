/* 
  Create a class that contains general-purpose methods, and
  then use it to augment other classes. These classes are called mixin 
  classes. Ex,
*/

// Mixin class
var Mixin = function () {};

Mixin.prototype = {
  serialize: function () {
    let entries = Object.entries(this);
    var output = [];
    for (let i = 0; i < entries.length; i++) {
      let [key, val] = entries[i];
      output.push(`${key}: ${val}`);
    }
    return output.join(', ');
  },
};

/* Augment function */
function augment(receivingClass, givingClass) {
  for (methodName in givingClass.prototype) {
    if (!receivingClass.prototype[methodName]) {
      receivingClass.prototype[methodName] = givingClass.prototype[methodName];
    }
  }
}

/* 
  Augment function, improved. This new function looks for 
  optional arguments which are the only function that we 
  want to include receivingClass
*/
function augmentImprovised(receivingClass, givingClass) {
  if (arguments[2]) {
    // only give certain methods
    for (let i = 0, len = arguments.length; i < len; i++) {
      receivingClass.prototype[arguments[i]] =
        givingClass.prototype[arguments[i]];
    }
  } else {
    // give all methods
    for (methodName in givingClass.prototype) {
      if (!receivingClass.prototype[methodName]) {
        receivingClass.prototype[methodName] =
          givingClass.prototype[methodName];
      }
    }
  }
}

var Author = function (name, books) {
  this.name = name;
  this.books = books;
};

augmentImprovised(Author, Mixin, 'serialize');

var author = new Author('John Williams', ['Book1', 'Book2']);

var serializedString = author.serialize();
console.log('Test 1', serializedString); // name: John Williams, books: Book1,Book2
