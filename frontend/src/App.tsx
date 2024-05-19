import React from 'react';
import './App.css';
import { gql, useQuery } from '@apollo/client';

interface Book {
  id: number;
  title: string;
  author: string;
  publishedYear: number;
}

const BOOKS = gql`
query ExampleQuery {
  test {
    id
    title
    author
    publishedYear
  }
}
`;

function Books() {
  const { loading, error, data } = useQuery<{ test: Book[] }>(BOOKS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  if (!data || !data.test) {
    return <p>No data</p>;
  }

  console.log(data);
  
  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {data.test.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author} ({book.publishedYear})
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {

  return (
    <>
    <div className="App">
      <h1>GraphQL Client</h1>
      <Books />
    </div>
    </>
  )
}

export default App;
