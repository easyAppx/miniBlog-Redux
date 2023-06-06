import React, {useState, useEffect} from "react";
import BlogList from "BlogList";
import useFetch from "useFetch";

const Home = () => {

  // to creat the json server fake rest api for the database 
  // npx json-server --watch data/db.json --port 3030 on a terminal and enter

  const {data: blogs, isPending, error} = useFetch('http://localhost:3030/blogs/')
  const [name, setName] = useState('Mario')

  const handleNameClick = () =>{
    setName('Lucius')
  }

  const [count, setCount] = useState(0);

  return (
    <div className="text-lg mt-10 flex-auto items-center justify-center mx-auto">
       <h2 className="text-3xl text-blue-600 flex justify-center">Home Page</h2>
      <div className="text-lg grid mt-5 items-center mx-auto">
        <div className="mt-10 pl-80">
          <div>
            <p>My Name is: {name}</p>
          </div>
          <button onClick={handleNameClick} className="p-3 mt-3 border-2 border-indigo-600 bg-orange-500 rounded-full">
            Change Name
          </button>
        </div>
      </div>

      <div className="pl-80 text-lg mt-10 items-center mx-auto">
        <p>You clicked {count} times</p>
        <button className="p-3 mt-3 border-2 border-indigo-600 bg-orange-500 rounded-full" onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>

      <div>

        {isPending && 
          <div className="text-xl font-black mt-20 flex items-center justify-center mx-auto">
            <h2>Loading Blogs ...</h2>
          </div>
        }

        { error && <div className="text-lg text-red-700 mt-20 flex items-center justify-center mx-auto"> {error} </div> }

        { blogs && <BlogList blogData = {blogs} heading = 'All Blogs!' />}
        { blogs && <BlogList blogData = {blogs.filter((blog) => blog.author === 'Portfolio')} heading = 'Portfolio Blog!'  />}

      </div>
    </div>
  );
}
 
export default Home
