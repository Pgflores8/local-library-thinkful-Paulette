function findAuthorById(authors, id) {
  const authorFound = findId(authors, id);  
  return authorFound;
}

function findBookById(books, id) {
  const bookFound = findId(books, id);
  return bookFound;
}

function partitionBooksByBorrowedStatus(books) {  
  const borrowed = books.filter((book) => book.borrows[0].returned == false);
  const returned = books.filter((book) => book.borrows[0].returned == true);
  
  const result = [borrowed, returned];
  return result;
}

function getBorrowersForBook(book, accounts) {
  const result = book.borrows.map(borrower => { 
      const result = accounts.find(account => borrower.id === account.id )
      result.returned = borrower.returned;
      return result;
     })
     return result.filter((borrower, index)=> result.findIndex(item => item.id === borrower.id) === index);
}

function findId(array, id) {
  const idFound = array.find((idx) => idx.id == id);
  return idFound;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
