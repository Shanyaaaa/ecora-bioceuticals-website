import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductItem from "../components/ProductItem";
import { ShopContext } from "../context/ShopContext";
import { Filter, ChevronDown, ChevronUp, X } from "lucide-react";

const Product = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [selectedPriceFilter, setSelectedPriceFilter] = useState("");
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const conditions = [
    "Nervine Care", "Dermatitis", "Joint Support", "Digestive Health", "Calcium Support",
    "Liver Health", "Deworming", "Digestion", "Gut Health", "Skin and Coat",
    "Growth and Development", "Pain Management", "Immune Support", "Bacterial Infections"
  ];

  useEffect(() => {
    let temp = [...products];

  // Apply condition filter
  if (selectedConditions.length > 0) {
    temp = temp.filter((product) =>
      selectedConditions.some(cond =>
        product.conditions?.includes(cond)
      )
    );
  }

  // Apply price sort
  if (selectedPriceFilter === "lowToHigh") {
    temp.sort((a, b) => a.price - b.price);
  } else if (selectedPriceFilter === "highToLow") {
    temp.sort((a, b) => b.price - a.price);
  }

  setFilteredProducts(temp);
}, [products, selectedConditions, selectedPriceFilter]);

  const handleConditionChange = (condition) => {
    setSelectedConditions((prev) =>
      prev.includes(condition)
        ? prev.filter((c) => c !== condition)
        : [...prev, condition]
    );
  };

  const clearFilters = () => {
    setSelectedConditions([]);
    setSelectedPriceFilter("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

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
        
        {/* FILTERS */}
        <div className={`w-full lg:w-72 ${showFilter ? "block" : "hidden lg:block"}`}>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sticky top-4">
            
            {/* Close Button (Mobile) */}
            <div className="flex items-center justify-between mb-4 lg:hidden">
              <h2 className="text-xl font-semibold">Filters</h2>
              <button onClick={() => setShowFilter(false)} className="p-2 hover:bg-gray-100 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>

            <h2 className="hidden lg:block text-xl font-semibold mb-6">FILTERS</h2>

            {/* Price Filter */}
            <div className="mb-6">
              <h3 className="mb-3 text-base font-medium text-gray-900">Price</h3>
              <div className="space-y-2">
                {["lowToHigh", "highToLow"].map((value) => (
                  <label key={value} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-md">
                    <input
                      type="radio"
                      name="price"
                      className="mr-3 w-4 h-4"
                      value={value}
                      checked={selectedPriceFilter === value}
                      onChange={(e) => setSelectedPriceFilter(e.target.value)}
                    />
                    <span className="text-sm">{value === "lowToHigh" ? "Low to High" : "High to Low"}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Condition Filter */}
            <div className="mb-6">
              <h3 className="mb-3 text-base font-medium text-gray-900">Condition</h3>
              <div className="space-y-2 max-h-[200px] overflow-y-auto pr-1">
                {conditions.map((condition) => (
                  <label key={condition} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-md">
                    <input
                      type="checkbox"
                      className="mr-3 w-4 h-4"
                      checked={selectedConditions.includes(condition)}
                      onChange={() => handleConditionChange(condition)}
                    />
                    <span className="text-sm text-gray-700">{condition}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              className="w-full py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
              onClick={clearFilters}
            >
              Clear All Filters
            </button>
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="flex-1">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-2">
              — All Products —
            </h1>
            <p className="text-sm text-gray-600">
              Showing {filteredProducts.length} results
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
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
