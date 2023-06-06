import { Link } from "react-router-dom";

const ErrorPage  = () => {
  return (
    <div className="text-lg mt-10 p-20 grid items-center justify-center mx-auto">
      <h2>Sorry</h2>
      <p>Page Not Found</p>
      <div className="rounded-md border text-center p-2 mt-5 border-blue-500 bg-blue-700 text-lg text-white">
        <Link to='/'>go to home page</Link>
      </div>
    </div>
  );
}
 
export default ErrorPage;
