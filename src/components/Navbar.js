import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Pour personnaliser le style de la navbar

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/recettes">Recettes</Link></li>
                <li><Link to="/courses">Liste de Courses</Link></li>
                <li><Link to="/transactions">Transactions</Link></li>
                <li><Link to="/films">Watchlist</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
