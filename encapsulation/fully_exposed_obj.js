/* 
  The easiest way to implement an object is to create a class in 
  the conventional way, using function as a constructor. This object
  is full exposed object because all of the class's attributes and 
  methods are public and accessible. Ex,
*/

var Book1 = function (isbn, title, author) {
  if (isbn == undefined) throw new Error('Book constructor requires an isbn');
  this.isbn = isbn;
  this.title = title || 'No title specified';
  this.author = author || 'No author specified';
};

Book1.prototype.display = function () {
  // method depends entirely on having accurate isbn
  // ...
};

/* Creating an book object */
var theHobbit = new Book1('123-456-789', 'The Hobbit', 'J. R. R. Tolkien');
theHobbit.display(); // outputs the data

// Here, we can add another method to check valid isbn. Ex,
Book1.prototype.checkIsbn = function () {
  // validations to check correct
  // ISBN string
  // ...
};

/* 
  Even though we can verify integrity of the data (ISBN) in constructor,
  we don't have control over direct assignment to the isbn attribute.
*/
theHobbit.isbn = 'any-random-string';
theHobbit.display();

// ================================================================================ //

/* 
  Creating accessor and mutator methods to protect internal data. Ex,
*/

// Interface containing all required methods by class
var Publication = new Interface('Publication', [
  'getIsbn',
  'setIsbn',
  'getTitle',
  'setTitle',
  'getAuthor',
  'setAuthor',
  'display',
]);

var Book2 = function (isbn, title, author) {
  // implements Publication

  this.setIsbn(isbn);
  this.setTitle(title);
  this.setAuthor(author);
};

Book2.prototype = {
  checkIsbn: function (isbn) {
    // validations ...

    return true;
  },
  getIsbn: function () {
    return this.isbn;
  },
  setIsbn: function (isbn) {
    if (!this.checkIsbn(isbn)) {
      throw new Error('Book: Invalid ISBN.');
    }
    this.isbn = isbn;
  },
  getTitle: function () {
    return this.title;
  },
  setTitle: function (title) {
    this.title = title || 'No title specified';
  },
  getAuthor: function () {
    return this.author;
  },
  setAuthor: function (author) {
    this.author = author || 'No author specified';
  },

  display: function () {
    // ..
  },
};

/* 
  Now in the above setup anyone who wants to access/modify the 
  isbn attribute should do that only using 'getIsbn' and 'setIsbn' methods. Ex,
*/
var harryPotter = new Book2('123-4343-33', 'Harry Potter', 'J. K');

harryPotter.getAuthor(); // J. K.
harryPotter.setAuthor('J. K. Rolling');
harryPotter.setTitle('HP - Goblet of Fire');
harryPotter.setIsbn('123-3333-22');

harryPotter.getAuthor(); // J. K. Rolling
harryPotter.getIsbn(); //123-3333-22

/*
  Despite all these features the attribute 'isbn' is still public and
  anyone can directly change it.
*/

harryPotter.isbn = 'random-string';
console.log('ISBN:', harryPotter.getIsbn()); // ISBN: random-string
