import './App.css';
import Director from "./components/Director/Director";
import Employee from "./components/Employee/Employee";
import Product from "./components/Product/Product";

function App() {
  return (
    <div className="App">
      App Component
      <Director />
      <Employee />
      <Product />
    </div>
  );
}

export default App;
