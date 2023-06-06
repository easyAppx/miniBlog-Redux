import { useParams, useHistory } from "react-router-dom";
import useFetch from "useFetch";
import { useState } from "react";

const BlogDetails = () => { 

  const {id} = useParams() 
  const {data: blog, isPending,  error} = useFetch('http://localhost:3030/blogs/' + id)
  const history = useHistory()
  const [isWaiting, setIsWaiting] = useState(false)

  const handleDelete = () =>{

    setIsWaiting(true)

    setTimeout(() =>{
      fetch('http://localhost:3030/blogs/' + blog.id, {
        method: 'DELETE'
      }).then(() => {
        console.log('blog deleted')
        setIsWaiting(false)
        history.push('/')
      })
    },1000)
  }
 
  return (
    <div className="text-lg mt-10 flex-auto items-center justify-center mx-auto">
      <h2 className="text-3xl text-blue-600 flex justify-center">Blog Details</h2>

      <div>

        {isPending && 
          <div className="text-xl font-black mt-20 flex items-center justify-center mx-auto">
            <h2>Loading Blogs ...</h2>
          </div>
        }

        { error && <div className="text-lg text-red-700 mt-20 flex items-center justify-center mx-auto"> {error} </div> }

        { blog && (
          <article>
            <h2 className="text-xl font-semibold text-sky-500 group-hover:text-white group-hover:font-semibold">{blog.title}</h2>
            <p className="text-md font-light group-hover:text-white group-hover:font-normal">Written By: {blog.author}</p>
            <p className="text-md font-light group-hover:text-white group-hover:font-normal">{blog.body}</p>
          </article>
        )}

      </div>
      <div>
        { blog && !isWaiting && <button onClick = {() => handleDelete(blog.id)} className="p-2 rounded-md bg-sky-500 group-hover:bg-white text-white text-base
          group-hover:text-sky-500 shadow-md">
          Delete Blog
        </button> }

        { isWaiting && <button className="p-2 rounded-md bg-sky-500 group-hover:bg-white text-white text-base
          group-hover:text-sky-500 shadow-md">
          Deleting Blog....
        </button> }
      </div>
    </div>
  );
}
 
export default BlogDetails;