import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to='/'>Homepage</Link>
            <Link to='/weather'>Weather</Link>
            <Link to='/vegetables'>Vegetables</Link>
        </div>
    )
}

export default Navbar
