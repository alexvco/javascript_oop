// Constructor ES5 syntax

function Book(title, author, year) {
	this.title = title;
	this.author = author;
	this.year = year;
}

// Instantiate an Object
const book1 = new Book('Book One', 'John Doe', '2020');
const book2 = new Book('Book Two', 'Jane Doe', '2021');

console.log(book1.title);





// Ruby equivalent

// class Book
//   attr_accessor :title, :author, :year

//   def initialize(title, author, year)
//     @title = title
//     @author = author
//     @year = year
//   end
// end

// book1 = Book.new('Book One', 'John Doe', '2020')
// book2 = Book.new('Book Two', 'Jane Doe', '2021')

// puts book1.title
