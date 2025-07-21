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
  const [category, setCategory] = useState('Dogs');
  const [subCategory, setSubCategory] = useState('');
  const [conditions, setConditions] = useState([]);
  const [bestseller, setBestseller] = useState(false);
  const [prescriptionRequired, setPrescriptionRequired] = useState(false);
  const [sizes, setSizes] = useState([]);
  const [additional, setAdditional] = useState([{ label: '', value: '' }]);
  const [details, setDetails] = useState([{ title: '', content: '' }]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('category', category);
      formData.append('subCategory', subCategory);
      formData.append('conditions', JSON.stringify(conditions));
      formData.append('sizes', JSON.stringify(sizes));
      formData.append('bestseller', bestseller);
      formData.append('prescriptionRequired', prescriptionRequired);
      formData.append('additional', JSON.stringify(additional));
      formData.append('details', JSON.stringify(details));

      [image1, image2, image3, image4, image5].forEach((img, idx) => {
        if (img) formData.append(`image${idx + 1}`, img);
      });

      const response = await axios.post(`${backendUrl}/api/product/add`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        toast.success(response.data.message);
        resetForm();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("❌ Axios POST error:", error);
      toast.error("Failed to add product");
    }
  };

  const resetForm = () => {
    setName('');
    setDescription('');
    setPrice('');
    setImage1(false);
    setImage2(false);
    setImage3(false);
    setImage4(false);
    setImage5(false);
    setCategory('Dogs');
    setSubCategory('');
    setConditions([]);
    setSizes([]);
    setBestseller(false);
    setPrescriptionRequired(false);
    setAdditional([{ label: '', value: '' }]);
    setDetails([{ title: '', content: '' }]);
  };

  const handleMultiSelect = (e, setter) => {
    const selected = Array.from(e.target.selectedOptions, option => option.value);
    setter(selected);
  };

  const handleArrayInput = (arr, index, key, value, setter) => {
    const copy = [...arr];
    copy[index][key] = value;
    setter(copy);
  };

  const addField = (setter, current, defaultObj) => {
    setter([...current, defaultObj]);
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3">
      <p className="mb-2">UPLOAD IMAGE</p>
      <div className="flex gap-2">
        {[image1, image2, image3, image4, image5].map((img, idx) => (
          <label key={idx} htmlFor={`image${idx + 1}`}>
            <img className="w-20" src={!img ? assets.upload_area : URL.createObjectURL(img)} alt={`image${idx + 1}`} />
            <input type="file" id={`image${idx + 1}`} hidden onChange={(e) => {
              [setImage1, setImage2, setImage3, setImage4, setImage5][idx](e.target.files[0]);
            }} />
          </label>
        ))}
      </div>

      <input type="text" placeholder="Product Name" className="w-full px-3 py-2" value={name} onChange={(e) => setName(e.target.value)} required />
      <textarea placeholder="Description" className="w-full px-3 py-2" value={description} onChange={(e) => setDescription(e.target.value)} required />

      <input type="number" placeholder="Price" className="w-full px-3 py-2" value={price} onChange={(e) => setPrice(e.target.value)} required />

      <select className="w-full px-3 py-2" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Dogs">Dogs</option>
        <option value="Cats">Cats</option>
        <option value="Dogs,Cats">Dogs,Cats</option>
      </select>

      <input type="text" placeholder="Subcategory" className="w-full px-3 py-2" value={subCategory} onChange={(e) => setSubCategory(e.target.value)} />

      <select multiple className="w-full px-3 py-2 h-48" value={conditions} onChange={(e) => handleMultiSelect(e, setConditions)}>
        {/* Your conditions here */}
        {[
          "Nervine Care", "Joint Support", "Digestive Health", "Calcium Support", "Liver Health", "Gut Health",
          "Skin and Coat", "Immune Support", "Cardiovascular Health", "Deworming", "Hip Support", "Allergy Relief",
          "Cancer Support", "Pain Relief", "Obesity Support", "Lung Health", "Urinary Tract Support", "Multivitamin Support",
          "Kidney Support", "Eye Health", "Brain Health", "Pancreas Health", "Healing", "Blood Health",
          "Growth and Development", "Coprophagia Support", "Bacterial Infection", "Antibiotic Therapy"
        ].map(cond => <option key={cond} value={cond}>{cond}</option>)}
      </select>

      <input type="text" placeholder="Sizes (comma separated)" className="w-full px-3 py-2"
        onChange={(e) => setSizes(e.target.value.split(',').map(s => s.trim()))}
      />

      <label>
        <input type="checkbox" checked={bestseller} onChange={() => setBestseller(!bestseller)} />
        Bestseller
      </label>

      <label>
        <input type="checkbox" checked={prescriptionRequired} onChange={() => setPrescriptionRequired(!prescriptionRequired)} />
        Prescription Required
      </label>

      <div className="w-full">
        <p>Additional Info (Label / Value)</p>
        {additional.map((item, idx) => (
          <div key={idx} className="flex gap-2 mb-2">
            <input placeholder="Label" className="px-2 py-1" value={item.label}
              onChange={(e) => handleArrayInput(additional, idx, 'label', e.target.value, setAdditional)} />
            <input placeholder="Value" className="px-2 py-1" value={item.value}
              onChange={(e) => handleArrayInput(additional, idx, 'value', e.target.value, setAdditional)} />
          </div>
        ))}
        <button type="button" onClick={() => addField(setAdditional, additional, { label: '', value: '' })}>
          + Add Field
        </button>
      </div>

      <div className="w-full">
        <p>Details (Title / Content)</p>
        {details.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-2 mb-2">
            <input placeholder="Title" className="px-2 py-1" value={item.title}
              onChange={(e) => handleArrayInput(details, idx, 'title', e.target.value, setDetails)} />
            <textarea placeholder="Content" className="px-2 py-1" value={item.content}
              onChange={(e) => handleArrayInput(details, idx, 'content', e.target.value, setDetails)} />
          </div>
        ))}
        <button type="button" onClick={() => addField(setDetails, details, { title: '', content: '' })}>
          + Add Detail
        </button>
      </div>

      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">ADD</button>
    </form>
  );
};

export default Add;
