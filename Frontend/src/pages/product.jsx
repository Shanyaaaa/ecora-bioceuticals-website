import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Filter, X, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ProductItem from "../components/ProductItem";


const Product = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [selectedPriceFilter, setSelectedPriceFilter] = useState("");
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  const handleConditionChange = (condition) => {
    setSelectedConditions((prev) =>
      prev.includes(condition)
        ? prev.filter((c) => c !== condition)
        : [...prev, condition]
    );
  };

  const conditions = [
    "Nervine Care",
    "Dermatitis",
    "Joint Support",
    "Digestive Health",
    "Calcium Support",
    "Liver Health",
    "Deworming",
    "Digestion",
    "Gut Health",
    "Skin and Coat",
    "Growth and Development",
    "Pain Management",
    "Immune Support",
    "Bacterial Infections"
  ];

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
          {showFilter ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 pt-4 lg:pt-10 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 flex-grow max-w-7xl mx-auto w-full">
        {/* FILTER SECTION */}
        <div className={`w-full lg:w-80 xl:w-96 ${showFilter ? "block" : "hidden lg:block"}`}>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 lg:p-6 sticky top-4">
            {/* Mobile Close Button */}
            <div className="flex items-center justify-between mb-4 lg:hidden">
              <h2 className="text-xl font-semibold">Filters</h2>
              <button
                onClick={() => setShowFilter(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Desktop Title */}
            <h2 className="hidden lg:block text-xl xl:text-2xl font-semibold mb-6">FILTERS</h2>

            {/* PRICE FILTER */}
            <div className="mb-6 lg:mb-8">
              <h3 className="mb-3 lg:mb-4 text-base lg:text-lg font-medium text-gray-900">
                Price
              </h3>
              <div className="space-y-2 lg:space-y-3">
                {["lowToHigh", "highToLow"].map((value) => (
                  <label
                    key={value}
                    className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors"
                  >
                    <input
                      type="radio"
                      name="price"
                      className="mr-3 w-4 h-4 text-blue-600"
                      value={value}
                      checked={selectedPriceFilter === value}
                      onChange={(e) => setSelectedPriceFilter(e.target.value)}
                    />
                    <span className="text-sm lg:text-base text-gray-700">
                      {value === "lowToHigh" ? "Low to High" : "High to Low"}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* CONDITION FILTER */}
            <div className="mb-6 lg:mb-8">
              <h3 className="mb-3 lg:mb-4 text-base lg:text-lg font-medium text-gray-900">
                Condition
              </h3>
              <div className="space-y-2 lg:space-y-3">
                {conditions.map((condition) => (
                  <label
                    key={condition}
                    className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors"
                  >
                    <input
                      type="checkbox"
                      className="mr-3 w-4 h-4 text-blue-600 rounded"
                      checked={selectedConditions.includes(condition)}
                      onChange={() => handleConditionChange(condition)}
                    />
                    <span className="text-sm lg:text-base text-gray-700">
                      {condition}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Clear Filters Button */}
            <button
              className="w-full py-2 lg:py-3 px-4 text-sm lg:text-base font-medium text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              onClick={() => {
                setSelectedPriceFilter("");
                setSelectedConditions([]);
              }}
            >
              Clear All Filters
            </button>
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="flex-1 min-w-0">
          <div className="mb-6 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 drop-shadow-lg mb-4">
              — All Products —
            </h1>
            <p className="text-sm lg:text-base text-gray-600">
              Showing {filterProducts.length} results
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                name={item.name}
                id={item._id}
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
