


//FUNCTION FOR ADD PRODUCT
const addProduct = async (req, res) => {
    try{
        const{ name,price,description,category,conditions,bestseller }=req.body;
        const image1 = req.files.image1[0]
        const image2 = req.files.image2[0]
        const image3 = req.files.image3[0]
        const image4 = req.files.image4[0]

        console.log(name,price,description,category,conditions,bestseller )
        console.log(image1, image2, image3, image4)
        
        res.json({})
    } catch (error) {
        res.json({success:false,message:error.message})
}
}


// FUNCTION FOR LIST PRODUCTS
const listProducts = async (req, res) => {
    // try{
    //     const products = await productModel.find({});
    //     res.json({success:true, products})
    // }
    // catch (error){
    //     console.log(error);
    //     res.json({success:false, message: error.message})
    // }
}


// FUNCTION FOR REMOVE PRODUCT
const removeProduct = async (req, res) => {
    // try {
    //     await productModel.findByIdAndDelete(req.body.id)
    //     res.json({ success: true, message: "Product removed"})
    // }
    // catch (error) {
    //     console.log(error);
    //     res.json({ success: false, message: error.message })
    // }
}

// FUNCTION FOR SINGLE PRODUCT INFO
const singleProduct = async (req, res) => {
    // try {
    //     const { productId } = req.body
    //     const product = await productModel.findById(productId)
    //     res.json({success: true, product})
    // }
    // catch (error){
    //     console.log(error)
    //     res.json({success:false, message: error.message})
    // }
}


export { addProduct, listProducts, removeProduct, singleProduct }