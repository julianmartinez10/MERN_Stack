// import logo from './logo.svg';
import './App.css';

import NewComponent from "./components/test";


//  this is a component
function App() {
  return (
    <>
    <div className="App">
      <NewComponent someText={"Wazzzzzzzzzup World!"}/>
    </div>
    <div>
      <h3>Things I Need To Do:</h3>
      <ol>
        <li>Learn React</li>
        <li>Climb Mt. Everest</li>
        <li>Run a marathon</li>
        <li>Feed the dogs</li>
      </ol>
    </div>
    <div>
      <NewComponent someText={"I should be at bottom of page! This is the second use of someText!"}/>
    </div>
    </>
  );
}

export default App;
