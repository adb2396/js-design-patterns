/* 
  Making JS to look like classically inherited language, 
  simple example of class,
*/

// Class Person
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

var reader = new Person('John Smith');

var nameStr = reader.getName();
console.log('Test 1,', nameStr); // John Smith

// ================================================================================ //

/* Creating a class that inherits from Person */

// Class Author

function Author(name, books) {
  Person.call(this, name); // 1* Call the superclass's constructor in the current scope (this).
  this.books = books;
}

Author.prototype = new Person(); // 2* Setting prototype chain
Author.prototype.constructor = Author;
Author.prototype.getBooks = function () {
  return this.books;
};

var author = new Author('XYZ', ['Book1', 'Book2']);

var books = author.getBooks();

console.log('Test 2,', author.name); // XYZ
console.log(books); // [ 'Book1', 'Book2' ]

/* 
  1* - Person.call(this, name) will invoke the Person
  constructor with the empty object created by new keyword (refer as this)
  at the front of the scope chain, while passing in name as argument

  2* - In order to make one class inherit from another, we simply need to set 
  the subclasses's prototype to point to an instance of the superclass
*/

// ================================================================================ //

/* Extend function */

function extend(subClass, superclass) {
  var F = function () {};
  F.prototype = superclass.prototype; // 3* assigning parent prototype to temp class F.
  subClass.prototype = new F();
  subClass.prototype.constructor = subClass;
}

/* 
  3* - Adding F to prototype chain in order to prevent a new (possible large)
  instance of the superclass from having to be instantiated
*/

// Class example using extend

// Class Animal
function Animal(name) {
  this.name = name;
}

Animal.prototype.getName = function () {
  return this.name;
};

// Class Dog
function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

extend(Dog, Animal);

Dog.prototype.getBreed = function () {
  return this.breed;
};

var jimmy = new Dog('Jimmy', 'Pomeranian');

var nameStr = jimmy.getName();
var breed = jimmy.getBreed();

console.log('Test 3', nameStr); // Jimmy
console.log(breed); // Pomeranian

// ================================================================================ //

/* 
  Name of the superclass 'Animal' is hardcoded in subClass 'Dog', hence Animal 
  becoming tightly dependant We can remove this dependency by improvising extend function. Ex,
*/

function improvisedExtend(subClass, superclass) {
  var F = function () {};
  F.prototype = superclass.prototype;
  subClass.prototype = new F();
  subClass.prototype.constructor = subClass;

  subClass.superclass = superclass.prototype;
  if (superclass.prototype.constructor == Object.prototype.constructor) {
    superclass.prototype.constructor = superclass;
  }
}

/* 
  In the above function, code from line 113-115 ensuring that
  the constructor attribute is set correctly on the superclass. Ex,
*/

// Updated on Author class
function AuthorUpdate(name, books) {
  AuthorUpdate.superclass.constructor.call(this, name);
  this.books = books;
}

improvisedExtend(AuthorUpdate, Person);

AuthorUpdate.prototype.getBooks = function () {
  return this.books;
};

var authorUpdate = new AuthorUpdate('Sam John', ['B1', 'B2']);

console.log('Test 4', authorUpdate.getName()); // Sam John
console.log(authorUpdate.getBooks()); // [ 'B1', 'B2' ]
