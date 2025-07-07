import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [image5, setImage5] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Dogs,Cats');
  const [conditions, setConditions] = useState([]);
  const [bestseller, setBestseller] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('category', category);
      formData.append('conditions', JSON.stringify(conditions));
      formData.append('bestseller', bestseller);

      image1 && formData.append('image1', image1);
      image2 && formData.append('image2', image2);
      image3 && formData.append('image3', image3);
      image4 && formData.append('image4', image4);
      image5 && formData.append('image5', image5);

      // console.log('backendUrl:', backendUrl);
      // const response = await axios.post(`${backendUrl}/api/product/add`, formData, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //     token
      //   }
      // });

      console.log("Submitting with token:", token);


      const response = await axios.post(`${backendUrl}/api/product/add`, formData, {
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${token}`, // ✅ CORRECT WAY
  }
});


      if (response.data.success) {
        toast.success(response.data.message);
        setName('');
        setDescription('');
        setPrice('');
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setImage5(false);
        setConditions([]);
        setBestseller(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("❌ Axios POST error:", error);
      if (error.response) console.log("👉 Backend response:", error.response.data);
      else if (error.request) console.log("👉 Request made but no response:", error.request);
      else console.log("👉 Error:", error.message);
      toast.error("Failed to add product");
    }
  };

  const handleMultiSelect = (e) => {
    const selected = Array.from(e.target.selectedOptions, option => option.value);
    setConditions(selected);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3">
        <p className="mb-2">UPLOAD IMAGE</p>
        <div className="flex gap-2">
          {[image1, image2, image3, image4, image5].map((img, idx) => (
            <label key={idx} htmlFor={`image${idx + 1}`}>
              <img className="w-20" src={!img ? assets.upload_area : URL.createObjectURL(img)} alt={`image${idx + 1}`} />
              <input type="file" id={`image${idx + 1}`} hidden onChange={(e) => {
                const setters = [setImage1, setImage2, setImage3, setImage4, setImage5];
                setters[idx](e.target.files[0]);
              }} />
            </label>
          ))}
        </div>

        <div className="w-full">
          <p>Product Name</p>
          <input type="text" required className="w-full max-w-[500px] px-3 py-2" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="w-full">
          <p className="mb-2">Product Description</p>
          <textarea required className="w-full max-w-[500px] px-3 py-2" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>

        <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
          <div>
            <p className="mb-2">Product Category</p>
            <select className="w-full px-3 py-3" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="Dogs">Dogs</option>
              <option value="Cats">Cats</option>
              <option value="Dogs,Cats">Cats,Dogs</option>
            </select>
          </div>

          <div>
            <p className="mb-2">Conditions (Ctrl/Cmd + click for multiple)</p>
            <select multiple className="w-full px-3 py-3 h-48" onChange={handleMultiSelect} value={conditions}>
              {[
                "Nervine Care", "Joint Support", "Digestive Health", "Calcium Support", "Liver Health", "Gut Health",
                "Skin and Coat", "Immune Support", "Cardiovascular Health", "Deworming", "Hip Support", "Allergy Relief",
                "Cancer Support", "Pain Relief", "Obesity Support", "Lung Health", "Urinary Tract Support", "Multivitamin Support",
                "Kidney Support", "Eye Health", "Brain Health", "Pancreas Health", "Healing", "Blood Health",
                "Growth and Development", "Coprophagia Support", "Bacterial Infection", "Antibiotic Therapy"
              ].map(cond => <option key={cond} value={cond}>{cond}</option>)}
            </select>
          </div>

          <div>
            <p className="mb-2">Product Price</p>
            <input type="number" className="w-full px-3 py-2 sm:w-[120px]" required value={price} onChange={(e) => setPrice(e.target.value)} />
            <div className="flex gap-2 mx-2 mt-2">
              <input type="checkbox" id="bestseller" checked={bestseller} onChange={() => setBestseller(!bestseller)} />
              <label htmlFor="bestseller">ADD TO BESTSELLER</label>
            </div>
          </div>
        </div>

        <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">ADD</button>
      </form>
    </div>
  );
};

export default Add;
