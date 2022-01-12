import React from 'react';
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <div className='navbar'>
            <h1>Tammy's Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </div>
    )
}

export default NavBar
