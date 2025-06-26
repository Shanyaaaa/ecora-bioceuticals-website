import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer">
      <div className="overflow-hidden border rounded-lg p-4 shadow-sm w-full max-w-[300px] min-h-[460px] flex flex-col justify-between transition duration-300 ease-in-out hover:shadow-xl group bg-white">
        <div className="overflow-hidden rounded">
          <img
            src={image[0]}
            alt={name}
            className="w-full h-52 object-contain mb-2 rounded transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </div>
        <p className="pt-2 pb-1 text-sm font-medium text-gray-900 break-words">
          {name}
        </p>
        <p className="text-base font-semibold text-gray-800 mt-auto">
          {currency}{price}
        </p>
      </div>
    </Link>
  );
};

ProductItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.arrayOf(PropTypes.string),
  price: PropTypes.number,
};

export default ProductItem;
