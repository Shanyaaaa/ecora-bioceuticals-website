import React from "react";
import { assets } from "../assets/assets";

const Add = () => {
  return (
    <div>
      <form className="flex flex-col w-fu;; items-start gap-3">
        <div>
          <p className="mb-2"> UPLOAD IMAGE</p>
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
          <input type="text" placeholder="Type here" required className="w-full max-w-[500px] px-3 py-2" />

        </div>


        <div className="w-full">
          <p className="mb-2">PRODUCT DESCRIPTION</p>
          < textarea type="text" required placeholder="Write Content Here..." className="w-full max-w-[500px] px-3 py-2" />
        </div>

        <div className="flex flex-col sm:flex-row gap-2 w-fu;; sm:gap-8">
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
              <option value="Liver Health">Liver Health</option>
              <option value="Nervine Care">Nervine Care</option>
              <option value="Digestive Health">Digestive Health</option>
              <option value="Joint Support">Joint Support</option>
              <option value="Skin and Coat">Skin and Coat</option>
              <option value="Heart & Brain Health">Heart & Brain Health</option>
              <option value="Weight Management">Weight Management</option>
              <option value="Immune Support">Immune Support</option>
              <option value="Anti-inflammatory">Anti-inflammatory</option>
              <option value="Blood Health">Blood Health</option>
              <option value="Recovery Support">Recovery Support</option>
              <option value="Nutritional Support">Nutritional Support</option>
              <option value="Calcium Support">Calcium Support</option>
              <option value="Bone Health">Bone Health</option>
              <option value="Cognitive Support">Cognitive Support</option>


            </select>
          </div>

          <div>
            <p className="mb-2">Product Price</p>
            <input className="w-full px-3 py-2 sm:w-[120px]" type="number" required placeholder="25" />
          </div>


        </div>




      </form>
    </div>
  );
};

export default Add;
 className="w-full px-3 py-3"