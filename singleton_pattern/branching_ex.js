/* 
  A efficient way to assign browser specific code only once, 
  when the script loads.
*/

// Branching Singleton (skeleton)
MyNamespace.Singleton = (function () {
  var objA = {
    method1: function () {
      // ...
    },
    method2: function () {
      // ...
    },
  };

  var objB = {
    method1: function () {
      // ...
    },
    method2: function () {
      // ...
    },
  };

  return someCondition ? objA : objB;
})();

/* 
  Here, at run time based on condition object will be return
  and attached to singleton, Here methods withing obj A and B
  not changed because both of them creating same interface and
  performing same task.
*/

// ================================================================================ //

/* Example of Simple Xhr singleton */
var SimpleXhr = (function () {
  // three branches
  var standard = {
    createXhrObject: function () {
      return new XMLHttpRequest();
    },
  };

  var activeXNew = {
    createXhrObject: function () {
      return new ActiveXObject('Msxml2.XMLHTTP');
    },
  };

  var activeXOld = {
    createXhrObject: function () {
      return new ActiveXObject('Microsoft.XMLHTTP');
    },
  };

  // assigning the valid branch
  var testObject;
  try {
    testObject = standard.createXhrObject();
    return standard; // return if no error is thrown
  } catch (e) {
    try {
      testObject = activeXNew.createXhrObject();
      return activeXNew;
    } catch (e) {
      try {
        testObject = activeXOld.createXhrObject();
        return activeXOld;
      } catch (e) {
        throw new Error('No XHR object found in this environment');
      }
    }
  }
})();

// This singleton can now be used to instantiate an XHR object.
