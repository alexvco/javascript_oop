// subclasses - ES6 (same concept just using ES6 syntax)

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


// Magazine Sublclass
class Magazine extends Book {
	constructor(title, author, year, month) {
		super(title, author, year);
		this.month = month;
	}
}


// Instantiate Magazine
const mag1 = new Magazine('Mag One', 'JJ', '2018', 'Jan');

console.log(mag1);

console.log(Magazine.topBookStore());

// Note that when using ES6 syntax (class Magazine extends Book)
// both prototypes (instance methods) and static (class) methods are automatically inherited as well
