import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import Home from './pages/Home';

import './scss/app.scss';

export type ContextType = { 
  searchValue: string; 
  setSearchValue: (str: string) => void;
}

export const SearchContext = React.createContext<ContextType>({searchValue: '', setSearchValue: () => {}});

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  const context: ContextType = { searchValue, setSearchValue }

  return (
    <div className="wrapper">
      <SearchContext.Provider value={context}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
