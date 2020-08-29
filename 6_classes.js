// classes - ES6 (same concept just using ES6 syntax)

class Book {
	constructor(title, author, year) {
		this.title = title;
		this.author = author;
		this.year = year;
	}

	getSummary() {
		return `${this.title} was written by ${this.author} in ${this.year}`
	}

	revise(newYear) {
		this.year = newYear;
		this.revised = true;
	}

	// this is a static (aka class) method
	static topBookStore() {
		return 'Barnes & Noble';
	}
}

// Instantiate Object
const book1 = new Book('Book One', 'John Doe', '2020');

console.log(book1);
book1.revise('33');
console.log(book1);

console.log(Book.topBookStore());
