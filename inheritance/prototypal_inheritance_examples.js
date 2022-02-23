/* 
  In prototypal inheritance, instead of defining the structure
  through a class, we simply create an object. This object then gets 
  reused new objects. It is called the prototype object because it 
  provides a prototype for what the other objects should look like. Ex,
*/

// Person Prototype Object

var Person = {
  name: 'default name',
  getName: function () {
    return this.name;
  },
};

/* 
  Here, Person is not a constructor, it is an object literal
  It is the prototypal object for any other Person like object
*/

/* Clone function */
function clone(object) {
  var F = function () {};
  F.prototype = object;
  return new F();
}

var reader = clone(Person);
console.log('Test 1', reader.getName()); // default name

reader.name = 'John Smith';
console.log(reader.getName()); // John Smith

/* 
  To create Author we don't have to make a subClass in prototypal inheritance
  instead we make a clone
*/

var Author = clone(Person);
Author.books = []; // new attribute with default value
Author.getBooks = function () {
  return this.books;
};

// ================================================================================ //

/* 
  If we directly read author[0].name, we will get value 'default name'
  linked from the prototype. Once we write author[0].name = 'xyz'
  we are defining new 'name' keyword on author[0]. This is because of
  the asymmetrical reading and writing of objects linked from the prototype. Ex,
*/

var authorClone = clone(Author);

console.log('Test 2', authorClone.name);
// Linked to the primitive Person.name, which is
// the string 'default name'

authorClone.name = 'New name'; // A new primitive is created and added to the authorClone object itself
console.log(authorClone.name); // 'New name' value attached to authorClone.name
authorClone.books.push('new book');

// modifying prototype objects default value, will be reflected
// to other objects as well
console.log(authorClone.books); //  [ 'new book' ]
var newAuthorClone = clone(Author);
console.log(newAuthorClone.books); // [ 'new book' ]

authorClone.books = []; // New array is created and added to the authorClone object itself
authorClone.books.push('Book1');
console.log(authorClone.books); // ['Book1']
console.log(newAuthorClone.books); // [ 'new book' ], no change in other object

// ================================================================================ //

/* 
    Examples of cloning prototype object having child objects
    within them. In order to keep all objects as loosely coupled 
    as possible. any complex child objects should be created 
    using methods
*/

// Nested prototype object
var CompoundObject = {
  string1: 'default value',
  childObject: {
    bool: true,
    num: 10,
  },
};

var compoundObjectClone = clone(CompoundObject);

// Bad practice!!
compoundObjectClone.childObject.num = 5;

/* 
  Example below will work but, compoundObject must 
  know default structure of object. Which makes compoundObject
  and compoundObjectClone tightly coupled
*/
compoundObjectClone.childObject = {
  bool: true,
  num: 5,
};

/* 
  Best approach, is to use method to create a new object,
  with default structure
*/
var compoundObjectNew = {};

compoundObjectNew.string1 = 'default value';
compoundObjectNew.createChildObject = function () {
  return {
    bool: true,
    num: 10,
  };
};
compoundObjectNew.childObject = compoundObjectNew.createChildObject();

var compoundObjectCloneNew = clone(compoundObjectNew);
compoundObjectCloneNew.childObject = compoundObjectNew.createChildObject();
compoundObjectCloneNew.childObject.num = 5;
