// // src/pages/Cart.jsx
// import React, { useContext, useState } from 'react';
// import { ShopContext } from '../Context/ShopContext';
// import { Plus, Minus } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Cart = () => {
//     // Destructure all necessary values and functions from ShopContext
//     const { cartItems, products, updateCartItem, removeFromCart, getCartSubtotal, currency, deliveryCharges } = useContext(ShopContext);
//     const [removingItems, setRemovingItems] = useState(new Set());

//     // Use the getCartSubtotal from context
//     const subtotal = getCartSubtotal();
//     // Use the deliveryCharges from context
//     const shippingFee = subtotal <= 500 ? deliveryCharges : 0;
//     const total = subtotal + shippingFee;

//     const handleRemove = (id, size) => {
//         const itemKey = `${id}-${size}`;
//         setRemovingItems(prev => new Set(prev).add(itemKey));
//         setTimeout(() => {
//             removeFromCart(id, size);
//             setRemovingItems(prev => {
//                 const next = new Set(prev);
//                 next.delete(itemKey);
//                 return next;
//             });
//         }, 300);
//     };

//     const changeQty = (id, qty) => {
//         const parsedQty = Math.max(1, parseInt(qty) || 1);
//         updateCartItem(id, parsedQty);
//     };

//     return (
//         <div className="min-h-screen bg-[#faf5ff] px-4 py-10 sm:px-10 font-sans">
//             <h1 className="text-3xl font-bold text-center text-purple-700 mb-10">Your Shopping Cart</h1>

//             {Object.keys(cartItems).length === 0 ? (
//                 <div className="text-center bg-white p-10 rounded-xl shadow-md max-w-md mx-auto">
//                     <h2 className="text-xl font-semibold mb-2">Your cart is empty!</h2>
//                     <p className="text-gray-500 mb-4">Start exploring our products and fill it up </p>
//                     <Link to="/products">
//                         <button className="px-6 py-2 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition">
//                             Browse Products
//                         </button>
//                     </Link>
//                 </div>
//             ) : (
//                 <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
//                     {/* Cart Items */}
//                     <div className="lg:col-span-2 space-y-4">
//                         {Object.entries(cartItems).map(([id, quantity]) => {
//                             const product = products.find(p => p._id === id);
//                             if (!product) return null;

//                             return (
//                                 <div key={id} className="bg-white rounded-xl p-5 shadow-md flex items-center justify-between">
//                                     <div className="flex items-center gap-5">
//                                         <img
//                                             src={product.image[0]}
//                                             alt={product.name}
//                                             className="w-20 h-20 object-cover rounded-lg shadow"
//                                         />
//                                         <div>
//                                             <h3 className="text-lg font-semibold text-gray-800">
//                                                 {product.name}
//                                             </h3>
//                                             <p className="text-purple-700 font-medium">{currency}{product.price.toFixed(2)}</p>
//                                         </div>
//                                     </div>

//                                     <div className="flex items-center gap-3">
//                                         <button
//                                             onClick={() => changeQty(id, quantity - 1)}
//                                             disabled={quantity <= 1}
//                                             className={`w-8 h-8 rounded-full flex items-center justify-center ${quantity <= 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-purple-600 text-white'
//                                                 }`}
//                                         >
//                                             <Minus className="w-4 h-4" />
//                                         </button>
//                                         <span>{quantity}</span>
//                                         <button
//                                             onClick={() => changeQty(id, quantity + 1)}
//                                             className="w-8 h-8 rounded-full flex items-center justify-center bg-purple-600 text-white"
//                                         >
//                                             <Plus className="w-4 h-4" />
//                                         </button>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                     const itemKey = `${id}-${size}`;
//                     const isRemoving = removingItems.has(itemKey);

//                     return (
//                     <div
//                         key={itemKey}
//                         className={`bg-white rounded-xl p-5 shadow-md flex items-center justify-between transition-all duration-300 ${isRemoving ? 'opacity-50 scale-95' : ''
//                             }`}
//                     >
//                         <div className="flex items-center gap-5">
//                             <img
//                                 src={product.image[0]}
//                                 alt={product.name}
//                                 className="w-20 h-20 object-cover rounded-lg shadow"
//                             />
//                             <div>
//                                 <h3 className="text-lg font-semibold text-gray-800">
//                                     {product.name}
//                                     <span className="text-gray-500 text-sm ml-2">({size})</span>
//                                 </h3>
//                                 <p className="text-purple-700 font-medium">{currency}{product.price.toFixed(2)}</p>
//                             </div>
//                         </div>

//                         <div className="flex items-center gap-3">
//                             <button
//                                 onClick={() => changeQty(id, size, quantity - 1)}
//                                 disabled={quantity <= 1}
//                                 className={`w-8 h-8 rounded-full flex items-center justify-center ${quantity <= 1
//                                         ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
//                                         : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
//                                     }`}
//                             >
//                                 <Minus size={16} />
//                             </button>
//                             <span className="w-10 text-center font-medium">{quantity}</span>
//                             <button
//                                 onClick={() => changeQty(id, size, quantity + 1)}
//                                 className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center justify-center"
//                             >
//                                 <Plus size={16} />
//                             </button>
//                         </div>

//                         <div className="text-right">
//                             <p className="text-md font-semibold text-gray-700">
//                                 {currency}{(product.price * quantity).toFixed(2)}
//                             </p>
//                             <button
//                                 onClick={() => handleRemove(id, size)}
//                                 className="text-sm text-red-500 hover:underline mt-1"
//                             >
//                                 Remove
//                             </button>
//                         </div>
//                     </div>
//                     );
//                             });
//                         })}
//                 </div>

//                     {/* Totals Section */}
//             <div className="bg-white rounded-xl shadow-md p-6 space-y-4 h-fit">
//                 <h2 className="text-xl font-bold text-purple-800">Order Summary</h2>
//                 <div className="flex justify-between border-b pb-2">
//                     <span>Subtotal</span>
//                     <span className="font-medium text-gray-700">{currency}{subtotal.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between border-b pb-2">
//                     <span>Shipping</span>
//                     <span className={shippingFee > 0 ? '' : 'text-green-600 font-medium'}>
//                         {shippingFee > 0 ? `${currency}${shippingFee.toFixed(2)}` : 'Free'}
//                     </span>
//                 </div>
//                 <div className="flex justify-between text-lg font-bold pt-2">
//                     <span>Total</span>
//                     <span className="text-purple-700">{currency}{total.toFixed(2)}</span>
//                 </div>
//                 <Link to="/placeorder">
//                     <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
//                         Proceed to Checkout
//                     </button>
//                 </Link>
//                 <Link to="/products">
//                     <button className="w-full text-purple-600 border border-purple-300 py-2 rounded-lg font-medium hover:bg-purple-50 transition">
//                         Continue Shopping
//                     </button>
//                 </Link>
//             </div>
//         </div>
//     )
// }
//         </div >
//     );
// };

// export default Cart;

// src/pages/Cart.jsx
// import React, { useContext, useState } from 'react';
// import { ShopContext } from '../Context/ShopContext';
// import { Plus, Minus } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Cart = () => {
//   const {
//     cartItems,
//     products,
//     updateCartItem,
//     removeFromCart,
//     getCartSubtotal,
//     currency,
//     deliveryCharges,
//   } = useContext(ShopContext);

//   const [removingItems, setRemovingItems] = useState(new Set());

//   const subtotal = getCartSubtotal();
//   const shippingFee = subtotal <= 500 ? deliveryCharges : 0;
//   const total = subtotal + shippingFee;

//   const handleRemove = (id) => {
//     setRemovingItems((prev) => new Set(prev).add(id));
//     setTimeout(() => {
//       removeFromCart(id);
//       setRemovingItems((prev) => {
//         const next = new Set(prev);
//         next.delete(id);
//         return next;
//       });
//     }, 300);
//   };

//   const changeQty = (id, qty) => {
//     const parsedQty = Math.max(1, parseInt(qty) || 1);
//     updateCartItem(id, parsedQty);
//   };

//   return (
//     <div className="min-h-screen bg-[#faf5ff] px-4 py-10 sm:px-10 font-sans">
//       <h1 className="text-3xl font-bold text-center text-purple-700 mb-10">
//         Your Shopping Cart
//       </h1>

//       {Object.keys(cartItems).length === 0 ? (
//         <div className="text-center bg-white p-10 rounded-xl shadow-md max-w-md mx-auto">
//           <h2 className="text-xl font-semibold mb-2">Your cart is empty!</h2>
//           <p className="text-gray-500 mb-4">
//             Start exploring our products and fill it up
//           </p>
//           <Link to="/products">
//             <button className="px-6 py-2 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition">
//               Browse Products
//             </button>
//           </Link>
//         </div>
//       ) : (
//         <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
//           {/* Cart Items */}
//           <div className="lg:col-span-2 space-y-4">
//             {Object.entries(cartItems).map(([id, quantity]) => {
//   // Ensure quantity is a number
//   quantity = Number(quantity) || 0;

//   const product = products.find((p) => p._id === id);
//   if (!product) return null;

//   const isRemoving = removingItems.has(id);

//               return (
//                 <div
//                   key={id}
//                   className={`bg-white rounded-xl p-5 shadow-md flex items-center justify-between transition-all duration-300 ${
//                     isRemoving ? 'opacity-50 scale-95' : ''
//                   }`}
//                 >
//                   <div className="flex items-center gap-5">
//                     <img
//                       src={product.image[0]}
//                       alt={product.name}
//                       className="w-20 h-20 object-cover rounded-lg shadow"
//                     />
//                     <div>
//                       <h3 className="text-lg font-semibold text-gray-800">
//                         {product.name}
//                       </h3>
//                       <p className="text-purple-700 font-medium">
//                         {currency}
//                         {product.price.toFixed(2)}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-3">
//                     <button
//                       onClick={() => changeQty(id, quantity - 1)}
//                       disabled={quantity <= 1}
//                       className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                         quantity <= 1
//                           ? 'bg-gray-200 cursor-not-allowed'
//                           : 'bg-purple-600 text-white'
//                       }`}
//                     >
//                       <Minus className="w-4 h-4" />
//                     </button>
//                     <span>{quantity}</span>
//                     <button
//                       onClick={() => changeQty(id, quantity + 1)}
//                       className="w-8 h-8 rounded-full flex items-center justify-center bg-purple-600 text-white"
//                     >
//                       <Plus className="w-4 h-4" />
//                     </button>
//                   </div>

//                   <div className="text-right">
//                     <p className="text-md font-semibold text-gray-700">
//                       {currency}
//                       {(product.price * quantity).toFixed(2)}
//                     </p>
//                     <button
//                       onClick={() => handleRemove(id)}
//                       className="text-sm text-red-500 hover:underline mt-1"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Totals Section */}
//           <div className="bg-white rounded-xl shadow-md p-6 space-y-4 h-fit">
//             <h2 className="text-xl font-bold text-purple-800">Order Summary</h2>
//             <div className="flex justify-between border-b pb-2">
//               <span>Subtotal</span>
//               <span className="font-medium text-gray-700">
//                 {currency}
//                 {subtotal.toFixed(2)}
//               </span>
//             </div>
//             <div className="flex justify-between border-b pb-2">
//               <span>Shipping</span>
//               <span
//                 className={
//                   shippingFee > 0 ? '' : 'text-green-600 font-medium'
//                 }
//               >
//                 {shippingFee > 0
//                   ? `${currency}${shippingFee.toFixed(2)}`
//                   : 'Free'}
//               </span>
//             </div>
//             <div className="flex justify-between text-lg font-bold pt-2">
//               <span>Total</span>
//               <span className="text-purple-700">
//                 {currency}
//                 {total.toFixed(2)}
//               </span>
//             </div>
//             <Link to="/placeorder">
//               <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
//                 Proceed to Checkout
//               </button>
//             </Link>
//             <Link to="/products">
//               <button className="w-full text-purple-600 border border-purple-300 py-2 rounded-lg font-medium hover:bg-purple-50 transition">
//                 Continue Shopping
//               </button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;
// src/pages/Cart.jsx
import React, { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
    // Destructure all necessary values and functions from ShopContext
    const { cartItems, products, updateCartItem, removeFromCart, getCartSubtotal, currency, deliveryCharges } = useContext(ShopContext);
    const [removingItems, setRemovingItems] = useState(new Set());

    // Use the getCartSubtotal from context
    const subtotal = getCartSubtotal();
    // Use the deliveryCharges from context
    const shippingFee = subtotal <= 500 ? deliveryCharges : 0;
    const total = subtotal + shippingFee;

    const handleRemove = (id, size) => {
        const itemKey = `${id}-${size}`;
        setRemovingItems(prev => new Set(prev).add(itemKey));
        setTimeout(() => {
            removeFromCart(id, size);
            setRemovingItems(prev => {
                const next = new Set(prev);
                next.delete(itemKey);
                return next;
            });
        }, 300);
    };

    const changeQty = (id, size, qty) => {
        const parsedQty = Math.max(1, parseInt(qty) || 1);
        updateCartItem(id, size, parsedQty);
    };

    return (
        <div className="min-h-screen bg-[#faf5ff] px-4 py-10 sm:px-10 font-sans">
            <h1 className="text-3xl font-bold text-center text-purple-700 mb-10">Your Shopping Cart</h1>

            {Object.keys(cartItems).length === 0 ? (
                <div className="text-center bg-white p-10 rounded-xl shadow-md max-w-md mx-auto">
                    <h2 className="text-xl font-semibold mb-2">Your cart is empty!</h2>
                    <p className="text-gray-500 mb-4">Start exploring our products and fill it up </p>
                    <Link to="/products">
                        <button className="px-6 py-2 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition">
                            Browse Products
                        </button>
                    </Link>
                </div>
            ) : (
                <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {Object.entries(cartItems).map(([id, sizes]) => {
                            const product = products.find(p => p._id === id);
                            if (!product) return null;

                            // Add a second map here to iterate over sizes
                            return Object.entries(sizes).map(([size, quantity]) => {
                                const itemKey = `${id}-${size}`;
                                const isRemoving = removingItems.has(itemKey);

                                return (
                                    <div
                                        key={itemKey}
                                        className={`bg-white rounded-xl p-5 shadow-md flex items-center justify-between transition-all duration-300 ${
                                            isRemoving ? 'opacity-50 scale-95' : ''
                                        }`}
                                    >
                                        <div className="flex items-center gap-5">
                                            <img
                                                src={product.image[0]}
                                                alt={product.name}
                                                className="w-20 h-20 object-cover rounded-lg shadow"
                                            />
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-800">
                                                    {product.name}
                                                    <span className="text-gray-500 text-sm ml-2">({size})</span>
                                                </h3>
                                                <p className="text-purple-700 font-medium">{currency}{product.price.toFixed(2)}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => changeQty(id, size, quantity - 1)}
                                                disabled={quantity <= 1}
                                                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                                    quantity <= 1
                                                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                        : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                                                }`}
                                            >
                                                <Minus size={16} />
                                            </button>
                                            <span className="w-10 text-center font-medium">{quantity}</span>
                                            <button
                                                onClick={() => changeQty(id, size, quantity + 1)}
                                                className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center justify-center"
                                            >
                                                <Plus size={16} />
                                            </button>
                                        </div>

                                        <div className="text-right">
                                            <p className="text-md font-semibold text-gray-700">
                                                {currency}{(product.price * quantity).toFixed(2)}
                                            </p>
                                            <button
                                                onClick={() => handleRemove(id, size)}
                                                className="text-sm text-red-500 hover:underline mt-1"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                );
                            });
                        })}
                    </div>

                    {/* Totals Section */}
                    <div className="bg-white rounded-xl shadow-md p-6 space-y-4 h-fit">
                        <h2 className="text-xl font-bold text-purple-800">Order Summary</h2>
                        <div className="flex justify-between border-b pb-2">
                            <span>Subtotal</span>
                            <span className="font-medium text-gray-700">{currency}{subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                            <span>Shipping</span>
                            <span className={shippingFee > 0 ? '' : 'text-green-600 font-medium'}>
                                {shippingFee > 0 ? `${currency}${shippingFee.toFixed(2)}` : 'Free'}
                            </span>
                        </div>
                        <div className="flex justify-between text-lg font-bold pt-2">
                            <span>Total</span>
                            <span className="text-purple-700">{currency}{total.toFixed(2)}</span>
                        </div>
                        <Link to="/placeorder">
                            <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                                Proceed to Checkout
                            </button>
                        </Link>
                        <Link to="/products">
                            <button className="w-full text-purple-600 border border-purple-300 py-2 rounded-lg font-medium hover:bg-purple-50 transition">
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;