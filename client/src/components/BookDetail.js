import { graphql } from "@apollo/client/react/hoc";
import React, { Component } from "react";
import { getBookQuery } from "../queries/queries";

class BookDetail extends Component {
  render() {
    console.log(this.props.data);
    const { book } = this.props.data;
    if (!book) {
      return <h3>No Selected Book</h3>;
    }
    return (
      <div id="book-detail">
        <h1>Book Detail</h1>
        <ul>
          <li>book Name: {book.name}</li>
          <li>book Genre: {book.genre}</li>
          <li>book Author: {book.author.name}</li>
        </ul>
        <ul>
          <li>other books</li>
          {book.author.books.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default graphql(getBookQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.bookId,
      },
    };
  },
})(BookDetail);
