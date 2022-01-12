import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div>
            <h1>Error</h1>
            <h3>Page Not Found</h3>
            <Link to='/'>
            HomePage
            </Link>
        </div>
    )
}

export default NotFound
