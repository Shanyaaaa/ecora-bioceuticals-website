import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import { products } from '../assets/assets';

const Suggestions = ({ currentProduct }) => {
  const suggestedProducts = products.filter((p) => {
    if (p._id === currentProduct._id) return false;
    const matchesCondition = p.conditions?.some((cond) =>
      currentProduct.conditions?.includes(cond)
    );
    const closeInPrice = Math.abs(p.price - currentProduct.price) <= 100;
    return matchesCondition || closeInPrice;
  }).slice(0, 4); // Limit suggestions

  return (
    <div className="px-0 pt-4 pb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 px-4">You may also like</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
        {suggestedProducts.length > 0 ? (
          suggestedProducts.map((product) => (
            <ProductItem
              key={product._id}
              id={product._id}
              name={product.name}
              image={product.image}
              category={product.category}
              price={product.price}
            />
          ))
        ) : (
          <p className="text-gray-500 col-span-full">No related products found.</p>
        )}
      </div>
    </div>
  );
};

Suggestions.propTypes = {
  currentProduct: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    conditions: PropTypes.array,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Suggestions;
