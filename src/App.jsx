import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Basketball from './pages/Basketball';
import Soccer from './pages/Soccer';
import SavedItems from './pages/SavedItems';
import NotFound from './components/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const PORT = 5001;
  const [savedItems, setSavedItems] = useState([]);

  const handleSaveItem = (item) => {
    setSavedItems((prev) => [...prev, item]);
  };

  const handleDeleteItem = (id) => {
    setSavedItems((prev) => prev.filter(item => item.id !== id));
  };

  return ( 
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basketball" element={<Basketball port={PORT} onSave={handleSaveItem} />} />
        <Route path="/soccer" element={<Soccer port={PORT} onSave={handleSaveItem} />} />
        <Route path="/saved-items" element={<SavedItems savedItems={savedItems} onDelete={handleDeleteItem} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
