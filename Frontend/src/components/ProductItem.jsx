import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, category, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <div className="cursor-pointer">
      <Link to={`/product/${id}`} className="block text-gray-800 no-underline">
        <div className="overflow-hidden border border-gray-200 rounded-lg p-3 shadow-sm h-[280px] w-full bg-white transition hover:shadow-md">
          <img
            src={image[0]}
            alt={name}
            className="w-full h-32 object-contain rounded transition-transform duration-500 ease-in-out hover:scale-125"
          />
          <p className="pt-1 pb-0.5 text-sm font-medium text-gray-900 transition-colors duration-300 hover:text-red-600">
            {name}
          </p>
          <p className="text-xs text-gray-500">{category}</p>
          <p className="text-sm font-semibold text-gray-800 mt-1">
            {currency}{price}
          </p>
        </div>
      </Link>
    </div>
  );
};

ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};

export default ProductItem;
