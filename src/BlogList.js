import { Link } from "react-router-dom";

const BlogList = ({blogData, heading}) => {

  return ( 
    <div className="">
      <div className="mt-10 pl-80 max-w-screen-lg">
        <h2 className="p-4 text-xl font-bold">{heading}</h2>
        {blogData.map((blog) =>(
          <div key={blog.id}
            className="group block mx-auto mb-6 max-h-fit p-6 border-b border-blue-400 rounded-lg bg-white ring-1 
            ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">

            <Link to={`/blogs/${blog.id}`}>
              <h2 className="text-xl font-semibold text-sky-500 group-hover:text-white group-hover:font-semibold">{blog.title}</h2>
              <p className="text-md font-light group-hover:text-white group-hover:font-normal">Written By: {blog.author}</p>

              {/* <button onClick = {() => handleDelete(blog.id)} className="p-2 rounded-md bg-sky-500 group-hover:bg-white text-white text-base
                group-hover:text-sky-500 shadow-md">
                Delete Blog
              </button> */}
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
}
 
export default BlogList;