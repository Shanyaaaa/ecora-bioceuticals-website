// import React, { useContext } from 'react';
// import { ShopContext } from '../context/ShopContext'; // assuming correct path

// const SearchBar = () => {
//   const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

//   return showSearch ? (
//     <div className='border-t border-b bg-gray-50 text-center'>
//       <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4'>
//         <input 
//           type='text' 
//           placeholder='Search' 
//           className='flex-1 w-full outline-none text-gray-700'
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <button 
//           className='bg-green-500 text-white px-4 py-2 rounded-full ml-2'
//           onClick={() => setShowSearch(false)}
//         >
//           Search
//         </button>
//       </div>
//     </div>
//   ) : null;
// };

// export default SearchBar;
