import React, {useState, useEffect} from 'react'
import BlogList from './BlogList'


function Homepage() {
   const [blogs, setBlogs] = useState(null);
   const [isLoading, setIsLoading] = useState(true);


   useEffect(() => {
       setTimeout(() => {
        fetch('http://localhost:8000/blogs')
        .then(response => {
           return response.json();
        })
        .then((data) => {
            console.log(data)
            setBlogs(data)
            setIsLoading(false);
        })
       }, 1000 );
       }, []);

    return (
        <div className='home'>
            {isLoading && <div>Loading....</div>}
           { blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
        
    )
}

export default Homepage
