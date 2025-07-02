import {v2 as cloudinary} from 'cloudinary';
import productModel from '../models/productModel.js'


//FUNCTION FOR ADD PRODUCT
const addProduct = async (req, res) => {
    try{
        const{ name,price,description,category,conditions,bestseller }=req.body;
        const image1 = req.files?.image1?.[0];
        const image2 = req.files?.image2?.[0];
        const image3 = req.files?.image3?.[0];
        const image4 = req.files?.image4?.[0];
        const image5 = req.files?.image5?.[0];

       const images = [image1, image2, image3, image4, image5].filter((item) => item !== undefined);

       let imagesUrl = await Promise.all(
        images.map(async (item) => {
            let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'});
            return result.secure_url;
        })
    )

        const productData = {
            name,
            price:Number(price),
            description,
            category,
            conditions,
            bestseller: bestseller == 'true'? true:false,
            images: imagesUrl,
            date: Date.now()
        }
        
        const product = new productModel(productData);
        await product.save();

        res.json({success:true, message:"Product added"})
    } catch (error) {
        res.json({success:false,message:error.message})
}
}


// FUNCTION FOR LIST PRODUCTS
const listProducts = async(req,res) => {
   
    try {
        const products = await productModel.find({});
        res.json({success:true,products})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}



// FUNCTION FOR REMOVE PRODUCT
const removeProduct = async(req,res) => {
   
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Product Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

// FUNCTION FOR SINGLE PRODUCT INFO
const singleProduct = async(req,res) =>{
  try {
    const {productId} = req.body
    const product = await productModel.findById(productId)
    res.json({success:true,product})
  } catch (error) {
    console.log(error);
        res.json({success:false,message:error.message})
  }
}


export { addProduct, listProducts, removeProduct, singleProduct }