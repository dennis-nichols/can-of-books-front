import axios from 'axios';
import React from 'react';
import BooksCarousel from './BooksCarousel';
import ConfirmModal from './ConfirmModal';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false,
      delete_id: ''
    };
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  getBooks = async () => {
    try {
      let bookData = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
      this.setState({
        books: bookData.data,
      });
      console.log("We have books!");
      console.log(this.state.books);
    } catch (error) {
      console.log("Books not retrieved due to: ", error.reponse);
    }
  };


  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  deleteHandler = (id) => {
    console.log(id);
    this.setState({
      showModal: true,
      delete_id: id
    });
  };

  deleteBooks = async () => {
    let id = this.state.delete_id;
    console.log(id);
    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${id}`;
      await axios.delete(url);

      let updatedBooks = this.state.books.filter((book) => book._id !== id);

      this.setState({
        books: updatedBooks,
      });
    } catch (error) {
      console.log("Book not deleted due to: " + error.message);
    }
    this.handleCloseModal();
  };

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
            books={this.state.books}
            deleteHandler={this.deleteHandler}
          ></BooksCarousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
        <ConfirmModal
        show = {this.state.showModal}
        onHide = {this.handleCloseModal}
        delete = {this.deleteBooks}>
        </ConfirmModal>
      </>
    );
  }
}

export default BestBooks;
