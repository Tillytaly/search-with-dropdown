import { SearchWithDropdown } from "./Components";
import { AddNewProduct } from "./Components/AddNewProduct";
import { SearchWithDropdownProvider } from "./Contexts/SearchWithDropdownContext";
import "./App.css";

function App() {
  return (
    <SearchWithDropdownProvider>
      <div className="App">
        <AddNewProduct />
        <SearchWithDropdown />
      </div>
    </SearchWithDropdownProvider>
  );
}

export default App;
