# General Feedback for Sprint-2 Exercises

## `Sprint-2/implement/contains.js`

### Own properties vs. inherited properties

Does the following function call returns what you expect?

```javascript
  contains({a: 1, b: 2}, 'toString');
```

Suggestion: Look up 
- How to determine if an object's property is its **own** property or an **inherited** property in JavaScript?

## `Sprint-2/implement/contains.test.js`

### Does your test correctly check whether the function can detect the given object is an array?

Arrays are objects in JavaScript, and they do have property names -- just not the same ones as objects. 
Which keys do arrays have, and how does that affect how reliable your test is?

When testing whether the function handles arrays properly, try **using a key that an array might 
realistically contain**. Otherwise, you might get a passing test even if the function isn't checking for arrays at all.

## `Sprint-2/implement/querystring.js`

### Handling URL-encoded query strings

In real query string, both `key` and `value` are ***percent-encoded*** or ***URL encoded***.
For example, 

> `tags%5B%5D=hello%20world` -> key is `tags[]`, value is `hello world`

Can you function handle URL-encoded query string?

Suggestion: Look up "How to decode a URL-encoded string in JavaScript".


## `Sprint-2/implement/tally.js`

### Is `{}` truly empty?

Does the following function call returns the value you expect?
```
  tally(["toString", "toString"]);
```

Suggestion: Look up an approach to create an empty object with no inherited properties.

## `Sprint-2/stretch/count-words.js`

Does the following function calls return what you expect?

```
countWords("Hello,World! Hello World!");
countWords("constructor constructor");
countWords("          Hello World      ");
```
