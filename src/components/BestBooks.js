import axios from 'axios';
import React from 'react';
import BooksCarousel from './BooksCarousel';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  getBooks = async() => {
    try {
      let bookData = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
      this.setState({
        books: bookData.data
      })
      console.log('We have books!');
      console.log(this.state.books);
    }
    catch (error) {
      console.log('Books not retrieved due to: ', error.reponse);
    }
  }

  componentDidMount() {
    this.getBooks();
  }


  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <BooksCarousel 
          books = {this.state.books}>
          </BooksCarousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
