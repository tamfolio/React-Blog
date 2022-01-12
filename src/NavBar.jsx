import React from 'react'


function NavBar() {
    return (
        <div className='navbar'>
            <h1>Tammy's Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
            </div>
        </div>
    )
}

export default NavBar
