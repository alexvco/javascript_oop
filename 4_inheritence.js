// Inheritence - ES5

function Book(title, author, year) {
	this.title = title;
	this.author = author;
	this.year = year;
}

Book.topBookStore = function() {
  return 'Barnes & Noble';
};

Book.prototype.getSummary = function() {
	return `${this.title} was written by ${this.author} in ${this.year}`
}


// Magazine Constructor
function Magazine(title, author, year, month) {
	Book.call(this, title, author, year);
	this.month = month;
}

// Inherit static(class) methods of Book
Object.assign(Magazine, Book);

// Inherit Prototype methods of Book (so you can call getSummary() on Magazine objects)
Magazine.prototype = Object.create(Book.prototype);

// Use Magazine Constructor (otherwise in chrome the constructor would show as Book)
Magazine.prototype.constructor = Magazine;

// Instantiate Magazine Object
const mag1 = new Magazine('Mag One', 'JJ', '2018', 'Jan')

console.log(mag1); // Magazine {title: "Mag One", author: "JJ", year: "2018", month: "Jan"}

console.log(Magazine.topBookStore()); // Barnes & Noble











// Ruby equivalent

// class Book
//   attr_accessor :title, :author, :year

//   def initialize(title, author, year)
//     @title = title
//     @author = author
//     @year = year
//   end

//   def self.top_book_store
//     "Barnes & Noble"
//   end

//   def get_summary
//     "#{self.title} was written by #{self.author} in #{self.year}"
//   end
// end


// class Magazine < Book
//   attr_accessor :month

// 	def initialize(title, author, year, month)
// 	  super(title, author, year)
// 	  @month = month
// 	end
// end



// mag1 = Magazine.new('Mag One', 'JJ', '2018', 'Jan')

// puts mag1.inspect

// puts Magazine.top_book_store

