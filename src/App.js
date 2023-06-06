import './index.css';
import Navbar from './Navbar';
import Home from 'Home';
import Create from 'Create';
import BlogDetails from 'BlogDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorPage from 'ErrorPage';

function App() {
  return (
    <Router>
      <div className="mx-auto items-center justify-center rounded-xl space-x-4">
        <Navbar/>
        <div className="pl-0">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/Create">
              <Create/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path="*">
              <ErrorPage/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
