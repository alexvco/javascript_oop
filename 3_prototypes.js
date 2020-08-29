// Prototypes are essentially instance methods

function Book(title, author, year) {
	this.title = title;
	this.author = author;
	this.year = year;
}

// getSummary will be under __proto__ in chrome dev console
Book.prototype.getSummary = function() {
	return `${this.title} was written by ${this.author} in ${this.year}`
}

// you can add another attribute to Book class in prototype and change another attributes value
Book.prototype.revise = function(newYear) {
	this.year = newYear;
	this.revised = true;
}


// Instantiate an Object
const book1 = new Book('Book One', 'John Doe', '2020');
const book2 = new Book('Book Two', 'Jane Doe', '2021');


console.log(book2); // Book {title: "Book Two", author: "Jane Doe", year: "2021"}
book2.revise('2021-01')
console.log(book2); // Book {title: "Book Two", author: "Jane Doe", year: "2021-01", revised: true}












// Ruby equivalent

// class Book
//   attr_accessor :title, :author, :year

//   def initialize(title, author, year)
//     @title = title
//     @author = author
//     @year = year
//   end

//   def revise(newyear)
//     self.year = newyear
//     self.singleton_class.send(:attr_accessor, :revised)
//     self.revised = true
//   end
// end


// book1 = Book.new('Book One', 'John Doe', '2020')
// book2 = Book.new('Book Two', 'Jane Doe', '2021')

// puts book2.inspect # #<Book:0x00007fcb818a96f8 @title="Book Two", @author="Jane Doe", @year="2021">
// book2.revise('2021-01')
// puts book2.inspect # #<Book:0x00007fcb818a96f8 @title="Book Two", @author="Jane Doe", @year="2021-01", @revised=true>






// 5 different syntaxes to dynamically add an attribute/instance_method to a class,
// note that some syntaxes (ie: book1.singleton_class.send(:attr_accessor, :revised))
// will only add the method/attribute to the specific instance (book1) and will not be available to other instances of the class

// book1.instance_eval { class << self; self end }.send(:attr_accessor, :revised)
// book1.singleton_class.send(:attr_accessor, :revised)
// book1.singleton_class.module_eval { attr_accessor :revised }
// class << book1; attr_accessor :revised; end
// book1.class.module_eval { attr_accessor :revised}
