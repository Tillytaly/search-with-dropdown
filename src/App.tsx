import { useState } from "react";
import { ProductData } from "./Types";
import { SearchWithDropdown } from "./Components";
import { AddNewProductForm } from "./Components/AddNewProductForm";
import { AddNewProduct } from "./Components/AddNewProduct";
import "./App.css";

const initialSearchData = [
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
  const [searchData, setSearchData] =
    useState<ProductData[]>(initialSearchData);

  console.log(searchData);
  return (
    <div className="App">
      <AddNewProduct onSubmitData={setSearchData} />
      <SearchWithDropdown listItems={searchData} />
    </div>
  );
}

export default App;
