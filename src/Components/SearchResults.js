import React from 'react';
import { useLocation } from 'react-router-dom';
import './Detail.css'


function SearchResults() {
  const location = useLocation();
  const { results } = location.state || { results: [] }; // Fallback to an empty array if no data

  return (
    <div>
      <h1>Search Results</h1>
      <div className='Main-card'>
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul>
          {results.map((result, index) => (
            <div className='content'>
            <li key={index}>
            <img src={result.image} alt={result.name} />
              <h2>{result.name}</h2>
              <p>{result.description}</p>
              <p>Price: {result.price}/-</p>
            </li>
            </div>
          ))}
        </ul>
      )}
      </div>
    </div>
  );
}

export default SearchResults;
