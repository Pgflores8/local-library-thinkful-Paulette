function getTotalBooksCount(books) {
  const totalBooksCount = books.length;
  return totalBooksCount;
}

function getTotalAccountsCount(accounts) {
  const totalAccountsCount = accounts.length;
  return totalAccountsCount;
}

  
function getBooksBorrowedCount(books) {
  const borrowed = books.filter((book) => book.borrows[0].returned == false);
  return borrowed.length;
}


function getMostCommonGenres(books) {
  const genre = books.map((book) => book.genre);
    const result = [];
    const count = {};
    genre.forEach(function (index) {
      count[index] = (count[index] || 0) + 1;
    });
    for (let key in count) {
      result.push({
        name: key,
        count: count[key],
      });
    }
    result.sort((a, b) => (a.count < b.count ? 1 : -1));
    return result.slice(0, 5);
}

function getMostPopularBooks(books) {
  const bookLen = books.length > 5 ? 5 : books.length;
    return books.map(book => {
        return {
          name: book.title,
          count: book.borrows.length
        }
      })
        
     .sort((a,b) => b.count - a.count)
     .slice(0, bookLen);
}

function getMostPopularAuthors(books, authors) {
  const five = 5;
  const result= [];
    authors.forEach(author => {
      const returnAuthor = { 
        name: `${author.name.first} ${author.name.last}`, 
        count: 0
      }
      books.forEach(book => {
        if (book.authorId === author.id) {
          returnAuthor.count += book.borrows.length;
        }
      })
      result.push(returnAuthor);
    })
      
  return result.sort((a,b) => b.count - a.count).slice(0, five);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
