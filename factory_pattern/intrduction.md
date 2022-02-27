# The Factory Pattern

A class or object will contain other objects within it. When these member objects need to be created, it is tempting to just instantiate them normally, using the new keyword and the class constructor. The problem is that this creates a dependency between the two classes.

Here, We will look at at a pattern that will help decouple these two classes, and instead use a method to decide which specific class to instantiate.

