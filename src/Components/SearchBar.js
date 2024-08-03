import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
        const response = await fetch(`http://localhost:7000/api/search/${query}`);
        const results = await response.json();
        navigate('/SearchResults', { state: { results } });
        // console.log(results);
    } catch (error) {
        console.error('Error fetching search results:', error);
    }
};

  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search products..." 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
