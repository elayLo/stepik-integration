import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import { SearchProvider } from './context/SearchContext';
function App() {
  return (
    <SearchProvider>
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </SearchProvider>


  );
}

export default App;
