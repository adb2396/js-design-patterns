/* 
  In a multipage site we have code that is used on all of 
  the pages, also a code that is specific to a single page
  and not used anywhere else. It can be a good idea to separate these
  two into their own singleton objects.
*/

// Generic Page object
Namespace.PageName = {
  // Page constants
  CONSTANT_1: true,
  CONSTANT_2: 10,

  // Page methods
  method1: function () {
    // ...
  },
  method2: function () {
    // ...
  },

  // Initialization method
  init: function () {
    // ...
  },
};

// Invoke the initialization method after the page loads
addEventListener('load', Namespace.PageName.init);

// ================================================================================ //

/*  Specific form page singleton example */
var GiantCorp = {} || window.GiantCorp;

// Registration page singleton
GiantCorp.RegPage = {
  // Constants
  FORM_ID: 'reg-form',
  OUTPUT_ID: 'reg-result',

  // Form handling methods
  handleSubmit: function (e) {
    e.preventDefault();

    var data = {};
    var inputs = GiantCorp.RegPage.formEl.getElementByTagName('input');

    // collect values of input fields in the form
    for (let i = 0, len = inputs.length; i < len; i++) {
      data[inputs[i].name] = inputs[i].value;
    }

    // submit form to server
    GiantCorp.RegPage.sendRegistration(data);
  },
  sendRegistration: function (data) {
    // make XHR request
    // call displayResult when response is received
  },
  displayResult: function (response) {
    // ...
    GiantCorp.RegPage.outputEl.innerHtml = response;
  },

  // initialization method
  init: function () {
    // input and output elements, $ -> jQuery
    GiantCorp.RegPage.formEl = $(GiantCorp.RegPage.FORM_ID);
    GiantCorp.RegPage.outputEl = $(GiantCorp.RegPage.OUTPUT_ID);

    // from submission
    addEvent(
      GiantCorp.RegPage.formEl,
      'submit',
      GiantCorp.RegPage.handleSubmit
    );
  },
};

// Invoke init method after page loads.
addEventListener('load', GiantCorp.RegPage.init);
