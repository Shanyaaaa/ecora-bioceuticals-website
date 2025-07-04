import React from "react";
import { assets } from "../assets/assets";

const Add = () => {
  return (
    <div>
      <form className="flex flex-col w-full items-start gap-3">
        <div>
          <p className="mb-2">UPLOAD IMAGE</p>
        </div>

        <div className="flex gap-2">
          <label htmlFor="image1">
            <img className="w-20" src={assets.upload_area} alt="image1" />
            <input type="file" id="image1" hidden />
          </label>

          <label htmlFor="image2">
            <img className="w-20" src={assets.upload_area} alt="image2" />
            <input type="file" id="image2" hidden />
          </label>

          <label htmlFor="image3">
            <img className="w-20" src={assets.upload_area} alt="image3" />
            <input type="file" id="image3" hidden />
          </label>

          <label htmlFor="image4">
            <img className="w-20" src={assets.upload_area} alt="image4" />
            <input type="file" id="image4" hidden />
          </label>

          <label htmlFor="image5">
            <img className="w-20" src={assets.upload_area} alt="image5" />
            <input type="file" id="image5" hidden />
          </label>
        </div>

        <div className="w-full">
          <p>PRODUCT NAME</p>
          <input
            type="text"
            placeholder="Type here"
            required
            className="w-full max-w-[500px] px-3 py-2"
          />
        </div>

        <div className="w-full">
          <p className="mb-2">PRODUCT DESCRIPTION</p>
          <textarea
            type="text"
            required
            placeholder="Write Content Here..."
            className="w-full max-w-[500px] px-3 py-2"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
          <div>
            <p className="mb-2">PRODUCT CATEGORY</p>
            <select className="w-full px-3 py-3">
              <option value="Dogs">Dogs</option>
              <option value="Cats">Cats</option>
              <option value="Dogs,Cats">Dogs and Cats</option>
            </select>
          </div>

          <div>
            <p className="mb-2">CONDITIONS</p>
            <select className="w-full px-3 py-3">
              <option value="Nervine Care">Nervine Care</option>
              <option value="Joint Support">Joint Support</option>
              <option value="Digestive Health">Digestive Health</option>
              <option value="Calcium Support">Calcium Support</option>
              <option value="Liver Health">Liver Health</option>
              <option value="Gut Health">Gut Health</option>
              <option value="Skin and Coat">Skin and Coat</option>
              <option value="Immune Support">Immune Support</option>
              <option value="Cardiovascular Health">Cardiovascular Health</option>
              <option value="Deworming">Deworming</option>
              <option value="Hip Support">Hip Support</option>
              <option value="Allergy Relief">Allergy Relief</option>
              <option value="Cancer Support">Cancer Support</option>
              <option value="Pain Relief">Pain Relief</option>
              <option value="Obesity Support">Obesity Support</option>
              <option value="Lung Health">Lung Health</option>
              <option value="Urinary Tract Support">Urinary Tract Support</option>
              <option value="Multivitamin Support">Multivitamin Support</option>
              <option value="Kidney Support">Kidney Support</option>
              <option value="Eye Health">Eye Health</option>
              <option value="Brain Health">Brain Health</option>
              <option value="Pancreas Health">Pancreas Health</option>
              <option value="Healing">Healing</option>
              <option value="Blood Health">Blood Health</option>
              <option value="Growth and Development">Growth and Development</option>
              <option value="Coprophagia Support">Coprophagia Support</option>
              <option value="Bacterial Infection">Bacterial Infection</option>
              <option value="Antibiotic Therapy">Antibiotic Therapy</option>
            </select>

            {/* ✅ Moved outside the select to fix hydration error */}
            <div className="flex gap-2 mx-2 mt-2">
              <input type="checkbox" id="bestseller" />
              <label htmlFor="bestseller">ADD TO BESTSELLER</label>
            </div>
          </div>

          <div>
            <p className="mb-2">Product Price</p>
            <input
              className="w-full px-3 py-2 sm:w-[120px]"
              type="number"
              required
              placeholder="25"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Add;
