import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to={'/posts'}>posts</Link>
            <Link to={'/about'}>about</Link>
        </div>
    );
};

export default Navbar;