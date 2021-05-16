import './App.css';
import Home from './components/Home';
import Params from './components/Params';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      {/* <h2>Howdy!!!! You're now on localhost 3000!!!!</h2> */}
      <Router>
        <Home path="/home"/>
        <Params path="/:id"/>
        <Params path="/:id/:wc/:bc"/>
      </Router>
    </div>
  );
}

export default App;
