// import logo from './logo.svg';
import './App.css';
import{Router, Link} from "@reach/router"
import CreateProduct from './components/CreateProduct'
import Main from './components/Main'
import ProductDetail from './components/ProductDetail'
import EditProduct from './components/EditProduct'

function App() {
  return (
    <div className="App">
      <h1 className="text-center mt-4">Hello World</h1>
      
      <Router>
        <Main path="/"></Main>
        <CreateProduct path="/products/new"></CreateProduct>
        <ProductDetail path="/products/:id"></ProductDetail>
        <EditProduct path="/products/edit/:id"></EditProduct>
      </Router>
    </div>
  );
}

export default App;
