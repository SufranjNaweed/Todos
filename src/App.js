import React from 'react';
import './index.css';

import Navbar from './Components/Navbar';
import BookList from './Components/BookList';
import ThemeContextProvider from './Contexts/ThemeContext';
import ThemeToggle from './Components/ThemeToggle';
import AuthContextProvider from './Contexts/AuthContext';
import BookContextProvider from './Contexts/BookContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
