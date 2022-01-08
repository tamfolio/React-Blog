import React, {useState, useEffect} from 'react'
import BlogList from './BlogList';

function Homepage() {
   const [blogs, setBlogs] = useState([
       { title: "My New Website", body: "lorem ipsum...", author: 'mario', id:1},
       { title: "My old Website", body: "lorem ipsum...", author: 'yoshi', id:2},
       { title: "My Future Website", body: "lorem ipsum...", author: 'tammy', id:3}
   ]);


   const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
   }

   useEffect(() => {
       console.log('use effect ran');
       }, []);

    return (
        <div className='home'>
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
        </div>
        
    )
}

export default Homepage
