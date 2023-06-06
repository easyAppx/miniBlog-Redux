import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
    <nav className="flex justify-around font-bold p-6 shadow-sm border-b border-gray-200">
      <a href="/"><h1 className="text-blue-900 text-3xl">miniBLOG</h1></a>
      <div className="text-blue-900 text-xl space-x-8">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/create" className="hover:underline">New Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;