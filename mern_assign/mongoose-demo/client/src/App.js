import './App.css';
import AllQuotes from './components/AllQuotes'
import {Router} from "@reach/router"
import QuoteDetails from './components/QuoteDetails'

function App() {
  return (
    <div className="App">
      <h1 className="mt-4" >Hello World</h1>
      <Router>
        <AllQuotes path="/"></AllQuotes>
        <QuoteDetails path="/quotes/:id"></QuoteDetails>
      </Router>
      
    </div>
  );
}

export default App;
