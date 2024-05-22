function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = () => {
    let s;
    if (this.read) {
      s = "has been read";
    } else {
      s = "has not been read";
    }
    return `${this.title} by ${author}, ${pages} pages, ${s}.`;
  };
}

let theHobbit = new Book("The Hobbit", "JRR Tolkien", 295, false);
console.log(theHobbit.info());
