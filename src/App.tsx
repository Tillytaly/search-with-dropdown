import { SearchWithDropdown } from "./Components";
import { AddNewProduct } from "./Components/AddNewProduct";
import { SearchWithDropdownProvider } from "./Contexts/SearchWithDropdownContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AddNewProduct />
      <SearchWithDropdown />
    </div>
  );
}

export default App;
