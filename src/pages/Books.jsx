import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import BookList from '../components/BookList';

export default function Books() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');
  const [categories] = useState(['Fiction', 'Sci-Fi', 'Fantasy']);
  const [selectedCats, setSelectedCats] = useState([]);

  useEffect(() => {
    // Dummy books
    setBooks([
      { id: 1, title: '1984', author: 'George Orwell', price: 299, coverImage: 'https://via.placeholder.com/100', category: 'Fiction' },
      { id: 2, title: 'Dune', author: 'Frank Herbert', price: 349, coverImage: 'https://via.placeholder.com/100', category: 'Sci-Fi' },
    ]);
  }, []);

  const filteredBooks = books.filter(book =>
    (!query || book.title.toLowerCase().includes(query.toLowerCase())) &&
    (selectedCats.length === 0 || selectedCats.includes(book.category))
  );

  return (
    <div>
      <Navbar />
      <div className="container">
        <SearchBar query={query} onSearch={setQuery} />
        <div className="flex">
          <FilterPanel categories={categories} selected={selectedCats} onSelect={(cat) =>
            setSelectedCats(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat])
          } />
          <BookList books={filteredBooks} onAddToCart={(book) => console.log('Added to cart:', book)} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

