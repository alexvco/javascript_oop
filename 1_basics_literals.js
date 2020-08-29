// const s1 = 'Hello';
// console.log(typeof s1); // string - is a primitive not an object
// console.log(s1.toUpperCase()); // internally js converts this to an object when we call toUpperCase() method on it

// const s2 = new String('Hi');
// console.log(typeof s2); // object

// // we also have DOM objects such as window
// console.log(window); // window is the parent object of all DOM
// window.alert('m1'); // since window is the absolute parent, you don't need window.alert()
// alert('m2'); // you could just use alert()

// console.log(typeof navigator); // object - this is the same as window.navigator
// console.log(navigator.appVersion); // naviagtor is an object with appVersion as a property


// Object Literal
const book1 = {
	title: 'Book One',
	author: 'John Doe',
	year: '2020',
	getSummary: function () {
		return `${this.title} was written by ${this.author} in ${this.year}`
	}
}

console.log(book1); // you'll see the book object with its 3 properties
console.log(book1.title); // 'Book One' - calling the property of the book1 object
console.log(book1.getSummary()); // getSummary is also a property of book1 object (functions can also be a property of an object) 

console.log(Object.keys(book1)); // array of keys of book1 object - ["title", "author", "year", "getSummary"
console.log(Object.values(book1)); // array of values of book1 object - ["Book One", "John Doe", "2020", ƒ]


// What if we want to create multiple books?
// We can copy and paste it and modify the values, but that's painful
// A better approach would be to use a class Book (aka constructor)
