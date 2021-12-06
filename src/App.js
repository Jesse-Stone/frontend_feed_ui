import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Details from './Components/Details';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div> 
        <Navbar />
          <Switch>
            <Route exact path = "/" >
              <Home />
            </Route>
            <Route path = "/details/:id">
              <Details />
            </Route>
          </Switch>
      </div>
   </Router>
  );
}

export default App;
