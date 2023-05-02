function findAccountById(accounts, id) {
  const acctFound = accounts.find((account) => account.id === id );
  return acctFound;
}

function sortAccountsByLastName(accounts) {
  const acctSorted = accounts.sort((name1, name2) => name1.name.last.toLowerCase() < name2.name.last.toLowerCase() ? -1 : 1);
  return acctSorted;
}

function getTotalNumberOfBorrows(account, books) {
  const personId = account.id;  
  let ctr = 0;
  const total = books.reduce((accum, book) => {    
    const result = book.borrows.map((record) => record.id);
    if (result.includes(personId)) accum++;
    return accum;
  }, ctr);
  
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
    return books.filter((book) => book.borrows.some(acc => acc.id === account.id && acc.returned === false))
     .map(book => { const author = authors.find(author => author.id === book.authorId)
      book.author = author; 
      return book;         
 })  
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
