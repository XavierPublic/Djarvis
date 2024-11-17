import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Recettes from './pages/Recettes';

function App() {
  return (
      <Router>
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/recettes" component={Recettes} />
            {/* Ajoute d'autres routes pour les autres pages */}
          </Routes>
        </div>
      </Router>
  );
}

export default App;
