// Object create - ES5
// Rarely used syntax to create objects

const bookProtos = {
	getSummary: function() {
		return `${this.title} was written by ${this.author} in ${this.year}`
	}
	// other prototypes here separated by comma(,)
}

// Create Object Syntax 1

// const book1 = Object.create(bookProtos);
// book1.title = 'Book One';
// book1.author = 'John Doe';
// book1.year = '2020';


// Create Object Syntax 2

const book1 = Object.create(bookProtos, {
	title: { value: 'Book One' },
	author: { value: 'John Doe' },
	year: { value: '2020' }
});

console.log(book1);
