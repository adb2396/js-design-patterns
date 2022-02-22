# Encapsulation vs Information Hiding

Information hiding is the goal, and encapsulation is the technique to accomplish that goal.

**Encapsulation** can be defined as the hiding of internal data representation and implementation details in an object. The only way to access the data within an encapsulated object is to use defined operations.

JavaScript does not provides any keywords like ```Private``` in Java to enforce information hiding, instead we can use concept of closure to create methods and attributes that can only be accessed from within the object.


#### Basic patterns to create objects
- Fully exposed object
- Object having underscore methods and attributes
- Objects using closures