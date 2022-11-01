import React from "react";
import styles from "./BooksCarousel.module.css";
import Carousel from "react-bootstrap/Carousel";

class BooksCarousel extends React.Component {
  render() {
    let items = [];
    for (let i = 0; i < this.props.books.length; i++) {
      items.push(
        <Carousel.Item key = {this.props.books[i]._id} className = {styles.BooksCarousel__container}>
          <img
            className= {`d-block w-50 ${styles.BooksCarousel}`}
            src="https://images.unsplash.com/photo-1647559708444-045256902ee1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzI4fHxibGFjayUyMGJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt={this.props.books[i].title}
          />
          <Carousel.Caption>
            <h3>{this.props.books[i].title}</h3>
            <p>{this.props.books[i].description}</p>
            <p>{this.props.books[i].available ? 'We have this in stock!' : 'Sorry, we\'ll have to order this.'}</p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    }

    return <Carousel>{items}</Carousel>;
  }
}

export default BooksCarousel;
