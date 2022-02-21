# Interfaces in JavaScript

Javascript does not have built-in way of creating or implementing interfaces.

- An interface provides a way of specifying what methods an  object should have.


Sample interface from Java,

```java
public interface DataOutput {
    void writeBoolean(Boolean value) throws IOException;
    void writeByte(int value) throws IOException;
    void writeChar(int value) throws IOException;
    void writeShort(int value) throws IOException;
    void writeInt(int value) throws IOException;

    // ... 
}
```

Above interface gives a list of methods that a class should implement.
Example (In Java) of a class that uses this interface

```java
public class DataOutputStream implements DataOutput {
    // ...

    // All function declarations listed in interface

    // ...
}
```


Three possible ways to emulate interfaces in JavaScript,
  1. Comments
  2. Attribute checking
  3. Duck typing
