import { gql } from "@apollo/client";

const getGamesQuery = gql`
  {
    games {
      id
      name
      description
      maxPlayer
      startDate
      endDate
      logo
      winner
    }
  }
`;

const getPlayersQuery = gql`
  {
    players {
      id
      name
      age
      account
      gender
      email
      phone
      team {
        name
        logo
      }
    }
  }
`;

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const getBookQuery = gql`
  query($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

export { getBooksQuery, getAuthorsQuery, addBookMutation, getBookQuery, getGamesQuery, getPlayersQuery };
