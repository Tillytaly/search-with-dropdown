import { SearchWithDropdown } from "./Components";
import {} from "./Components/SearchWithDropdown/useSearchWithDropdown";
import "./App.css";

const searchData = [
  {
    name: "Fixed TOC - table of contents for WordPress plugin",
    regularPrice: 20,
    salePrice: 3.99,
  },
  {
    name: "Jobify - The Most Popular WordpPress Job Board Theme",
    regularPrice: 59,
    salePrice: 3.99,
  },
  {
    name: "Lorem ipsum",
    regularPrice: 99,
    salePrice: 21,
  },
];

function App() {
  return (
    <div className="App">
      <SearchWithDropdown listItems={searchData} />
    </div>
  );
}

export default App;
