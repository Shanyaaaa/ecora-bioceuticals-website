
// // import React, { useState } from 'react';
// // import { assets } from '../assets/assets';
// // import axios from 'axios';
// // import { backendUrl } from '../App';
// // import { toast } from 'react-toastify';

// // const Add = ({ token }) => {
// //   const [images, setImages] = useState([null, null, null, null, null]);
// //   const [name, setName] = useState('');
// //   const [description, setDescription] = useState('');
// //   const [price, setPrice] = useState('');
// //   const [category, setCategory] = useState('Dogs,Cats');
// //   const [subCategory, setSubCategory] = useState([]);
// //   const [conditions, setConditions] = useState([]);
// //   const [sizes, setSizes] = useState('');
// //   const [bestseller, setBestseller] = useState(false);
// //   const [prescriptionRequired, setPrescriptionRequired] = useState(false);
// //   const [additional, setAdditional] = useState([{ label: '', value: '' }]);
// //   const [details, setDetails] = useState([{ title: '', content: [''] }]);

// //   const handleImageChange = (idx, file) => {
// //     const newImages = [...images];
// //     newImages[idx] = file;
// //     setImages(newImages);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const formData = new FormData();
// //       formData.append('name', name);
// //       formData.append('description', description);
// //       formData.append('price', price);
// //       formData.append('category', category);
// //       formData.append('subCategory', JSON.stringify(subCategory));
// //       formData.append('conditions', JSON.stringify(conditions));
// //       formData.append('sizes', JSON.stringify(sizes.split(',').map(s => s.trim())));
// //       formData.append('bestseller', bestseller);
// //       formData.append('prescriptionRequired', prescriptionRequired);
// //       formData.append('additional', JSON.stringify(additional));
// //       formData.append('details', JSON.stringify(details));
// //       images.forEach((img, i) => img && formData.append(`image${i + 1}`, img));

// //       const response = await axios.post(`${backendUrl}/api/product/add`, formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data',
// //           Authorization: `Bearer ${token}`,
// //         },
// //       });

// //       if (response.data.success) {
// //         toast.success(response.data.message);
// //         setName(''); setDescription(''); setPrice('');
// //         setImages([null, null, null, null, null]);
// //         setSubCategory([]); setConditions([]); setSizes('');
// //         setBestseller(false); setPrescriptionRequired(false);
// //         setAdditional([{ label: '', value: '' }]);
// //         setDetails([{ title: '', content: [''] }]);
// //       } else toast.error(response.data.message);
// //     } catch (err) {
// //       toast.error('Failed to add product');
// //       console.error(err);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
// //       <p className="mb-4 text-gray-600">Example: To add "Calcinex Tab 70’s", you will upload 5 images, enter name and description, select "Dogs,Cats" as category, choose subcategories like "Rickets", "Osteoporosis" etc., enter size as "70 Tabs", mark bestseller if needed, and fill additional label-value pairs such as "Weight: 60kg". Under details, create blocks like "Key Benefits" or "Ingredients", each with multiple bullet points as separate content lines.</p>
// //       <form onSubmit={handleSubmit} className="flex flex-col w-full items-start gap-4">
// //         <p>Upload Images</p>
// //         <div className="flex gap-2">
// //           {images.map((img, i) => (
// //             <label key={i}>
// //               <img className="w-20" src={!img ? assets.upload_area : URL.createObjectURL(img)} alt={`img${i}`} />
// //               <input type="file" hidden onChange={e => handleImageChange(i, e.target.files[0])} />
// //             </label>
// //           ))}
// //         </div>

// //         <input className="w-full max-w-[500px] p-2" type="text" placeholder="Product Name" value={name} onChange={e => setName(e.target.value)} required />

// //         <textarea className="w-full max-w-[500px] p-2" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />

// //         <input className="w-full max-w-[200px] p-2" type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} required />

// //         <select className="p-2" value={category} onChange={e => setCategory(e.target.value)}>
// //           <option value="Dogs">Dogs</option>
// //           <option value="Cats">Cats</option>
// //           <option value="Dogs,Cats">Dogs,Cats</option>
// //         </select>

// //         <select multiple className="p-2 h-32" onChange={e => setSubCategory([...e.target.selectedOptions].map(o => o.value))}>
// //           {["Rickets", "Osteoporosis", "Fractures", "Joint Pain", "Skin Issues"].map(opt => <option key={opt} value={opt}>{opt}</option>)}
// //         </select>

// //         <select multiple className="p-2 h-32" onChange={e => setConditions([...e.target.selectedOptions].map(o => o.value))}>
// //           {["Joint Support", "Calcium Support", "Immune Support", "Pain Relief"].map(opt => <option key={opt} value={opt}>{opt}</option>)}
// //         </select>

// //         <input className="w-full max-w-[300px] p-2" type="text" placeholder="Sizes (comma separated)" value={sizes} onChange={e => setSizes(e.target.value)} />

// //         <label><input type="checkbox" checked={bestseller} onChange={() => setBestseller(!bestseller)} /> Bestseller</label>
// //         <label><input type="checkbox" checked={prescriptionRequired} onChange={() => setPrescriptionRequired(!prescriptionRequired)} /> Prescription Required</label>

// //         <div>
// //           <p className="font-semibold">Additional (Label/Value Pairs)</p>
// //           {additional.map((item, i) => (
// //             <div key={i} className="flex gap-2 mb-1">
// //               <input className="p-1" placeholder="Label" value={item.label} onChange={e => {
// //                 const newData = [...additional]; newData[i].label = e.target.value; setAdditional(newData);
// //               }} />
// //               <input className="p-1" placeholder="Value" value={item.value} onChange={e => {
// //                 const newData = [...additional]; newData[i].value = e.target.value; setAdditional(newData);
// //               }} />
// //               <button type="button" onClick={() => setAdditional(additional.filter((_, idx) => idx !== i))}>❌</button>
// //             </div>
// //           ))}
// //           <button type="button" onClick={() => setAdditional([...additional, { label: '', value: '' }])}>+ Add More</button>
// //         </div>

// //         <div className="w-full">
// //           <p className="font-semibold">Details (Title + Content List)</p>
// //           {details.map((block, i) => (
// //             <div key={i} className="mb-4">
// //               <input className="p-1 w-full" placeholder="Title" value={block.title} onChange={e => {
// //                 const updated = [...details]; updated[i].title = e.target.value; setDetails(updated);
// //               }} />
// //               {block.content.map((line, j) => (
// //                 <div key={j} className="flex gap-2 mt-1">
// //                   <input className="p-1 w-full" placeholder="Content line" value={line} onChange={e => {
// //                     const updated = [...details]; updated[i].content[j] = e.target.value; setDetails(updated);
// //                   }} />
// //                   <button type="button" onClick={() => {
// //                     const updated = [...details]; updated[i].content.splice(j, 1); setDetails(updated);
// //                   }}>❌</button>
// //                 </div>
// //               ))}
// //               <button type="button" onClick={() => {
// //                 const updated = [...details]; updated[i].content.push(''); setDetails(updated);
// //               }}>+ Add Line</button>
// //               <button type="button" className="ml-2" onClick={() => setDetails(details.filter((_, idx) => idx !== i))}>Remove Block</button>
// //             </div>
// //           ))}
// //           <button type="button" onClick={() => setDetails([...details, { title: '', content: [''] }])}>+ Add New Block</button>
// //         </div>

// //         <button type="submit" className="px-4 py-2 bg-black text-white mt-4">Add Product</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Add;

// import React, { useState } from 'react';
// import { assets } from '../assets/assets';
// import axios from 'axios';
// import { backendUrl } from '../App';
// import { toast } from 'react-toastify';

// const Add = ({ token }) => {
//   const [images, setImages] = useState([null, null, null, null, null]);
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [category, setCategory] = useState('Dogs,Cats');
//   const [subCategory, setSubCategory] = useState('');
//   const [conditions, setConditions] = useState('');
//   const [sizes, setSizes] = useState('');
//   const [bestseller, setBestseller] = useState(false);
//   const [prescriptionRequired, setPrescriptionRequired] = useState(false);
//   const [additional, setAdditional] = useState([{ label: '', value: '' }]);
//   const [details, setDetails] = useState([{ title: '', content: [''] }]);

//   const handleImageChange = (idx, file) => {
//     const newImages = [...images];
//     newImages[idx] = file;
//     setImages(newImages);
//   };

//   const handleMultipleImageUpload = (files) => {
//     const newImages = [...images];
//     for (let i = 0; i < Math.min(files.length, 5); i++) {
//       newImages[i] = files[i];
//     }
//     setImages(newImages);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append('name', name);
//       formData.append('description', description);
//       formData.append('price', price);
//       formData.append('category', category);
//       // Parse textarea content as comma-separated values
//       formData.append('subCategory', JSON.stringify(subCategory.split(',').map(s => s.trim()).filter(s => s)));
//       formData.append('conditions', JSON.stringify(conditions.split(',').map(s => s.trim()).filter(s => s)));
//       formData.append('sizes', JSON.stringify(sizes.split(',').map(s => s.trim())));
//       formData.append('bestseller', bestseller);
//       formData.append('prescriptionRequired', prescriptionRequired);
//       formData.append('additional', JSON.stringify(additional));
//       formData.append('details', JSON.stringify(details));
//       images.forEach((img, i) => img && formData.append(`image${i + 1}`, img));

//       const response = await axios.post(`${backendUrl}/api/product/add`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (response.data.success) {
//         toast.success(response.data.message);
//         setName(''); setDescription(''); setPrice('');
//         setImages([null, null, null, null, null]);
//         setSubCategory(''); setConditions(''); setSizes('');
//         setBestseller(false); setPrescriptionRequired(false);
//         setAdditional([{ label: '', value: '' }]);
//         setDetails([{ title: '', content: [''] }]);
//       } else toast.error(response.data.message);
//     } catch (err) {
//       toast.error('Failed to add product');
//       console.error(err);
//     }
//   };

//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
//       <p className="mb-4 text-gray-600">Example: To add "Calcinex Tab 70's", you will upload 5 images, enter name and description, select "Dogs,Cats" as category, choose subcategories like "Rickets, Osteoporosis" etc., enter size as "70 Tabs", mark bestseller if needed, and fill additional label-value pairs such as "Weight: 60kg". Under details, create blocks like "Key Benefits" or "Ingredients", each with multiple bullet points as separate content lines.</p>
//       <form onSubmit={handleSubmit} className="flex flex-col w-full items-start gap-4">
//         <div>
          
//           <div className="mb-2  ">
//             <label className="px-1 py-2 bg-blue-300 text-white rounded cursor-pointer">
//               Select All 5 Images at Once
//               <input 
//                 type="file" 
//                 multiple 
//                 hidden 
//                 accept="image/*"
//                 onChange={e => handleMultipleImageUpload(Array.from(e.target.files))} 
//               />
//             </label>
//           </div>
//           <p className="text-sm text-gray-600 mb-2">Or click individual slots to upload one by one:</p>
//           <div className="flex gap-2">
//             {images.map((img, i) => (
//               <label key={i} className="cursor-pointer">
//                 <img className="w-20 h-20 object-cover border border-gray-300" src={!img ? assets.upload_area : URL.createObjectURL(img)} alt={`img${i}`} />
//                 <input type="file" hidden accept="image/*" onChange={e => handleImageChange(i, e.target.files[0])} />
//               </label>
//             ))}
//           </div>
//         </div>

//         <input className="w-full max-w-[500px] p-2 border border-gray-300 rounded" type="text" placeholder="Product Name" value={name} onChange={e => setName(e.target.value)} required />

//         <textarea className="w-full max-w-[500px] p-2 border border-gray-300 rounded" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />

//         <input className="w-full max-w-[200px] p-2 border border-gray-300 rounded" type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} required />

//         <div>
//           <label className="block mb-1 font-semibold">Category</label>
//           <select className="p-2 border border-gray-300 rounded" value={category} onChange={e => setCategory(e.target.value)}>
//             <option value="Dogs">Dogs</option>
//             <option value="Cats">Cats</option>
//             <option value="Dogs,Cats">Dogs,Cats</option>
//           </select>
//         </div>

//         <div>
//           <label className="block mb-1 font-semibold">Sub Categories (comma separated)</label>
//           <textarea 
//             className="w-full max-w-[500px] p-2 border border-gray-300 rounded h-20" 
//             placeholder="Enter subcategories separated by commas (e.g., Rickets, Osteoporosis, Fractures, Joint Pain, Skin Issues)"
//             value={subCategory} 
//             onChange={e => setSubCategory(e.target.value)}
//           />
//         </div>

//         <div>
//           <label className="block mb-1 font-semibold">Conditions (comma separated)</label>
//           <textarea 
//             className="w-full max-w-[500px] p-2 border border-gray-300 rounded h-20" 
//             placeholder="Enter conditions separated by commas (e.g., Joint Support, Calcium Support, Immune Support, Pain Relief)"
//             value={conditions} 
//             onChange={e => setConditions(e.target.value)}
//           />
//         </div>

//         <div>
//           <label className="block mb-1 font-semibold">Sizes (comma separated)</label>
//           <input className="w-full max-w-[300px] p-2 border border-gray-300 rounded" type="text" placeholder="Sizes (comma separated)" value={sizes} onChange={e => setSizes(e.target.value)} />
//         </div>

//         <label className="flex items-center gap-2">
//           <input type="checkbox" checked={bestseller} onChange={() => setBestseller(!bestseller)} /> 
//           Bestseller
//         </label>
//         <label className="flex items-center gap-2">
//           <input type="checkbox" checked={prescriptionRequired} onChange={() => setPrescriptionRequired(!prescriptionRequired)} /> 
//           Prescription Required
//         </label>

//         <div>
//           <p className="font-semibold mb-2">Additional (Label/Value Pairs)</p>
//           {additional.map((item, i) => (
//             <div key={i} className="flex gap-2 mb-2">
//               <input className="p-2 border border-gray-300 rounded" placeholder="Label" value={item.label} onChange={e => {
//                 const newData = [...additional]; newData[i].label = e.target.value; setAdditional(newData);
//               }} />
//               <input className="p-2 border border-gray-300 rounded" placeholder="Value" value={item.value} onChange={e => {
//                 const newData = [...additional]; newData[i].value = e.target.value; setAdditional(newData);
//               }} />
//               <button type="button" className="px-2 py-1 bg-red-500 text-white rounded" onClick={() => setAdditional(additional.filter((_, idx) => idx !== i))}>❌</button>
//             </div>
//           ))}
//           <button type="button" className="px-4 py-2 bg-green-500 text-white rounded" onClick={() => setAdditional([...additional, { label: '', value: '' }])}>+ Add More</button>
//         </div>

//         <div className="w-full">
//           <p className="font-semibold mb-2">Details (Title + Content List)</p>
//           {details.map((block, i) => (
//             <div key={i} className="mb-4 p-4 border border-gray-300 rounded">
//               <input className="p-2 w-full mb-2 border border-gray-300 rounded" placeholder="Title" value={block.title} onChange={e => {
//                 const updated = [...details]; updated[i].title = e.target.value; setDetails(updated);
//               }} />
//               {block.content.map((line, j) => (
//                 <div key={j} className="flex gap-2 mt-1">
//                   <input className="p-2 w-full border border-gray-300 rounded" placeholder="Content line" value={line} onChange={e => {
//                     const updated = [...details]; updated[i].content[j] = e.target.value; setDetails(updated);
//                   }} />
//                   <button type="button" className="px-2 py-1 bg-red-500 text-white rounded" onClick={() => {
//                     const updated = [...details]; updated[i].content.splice(j, 1); setDetails(updated);
//                   }}>❌</button>
//                 </div>
//               ))}
//               <div className="mt-2">
//                 <button type="button" className="px-3 py-1 bg-blue-500 text-white rounded mr-2" onClick={() => {
//                   const updated = [...details]; updated[i].content.push(''); setDetails(updated);
//                 }}>+ Add Line</button>
//                 <button type="button" className="px-3 py-1 bg-red-500 text-white rounded" onClick={() => setDetails(details.filter((_, idx) => idx !== i))}>Remove Block</button>
//               </div>
//             </div>
//           ))}
//           <button type="button" className="px-4 py-2 bg-green-500 text-white rounded" onClick={() => setDetails([...details, { title: '', content: [''] }])}>+ Add New Block</button>
//         </div>

//         <button type="submit" className="px-6 py-3 bg-black text-white rounded mt-4 hover:bg-gray-800">Add Product</button>
//       </form>
//     </div>
//   );
// };

// export default Add;

import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({ token }) => {
  const [images, setImages] = useState([null, null, null, null, null]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Dogs,Cats');
  const [subCategory, setSubCategory] = useState('');
  const [conditions, setConditions] = useState('');
  const [sizes, setSizes] = useState('');
  const [bestseller, setBestseller] = useState(false);
  const [prescriptionRequired, setPrescriptionRequired] = useState(false);
  const [additional, setAdditional] = useState([{ label: '', value: '' }]);
  const [details, setDetails] = useState([{ title: '', content: [''] }]);

  const handleImageChange = (idx, file) => {
    const newImages = [...images];
    newImages[idx] = file;
    setImages(newImages);
  };

  const handleMultipleImageUpload = (files) => {
    const newImages = [...images];
    for (let i = 0; i < Math.min(files.length, 5); i++) {
      newImages[i] = files[i];
    }
    setImages(newImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('category', category);
      // Parse textarea content as comma-separated values
      formData.append('subCategory', JSON.stringify(subCategory.split(',').map(s => s.trim()).filter(s => s)));
      formData.append('conditions', JSON.stringify(conditions.split(',').map(s => s.trim()).filter(s => s)));
      formData.append('sizes', JSON.stringify(sizes.split(',').map(s => s.trim())));
      formData.append('bestseller', bestseller);
      formData.append('prescriptionRequired', prescriptionRequired);
      formData.append('additional', JSON.stringify(additional));
      formData.append('details', JSON.stringify(details));
      images.forEach((img, i) => img && formData.append(`image${i + 1}`, img));

      const response = await axios.post(`${backendUrl}/api/product/add`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        toast.success(response.data.message);
        setName(''); setDescription(''); setPrice('');
        setImages([null, null, null, null, null]);
        setSubCategory(''); setConditions(''); setSizes('');
        setBestseller(false); setPrescriptionRequired(false);
        setAdditional([{ label: '', value: '' }]);
        setDetails([{ title: '', content: [''] }]);
      } else toast.error(response.data.message);
    } catch (err) {
      toast.error('Failed to add product');
      console.error(err);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
      <p className="mb-4 text-gray-600">Example: To add "Calcinex Tab 70's", you will upload 5 images, enter name and description, select "Dogs,Cats" as category, choose subcategories like "Rickets, Osteoporosis" etc., enter size as "70 Tabs", mark bestseller if needed, and fill additional label-value pairs such as "Weight: 60kg". Under details, create blocks like "Key Benefits" or "Ingredients", each with multiple bullet points where each line represents a separate bullet point.</p>
      <form onSubmit={handleSubmit} className="flex flex-col w-full items-start gap-4">
        <div>
          
          <div className="mb-2">
            <label className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
              Select All 5 Images at Once
              <input 
                type="file" 
                multiple 
                hidden 
                accept="image/*"
                onChange={e => handleMultipleImageUpload(Array.from(e.target.files))} 
              />
            </label>
          </div>
          <p className="text-m text-gray-600 mb-2 font-bold">Or click individual slots to upload one by one:</p>
          <div className="flex gap-2">
            {images.map((img, i) => (
              <label key={i} className="cursor-pointer">
                <img className="w-20 h-20 object-cover border border-gray-300" src={!img ? assets.upload_area : URL.createObjectURL(img)} alt={`img${i}`} />
                <input type="file" hidden accept="image/*" onChange={e => handleImageChange(i, e.target.files[0])} />
              </label>
            ))}
          </div>
        </div>

        <input className="w-full max-w-[500px] p-2 border border-gray-300 rounded" type="text" placeholder="Product Name" value={name} onChange={e => setName(e.target.value)} required />

        <textarea className="w-full max-w-[500px] p-2 border border-gray-300 rounded" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />

        <input className="w-full max-w-[200px] p-2 border border-gray-300 rounded" type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} required />

        <div>
          <label className="block mb-1 font-semibold">Category</label>
          <select className="p-2 border border-gray-300 rounded" value={category} onChange={e => setCategory(e.target.value)}>
            <option value="Dogs">Dogs</option>
            <option value="Cats">Cats</option>
            <option value="Dogs,Cats">Dogs,Cats</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Sub Categories (comma separated)</label>
          <textarea 
            className="w-full max-w-[500px] p-2 border border-gray-300 rounded h-20" 
            placeholder="Enter subcategories separated by commas (e.g., Rickets, Osteoporosis, Fractures, Joint Pain, Skin Issues)"
            value={subCategory} 
            onChange={e => setSubCategory(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Conditions (comma separated)</label>
          <textarea 
            className="w-full max-w-[500px] p-2 border border-gray-300 rounded h-20" 
            placeholder="Enter conditions separated by commas (e.g., Joint Support, Calcium Support, Immune Support, Pain Relief)"
            value={conditions} 
            onChange={e => setConditions(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Sizes (comma separated)</label>
          <input className="w-full max-w-[300px] p-2 border border-gray-300 rounded" type="text" placeholder="Sizes (comma separated)" value={sizes} onChange={e => setSizes(e.target.value)} />
        </div>

        <label className="flex items-center gap-2">
          <input type="checkbox" checked={bestseller} onChange={() => setBestseller(!bestseller)} /> 
          Bestseller
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={prescriptionRequired} onChange={() => setPrescriptionRequired(!prescriptionRequired)} /> 
          Prescription Required
        </label>

        <div>
          <p className="font-semibold mb-2">Additional (Label/Value Pairs)</p>
          {additional.map((item, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <input className="p-2 border border-gray-300 rounded" placeholder="Label" value={item.label} onChange={e => {
                const newData = [...additional]; newData[i].label = e.target.value; setAdditional(newData);
              }} />
              <input className="p-2 border border-gray-300 rounded" placeholder="Value" value={item.value} onChange={e => {
                const newData = [...additional]; newData[i].value = e.target.value; setAdditional(newData);
              }} />
              <button type="button" className="px-2 py-1 bg-red-500 text-white rounded" onClick={() => setAdditional(additional.filter((_, idx) => idx !== i))}>❌</button>
            </div>
          ))}
          <button type="button" className="px-4 py-2 bg-green-500 text-white rounded" onClick={() => setAdditional([...additional, { label: '', value: '' }])}>+ Add More</button>
        </div>

        <div className="w-full">
          <p className="font-semibold mb-2">Details (Title + Bullet Point Content)</p>
          {details.map((block, i) => (
            <div key={i} className="mb-4 p-4 border border-gray-300 rounded">
              <input className="p-2 w-full mb-2 border border-gray-300 rounded" placeholder="Title (e.g., Key Benefits, Ingredients, Usage Instructions)" value={block.title} onChange={e => {
                const updated = [...details]; updated[i].title = e.target.value; setDetails(updated);
              }} />
              <p className="text-sm text-gray-600 mb-2">Add bullet points (each line will be displayed as a bullet point):</p>
              {block.content.map((line, j) => (
                <div key={j} className="flex gap-2 mt-1 items-center">
                  <span className="text-lg">•</span>
                  <input className="p-2 w-full border border-gray-300 rounded" placeholder="Enter bullet point content" value={line} onChange={e => {
                    const updated = [...details]; updated[i].content[j] = e.target.value; setDetails(updated);
                  }} />
                  <button type="button" className="px-2 py-1 bg-red-500 text-white rounded" onClick={() => {
                    const updated = [...details]; updated[i].content.splice(j, 1); setDetails(updated);
                  }}>❌</button>
                </div>
              ))}
              <div className="mt-2">
                <button type="button" className="px-3 py-1 bg-blue-500 text-white rounded mr-2" onClick={() => {
                  const updated = [...details]; updated[i].content.push(''); setDetails(updated);
                }}>+ Add Bullet Point</button>
                <button type="button" className="px-3 py-1 bg-red-500 text-white rounded" onClick={() => setDetails(details.filter((_, idx) => idx !== i))}>Remove Block</button>
              </div>
            </div>
          ))}
          <button type="button" className="px-4 py-2 bg-green-500 text-white rounded" onClick={() => setDetails([...details, { title: '', content: [''] }])}>+ Add New Detail Block</button>
        </div>

        <button type="submit" className="px-6 py-3 bg-black text-white rounded mt-4 hover:bg-gray-800">Add Product</button>
      </form>
    </div>
  );
};

export default Add;