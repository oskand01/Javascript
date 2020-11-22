"use strict";

//Checkpoint 1
function Book (title, topic, pages, isbn) {
  this.title = title;
  this.topic = topic;
  this.pages = pages;
  this.isbn = isbn;
  this.getBookInfo = () => console.log (
    `Book: ${this.title} \nTopic: ${this.topic} \nPages: ${this.pages} \nISBN: ${this.isbn} \n`
  );
}

//Checkpoint 2
let books = [];

books.push(new Book("How to Program Dishwashers", "Java", 700, 54657));
books.push(new Book("Frontend for Dummies", "HTML/CSS", 400, 79856));
books.push(new Book("It's an Object", "Javascript", 500, 78456));

//Checkpoint 3
const newBooks = prompt("How many books would you like to add?");

//Checkpoint 4
if (newBooks > 0) {
  for(let i = 1; i <= newBooks; i++) {
    const title = prompt(`Book ${i} \nThe title of the book:`);
    const subject = prompt(`Book ${i} \nThe subject of the book:`);
    const pages = prompt(`Book ${i} \nNumber of pages:`);
    const isbn = prompt(`Book ${i} \nISBN:`);

//Checkpoint 5
    books.push(new Book(title, subject, pages, isbn));
  }
  console.log(`${newBooks} new book(s) added.\n\n`);
}

//Checkpoint 6
books.forEach((book) => book.getBookInfo() + console.log("-----"));
