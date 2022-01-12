import React from 'react'
import { useState } from 'react'

function Create() {

    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const[author, setAuthor] = useState('mario');
    return (
        <div className='create'>
            <h2>Add a new Blog</h2>
            <form>
                <label>Blog Title</label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                 <label>Blog Body</label>
                <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                >

                </textarea>
                <label>Blog Author</label>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                <button>Add Blog</button>
                <p>{body}</p>
            </form>
        </div>
    )
}

export default Create
