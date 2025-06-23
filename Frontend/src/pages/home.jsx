import React from 'react'

const home = () => {
  return (
    <div>
      
    </div>
  )
}

export default home











// import React from 'react';

// // --- Image Placeholders ---
// // Replacing local imports with placeholder URLs to resolve "Could not resolve" errors.
// // You should replace these with your actual hosted image URLs.
// const placeholderImages = {
//   aminopetHome: 'https://placehold.co/192x192/FF0000/FFFFFF?text=Aminopet+Home',
//   artimarinHome: 'https://placehold.co/192x192/00FF00/000000?text=Artimarin+Home',
//   calcinexHome: 'https://placehold.co/192x192/0000FF/FFFFFF?text=Calcinex+Home',
//   cardComponent: 'https://placehold.co/192x192/FFFF00/000000?text=Card+Component',
//   ecoraNewLogo: 'https://placehold.co/192x192/FF00FF/FFFFFF?text=ECORA+Logo',
//   nanoBackHome: 'https://placehold.co/192x192/00FFFF/000000?text=Nano+Back',
//   nanoFrontHome: 'https://placehold.co/192x192/C0C0C0/000000?text=Nano+Front',
//   petNeuronHome: 'https://placehold.co/192x192/800000/FFFFFF?text=Pet+Neuron',
//   sameLivBackHome: 'https://placehold.co/192x192/808000/FFFFFF?text=SameLiv+Back',
//   sameLivFrontHome: 'https://placehold.co/192x192/800080/FFFFFF?text=SameLiv+Front',
//   thromboBackHome: 'https://placehold.co/192x192/008080/FFFFFF?text=Thrombo+Back',
//   thromboFrontHome: 'https://placehold.co/192x192/808080/FFFFFF?text=Thrombo+Front',
// };

// // ProductCard Component: Displays individual product details with interactive effects
// const ProductCard = ({ product }) => {
//   const [isHovered, setIsHovered] = React.useState(false);

//   return (
//     <div
//       className="relative flex flex-col items-center p-6 bg-white rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
//       style={{ fontFamily: 'Inter, sans-serif' }} // Apply Inter font
//     >
//       {/* Product Image Container with 3D Flip Effect */}
//       <div 
//         className="relative w-48 h-48 perspective-1000" // perspective-1000 for 3D effect
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         {/* Front Image */}
//         <img
//           src={product.imageFront}
//           alt={product.name}
//           className={`absolute inset-0 w-full h-full object-contain rounded-lg backface-hidden transition-transform duration-500 ease-in-out ${
//             isHovered ? 'rotateY-180' : 'rotateY-0'
//           }`}
//         />
//         {/* Back Image (placeholder or actual back image) */}
//         {/* Replace with your actual back image for a real product flip */}
//         <img
//           src={product.imageBack || 'https://placehold.co/192x192/ADD8E6/000000?text=Back+View'} // Placeholder for back image
//           alt={`${product.name} Back View`}
//           className={`absolute inset-0 w-full h-full object-contain rounded-lg backface-hidden transition-transform duration-500 ease-in-out ${
//             isHovered ? 'rotateY-0' : 'rotateY-180'
//           }`}
//           style={{ transform: isHovered ? 'rotateY(0deg)' : 'rotateY(180deg)' }} // Ensure back image starts rotated
//         />
//       </div>

//       {/* Product Details */}
//       <h3 className="mt-4 text-xl font-semibold text-gray-800 text-center">
//         {product.name}
//       </h3>
//       <p className="mt-2 text-2xl font-bold text-indigo-700">
//         ₹{product.price.toLocaleString()}
//       </p>

//       {/* Star Rating */}
//       <div className="flex mt-2">
//         {[...Array(5)].map((_, i) => (
//           <svg
//             key={i}
//             className={`w-5 h-5 ${
//               i < product.rating ? 'text-yellow-400' : 'text-gray-300'
//             }`}
//             fill="currentColor"
//             viewBox="0 0 20 20"
//           >
//             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
//           </svg>
//         ))}
//       </div>

//       {/* Shop Now Button with Hover Effect */}
//       <button className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out active:scale-95">
//         SHOP NOW
//       </button>
//     </div>
//   );
// };

// // Main App Component
// function App() {
//   // Sample product data. Replace with your actual product data.
//   // The `imageFront` corresponds to the assets imported earlier.
//   // Add `imageBack` property if you have a second image for the flip effect.
//   const products = [
//     {
//       id: 1,
//       name: 'MPS Nanocurcumin',
//       price: 1250.00,
//       rating: 5,
//       imageFront: placeholderImages.aminopetHome, 
//       imageBack: 'https://placehold.co/192x192/FFD700/000000?text=Nano+Curcumin+Back' // Example back image
//     },
//     {
//       id: 2,
//       name: 'Thrombo-Fe Syrup',
//       price: 380.00,
//       rating: 4,
//       imageFront: placeholderImages.artimarinHome, 
//       imageBack: 'https://placehold.co/192x192/9ACD32/000000?text=Thrombo-Fe+Back'
//     },
//     {
//       id: 3,
//       name: 'SAMe-Liv Syrup',
//       price: 400.00,
//       rating: 5,
//       imageFront: placeholderImages.calcinexHome, 
//       imageBack: 'https://placehold.co/192x192/87CEEB/000000?text=SAMe-Liv+Back'
//     },
//     {
//       id: 4,
//       name: 'SAMe-Liv Elite',
//       price: 750.00,
//       rating: 4,
//       imageFront: placeholderImages.cardComponent, 
//       imageBack: 'https://placehold.co/192x192/DA70D6/000000?text=SAMe-Liv+Elite+Back'
//     },
//     // Add more products as needed, referencing images from the assets array.
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 py-12" style={{ fontFamily: 'Inter, sans-serif' }}>
//       <div className="container mx-auto px-4">
//         <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12 animate-fade-in-down">
//           Best Selling Products
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
//           {products.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
