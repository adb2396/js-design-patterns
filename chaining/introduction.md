# Chaining 

Chaining is really just a syntax hack. It allows us to express complex operations in a small amount of code by reusing an initial operations. Chaining requires two parts: a factory that creates an object around an HTML element, and methods that perform some action using that HTML element. Ex,

**Without chaining**
```js
addEvent($('example'), 'click', function() {
    setStyle(this, 'color', 'green');
    show(this);
});
```

**With Chaining**
```js
$('example').addEvent('click', function() {
    $(this).setStyle('color', 'green').show();
});
```