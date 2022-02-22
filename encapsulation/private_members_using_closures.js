/* 
  In JavaScript, only functions have scope meaning,
  a variable declared within a function is not accessible 
  outside of that function.

  We can use this feature of closure to create private attributes,
  by defining variables in the score of our constructor function.
*/

var Book = function (newIsbn, newTitle, newAuthor) {
  // implements Publication (interface)

  // Private attributes
  var isbn, title, author;

  // Private method
  function checkIsbn(isbn) {
    // validations
    // ...

    return true;
  }

  // Privileged methods
  this.getIsbn = function () {
    return isbn;
  };
  this.setIsbn = function (newIsbn) {
    if (!checkIsbn(isbn)) {
      throw new Error('Book: Invalid ISBN.');
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
  this.setIsbn(newIsbn);
  this.setTitle(newTitle);
  this.setAuthor(newAuthor);
};

// Public, non-privileged methods
Book.prototype = {
  display: function () {
    // ...
  },
};

/* 
  In this case all the attribute are not available on 
  instance of the Book
*/

var harryPotter = new Book(
  '111-22-333',
  'Prisoner of Azkaban',
  'J. K. Rolling'
);

var author = harryPotter.author;
console.log(author); // undefined

// Correct way to access attribute in by calling
// privileged methods which have access to private members
author = harryPotter.getAuthor();
console.log(author); // J. K. Rolling
