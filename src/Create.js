import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('First Author')
  const [isPending, setIsPending] = useState(false)
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = {title, body, author};
    setIsPending(true)

    setTimeout (() =>{
      fetch('http://localhost:3030/blogs/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(blog)
      }).then(() => {
        console.log('new blog added')
        setIsPending(false)
        history.push('/')
      })
    },1000)
  }

  return ( 
    <div className="text-lg mt-10 flex-auto items-center justify-center mx-auto">

      <h2 className="text-3xl text-blue-600 flex justify-center">Add New Blog</h2>

      <form className="mt-12" onSubmit={handleSubmit}>
        <label className="block">
          <div className="flex">
            <span className="block text-lg font-medium text-center p-3 text-slate-700">Blog Title: </span>
            <input 
              type="text" 
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="blog title" 
              className="peer... mt-1 m-5 block w-1/4 px-3 py-2 bg-white border border-blue-300 rounded-md text-md placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            "/>
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Please provide a valid email address.
            </p>
          </div>

          <div className="flex mt-3">
            <span className="block text-lg font-medium text-center p-3 text-slate-700">Blog Body: </span>
            <textarea 
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="peer... mt-1 m-5 block w-1/4 px-3 py-2 bg-white border border-blue-300 rounded-md text-md placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            "/>
          </div>

          <div className="flex">
            <span className="block text-lg font-medium text-center p-3 text-slate-700">Blog Author: </span>
            <select value={author} onChange={(e) => setAuthor(e.target.value)}
              className="block w-1/4 px-3 py-2 bg-white border border-blue-300 rounded-md text-md
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500">
              <option value="First Author">First Author</option>
              <option value="Second Author">Second Author</option>
            </select>
          </div>
        </label>

        { !isPending && <button className="p-2 ml-32 flex justify-center mt-20 rounded-md bg-sky-500
         group-hover:bg-white text-white text-base group-hover:text-sky-500 shadow-md"> 
          Add Blog 
        </button> }
        
        { isPending && <button disabled className="p-3 ml-32 flex justify-center mt-20 rounded-md bg-sky-500 
          disabled:bg-slate-500 disabled:text-slate-800 group-hover:bg-white text-white text-base group-hover:text-sky-500 shadow-md"> 
          Adding Blog... 
        </button> }
      </form>
    </div>
  );
}
 
export default Create;