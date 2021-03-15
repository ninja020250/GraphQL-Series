import { graphql } from "@apollo/client/react/hoc";
import React, { Component } from "react";
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery,
} from "../queries/queries";
import { flowRight as compose } from "lodash";

class AddBook extends Component {
  state = {
    name: "",
    genre: "",
    author: "",
  };

  displayAuthors = () => {
    const { getAuthorsQuery } = this.props;
    if (getAuthorsQuery.loading) {
      return <option disabled>Please wait...</option>;
    } else {
      const { authors } = getAuthorsQuery;
      return authors.map((author) => (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      ));
    }
  };

  onChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, genre, author } = this.state;
    this.props.addBookMutation({
      variables: {
        name,
        genre,
        authorId: author,
      },
      refetchQueries: [
        {
          query: getBooksQuery,
        },
      ],
    });
  };

  render() {
    const { name, genre, author } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <label>Book name:</label>
          <input
            name="name"
            type="text"
            onChange={this.onChange}
            value={name}
          ></input>
        </div>
        <div className="field">
          <label>Genre:</label>
          <input
            name="genre"
            type="text"
            onChange={this.onChange}
            value={genre}
          ></input>
        </div>
        <div className="field">
          <label>Author:</label>
          <select name="author" onChange={this.onChange} value={author}>
            <option value="">Select Author</option>
            {this.displayAuthors()}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
