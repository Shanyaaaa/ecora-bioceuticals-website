import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductItem from "../components/ProductItem";
import { ShopContext } from "../context/ShopContext";
import { Filter, ChevronDown, ChevronUp, X, Search } from "lucide-react";

const Product = () => {
  const { products } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [selectedPriceFilter, setSelectedPriceFilter] = useState("");
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const conditions = [
  "Nervine Care",
  "Joint Support",
  "Digestive Health",
  "Calcium Support",
  "Liver Health",
  "Gut Health",
  "Skin and Coat",
  "Immune Support",
  "Cardiovascular Health",
  "Deworming",
  "Hip Support",
  "Allergy Relief",
  "Cancer Support",
  "Pain Relief",
  "Obesity Support",
  "Lung Health",
  "Urinary Tract Support",
  "Multivitamin Support",
  "Kidney Support",
  "Eye Health",
  "Brain Health",
  "Pancreas Health",
  "Healing",
  "Blood Health",
  "Growth and Development",
  "Coprophagia Support",
  "Bacterial Infection",
  "Antibiotic Therapy",
  


];

  useEffect(() => {
    let temp = [...products];

    if (searchInput.trim()) {
      temp = temp.filter((p) =>
        p.name.toLowerCase().includes(searchInput.toLowerCase().trim())
      );
    }

    if (selectedConditions.length > 0) {
      temp = temp.filter((product) =>
        selectedConditions.some((cond) => product.conditions?.includes(cond))
      );
    }

    if (selectedPriceFilter === "lowToHigh") {
      temp.sort((a, b) => a.price - b.price);
    } else if (selectedPriceFilter === "highToLow") {
      temp.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(temp);
  }, [products, searchInput, selectedConditions, selectedPriceFilter]);

  const handleConditionChange = (condition) => {
    setSelectedConditions((prev) =>
      prev.includes(condition)
        ? prev.filter((c) => c !== condition)
        : [...prev, condition]
    );
  };

  const clearFilters = () => {
    setSearchInput("");
    setSelectedConditions([]);
    setSelectedPriceFilter("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      {/* Search Toggle Top Right */}
      <div className="flex justify-end items-center p-4 px-6 relative">
        {showSearchBox ? (
          <div className="relative w-full sm:w-1/2 md:w-1/3">
            <input
              type="text"
              placeholder="Search product..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm outline-none focus:ring-2 focus:ring-pink-500"
            />
            <X
              className="absolute top-2.5 right-3 w-5 h-5 text-gray-500 cursor-pointer hover:text-red-500"
              onClick={() => {
                setShowSearchBox(false);
                setSearchInput("");
              }}
            />
          </div>
        ) : (
          <button
            onClick={() => setShowSearchBox(true)}
            className="flex items-center gap-2 px-4 py-2 bg-white border rounded-full shadow-sm hover:bg-gray-100"
          >
            <Search className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Search</span>
          </button>
        )}
      </div>

      {/* Mobile Filter Toggle */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3 sm:hidden">
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="flex items-center justify-between w-full text-left"
        >
          <span className="flex items-center gap-2 text-lg font-semibold">
            <Filter className="w-5 h-5" />
            Filters
          </span>
          {showFilter ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-4 pt-4 px-3 sm:px-4 md:px-6 lg:px-8 max-w-6xl mx-auto w-full">

        {/* Filters */}
        <div className={`w-full lg:w-72 ${showFilter ? "block" : "hidden lg:block"}`}>
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 sticky top-4">

            <div className="flex items-center justify-between mb-4 lg:hidden">
              <h2 className="text-xl font-semibold">Filters</h2>
              <button onClick={() => setShowFilter(false)} className="p-2 hover:bg-gray-100 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>

            <h2 className="hidden lg:block text-2xl font-bold mb-6 text-gray-800">Filters</h2>

            {/* PRICE */}
            <details className="mb-6 group border border-gray-100 rounded-lg">
              <summary className="flex items-center justify-between p-3 text-gray-800 font-medium cursor-pointer group-open:font-semibold group-open:text-purple-700 hover:bg-gray-50 rounded-lg">
                <span>Price</span>
                <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-4 pb-4 space-y-2">
                {["lowToHigh", "highToLow"].map((value) => (
                  <label key={value} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 hover:text-gray-900">
                    <input
                      type="radio"
                      name="price"
                      className="accent-purple-600"
                      value={value}
                      checked={selectedPriceFilter === value}
                      onChange={(e) => setSelectedPriceFilter(e.target.value)}
                    />
                    {value === "lowToHigh" ? "Low to High" : "High to Low"}
                  </label>
                ))}
              </div>
            </details>

            {/* CONDITIONS */}
            <details className="mb-6 group border border-gray-100 rounded-lg">
              <summary className="flex items-center justify-between p-3 text-gray-800 font-medium cursor-pointer group-open:font-semibold group-open:text-purple-700 hover:bg-gray-50 rounded-lg">
                <span>Condition</span>
                <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-4 pb-4 max-h-[180px] overflow-y-auto space-y-2 custom-scroll">
                {conditions.map((condition) => (
                  <label key={condition} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 hover:text-gray-900">
                    <input
                      type="checkbox"
                      className="accent-purple-600"
                      checked={selectedConditions.includes(condition)}
                      onChange={() => handleConditionChange(condition)}
                    />
                    {condition}
                  </label>
                ))}
              </div>
            </details>

            <button
              className="w-full mt-2 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
              onClick={clearFilters}
            >
              Clear All Filters
            </button>
          </div>
        </div>

        {/* Products */}
        <div className="flex-1">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-2">
              — All Products —
            </h1>
            <p className="text-sm text-gray-600">
              Showing {filteredProducts.length} results
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((item) => (
              <ProductItem
                key={item._id}
                name={item.name}
                id={item._id}
                category={item.category}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Product;
