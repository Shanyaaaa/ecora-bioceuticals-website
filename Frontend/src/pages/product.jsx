import React, { useContext, useState } from 'react';
import { ShopContext } from "../context/ShopContext";

const Product = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">

      {/* FILTER OPTIONS */}
      <div className="min-w-60">
        <p 
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS
        </p>

        {showFilter && (
          <div className="border border-gray-300 pl-5 py-3 mt-6">
            {/* Add category filter options here */}
            <p className="text-sm text-gray-700">Category 1</p>
            <p className="text-sm text-gray-700">Category 2</p>
            <p className="text-sm text-gray-700">Category 3</p>
          </div>
        )}
      </div>

      {/* PRODUCTS LIST */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products && products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="border p-4 shadow hover:shadow-lg transition">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default Product;
