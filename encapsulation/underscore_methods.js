/* 
    This pattern emulated private members by using
    a naming convention, provides a way to prevent another
    programmer from accidentally bypassing the validations.

    This pattern is same as fully exposed object but with 'underscore'
    in front of methods and attributes that we want to keep private. Ex,
*/

var Book = function (isbn, title, author) {
  // implements Publication
  this.setIsbn(isbn);
  this.setTitle(title);
  this.setAuthor(author);
};

Book.prototype = {
  // private method
  _checkIsbn: function (isbn) {
    // validations
    // ...
    return true;
  },
  getIsbn: function () {
    return this._isbn;
  },
  setIsbn: function (isbn) {
    if (!this._checkIsbn(isbn)) {
      throw new Error('Book: Invalid ISBN.');
    }
    this._isbn = isbn;
  },
  getTitle: function () {
    return this._title;
  },
  setTitle: function (title) {
    this._title = title || 'No title specified.';
  },
  getAuthor: function () {
    return this._author;
  },
  setAuthor: function (author) {
    this._author = author || 'No author specified.';
  },

  display: function () {
    // ...
  },
};

var harryPotter = new Book('123-4343-33', 'Harry Potter', 'J. K Rolling');

// Invalid way of accessing attribute,
// _author is private
let author = harryPotter._author; // should be, author = harryPotter.getAuthor();

console.log(author); // J. K. Rolling
