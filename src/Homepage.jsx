import React, {useState} from 'react'
import BlogList from './BlogList';

function Homepage() {
   const [blogs, setBlogs] = useState([
       { title: "My New Website", body: "lorem ipsum...", author: 'mario', id:1},
       { title: "My old Website", body: "lorem ipsum...", author: 'yoshi', id:2},
       { title: "My Future Website", body: "lorem ipsum...", author: 'tammy', id:3}
   ]);
    return (
        <div className='home'>
            <BlogList blogs={blogs} title="All Blogs"/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs"/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'yoshi')} title="Yoshi's Blogs"/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'tammy')} title="Tammy's Blogs"/>
        </div>
    )
}

export default Homepage
