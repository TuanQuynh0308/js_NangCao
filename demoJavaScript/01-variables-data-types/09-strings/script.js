let x;

const name = 'Quỳnh';
const age = 19;

// Concatenation
x = 'aloalo ' + name + ' hehe ' + age + ' tuổi';

// Template Literals
x = `Tôi là ${name} và tôi ${age} tuôi`;

// String Properties and Methods

// Creating a "string object" (JS does this automatically when using a propery or method on a primitive string)
const s = new String('hehe');

x = typeof s;

x = s.length;

// Access value by key
x = s[0];

// Shows the prototype of the string object. Shows the properties and methods
x = s.__proto__;

// Change case
x = s.toUpperCase();
x = s.toLowerCase();

// charAt() - returns the character at the specified index
x = s.charAt(0);

// indexOf - returns the index of the first occurrence of a specified value in a string
x = s.indexOf('e');

// substring() - search a string for a specified value
x = s.substring(2, 5);
x = s.substring(7);

// slice() - extracts a part of a string and returns a new string
x = s.slice(-11, -6);

// trim() - remove whitespace from beginning and end of string
x = '         Hello World';
x = x.trim();

// replace() - replace all instances of a string
x = s.replace('World', 'John');

// includes() - returns true if the string is found
x = s.includes('Hell');

// valueOf() - returns the primitive value of a variable
x = s.valueOf();

// split() - returns an array of strings
x = s.split('');

console.log(x);
