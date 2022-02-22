/* 
  Static members (attributes, methods) operate on the class-level
  instead of the instance-level. There is only one copy of each static member.
  static members are called directly off of the class object.
*/

var Book = (function () {
  // Private static attributes
  var numOfBooks = 0;

  // Private static method
  function checkIsbn(isbn) {
    // validations
    // ...

    return true;
  }

  // Return constructor
  return function (newIsbn, newTitle, newAuthor) {
    // implements Publication

    // Private attributes
    var isbn, title, author;

    // Privileged methods
    this.getIsbn = function () {
      return isbn;
    };
    this.setIsbn = function (newIsbn) {
      if (!checkIsbn(isbn)) {
        throw new Error('Book: Invalid ISBN');
      }
      isbn = newIsbn;
    };

    this.getTitle = function () {
      return title;
    };
    this.setTitle = function (newTitle) {
      title = newTitle || 'No title specified';
    };

    this.getAuthor = function () {
      return author;
    };
    this.setAuthor = function (newAuthor) {
      author = newAuthor || 'No author specified';
    };

    // Constructor code
    numOfBooks++; // keeps track of how many books are instantiated

    this.setIsbn(newIsbn);
    this.setTitle(newTitle);
    this.setAuthor(newAuthor);
  };
})();

// Public static, members
Book.publication = 'XYZ Publications Pvt. Ltd.';

Book.convertToTitleCase = function (inputStr) {
  // ...
};

// Public, non-privileged methods
Book.prototype = {
  display: function () {
    // ...
  },
};

/* 
  Here outer function is used only to create a
  closure, within which you can put private static members
*/

// Private static variable
var booksCount = Book.numOfBooks;

// Public static variable
var publication = Book.publication;

console.log(booksCount); // undefined
console.log(publication); // XYZ Publications Pvt. Ltd.
