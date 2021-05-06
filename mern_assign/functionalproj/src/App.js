// import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <PersonCard firstName ={"Julian"} lastName={"Martinez"} age={41} hairColor={"Black"}></PersonCard>
      <PersonCard firstName ={"Jessica"} lastName={"Martinez"} age={40} hairColor={"Autumn Red"}>
      </PersonCard>
      <PersonCard firstName ={"Bubba"} lastName={"Martinez"} age={20} hairColor={"Black"}>
      </PersonCard>
      <PersonCard firstName ={"BamBam"} lastName={"Martinez"} age={11} hairColor={"Red"}>
        </PersonCard>
    </div>
  );
}

export default App;
