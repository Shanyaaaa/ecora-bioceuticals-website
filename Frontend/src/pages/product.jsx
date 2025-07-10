import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductItem from "../components/ProductItem";
import { ShopContext } from "../context/ShopContext";
import { Search, X } from "lucide-react";

const Product = () => {
  const { products } = useContext(ShopContext);

  const [searchInput, setSearchInput] = useState("");
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [selectedPriceFilter, setSelectedPriceFilter] = useState("");
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const conditions = [
    "Nervine Care", "Joint Support", "Digestive Health", "Calcium Support", "Liver Health",
    "Gut Health", "Skin and Coat", "Immune Support", "Cardiovascular Health", "Deworming",
    "Hip Support", "Allergy Relief", "Cancer Support", "Pain Relief", "Obesity Support",
    "Lung Health", "Urinary Tract Support", "Multivitamin Support", "Kidney Support", "Eye Health",
    "Brain Health", "Pancreas Health", "Healing", "Blood Health", "Growth and Development",
    "Coprophagia Support", "Bacterial Infection", "Antibiotic Therapy"
  ];

  const normalizeConditions = (conds) => {
    if (!conds) return [];
    return Array.isArray(conds) ? conds : conds.split(",").map((c) => c.trim());
  };

  useEffect(() => {
    let temp = [...products];

    if (searchInput.trim()) {
      temp = temp.filter((p) =>
        p.name.toLowerCase().includes(searchInput.toLowerCase().trim())
      );
    }

    if (selectedConditions.length > 0) {
      temp = temp.filter((product) => {
        const conds = normalizeConditions(product.conditions);
        return selectedConditions.some((cond) =>
          conds.map((c) => c.toLowerCase()).includes(cond.toLowerCase())
        );
      });
    }

    if (selectedCategory) {
      temp = temp.filter(
        (product) =>
          product.category?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (selectedPriceFilter === "lowToHigh") {
      temp.sort((a, b) => a.price - b.price);
    } else if (selectedPriceFilter === "highToLow") {
      temp.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(temp);
  }, [products, searchInput, selectedConditions, selectedPriceFilter, selectedCategory]);

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
    setSelectedCategory("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Top Header with Search */}
      <div className="flex flex-col items-center justify-center text-center mt-6">
        <div className="flex items-center justify-between flex-wrap w-full max-w-6xl px-4 mx-auto mb-4">
          <h1 className="text-2xl font-bold text-gray-800 ml-125">All Products</h1>

          <div className="relative mt-2 sm:mt-0">
            {showSearchBox ? (
              <div className="relative w-64">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:ring-amber-500 outline-none"
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
                className="flex items-center gap-2 border px-4 py-2 rounded-full shadow-sm hover:bg-gray-100"
              >
                <Search className="w-4 h-4" />
                <span className="text-sm font-medium">Search</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto w-full px-4 pb-10">
        {/* Filter Section */}
        <aside className="w-full lg:w-64">
          <div className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-5">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>

            {/* Price */}
            <details className="mb-4">
              <summary className="cursor-pointer text-sm font-medium mb-2">Price</summary>
              <div className="space-y-1 ml-2 mt-2">
                <label className="text-sm block">
                  <input type="radio" name="price" value="lowToHigh" className="mr-1"
                    checked={selectedPriceFilter === "lowToHigh"}
                    onChange={(e) => setSelectedPriceFilter(e.target.value)}
                  />
                  Low to High
                </label>
                <label className="text-sm block">
                  <input type="radio" name="price" value="highToLow" className="mr-1"
                    checked={selectedPriceFilter === "highToLow"}
                    onChange={(e) => setSelectedPriceFilter(e.target.value)}
                  />
                  High to Low
                </label>
              </div>
            </details>

            {/* Category */}
            <details className="mb-4">
              <summary className="cursor-pointer text-sm font-medium mb-2">Category</summary>
              <div className="space-y-1 ml-2 mt-2">
                {["Dogs", "Cats", "Dogs & Cats"].map((category) => (
                  <label key={category} className="text-sm block">
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      checked={selectedCategory === category}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="mr-1"
                    />
                    {category}
                  </label>
                ))}
              </div>
            </details>

            {/* Conditions */}
            <details className="mb-4">
              <summary className="cursor-pointer text-sm font-medium mb-2">Conditions</summary>
              <div className="space-y-1 ml-2 mt-2 max-h-40 overflow-y-auto custom-scroll">
                {conditions.map((condition) => (
                  <label key={condition} className="text-sm block">
                    <input
                      type="checkbox"
                      checked={selectedConditions.includes(condition)}
                      onChange={() => handleConditionChange(condition)}
                      className="mr-1"
                    />
                    {condition}
                  </label>
                ))}
              </div>
            </details>

            <button
              onClick={clearFilters}
              className="w-full mt-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-100"
            >
              Clear All Filters
            </button>
          </div>
        </aside>

        {/* Product Grid */}
        <section className="flex-1">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
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
          {filteredProducts.length === 0 && (
            <p className="text-center mt-8 text-sm text-gray-500">No products match your filters.</p>
          )}
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Product;
