// // controllers/cartController.js
// import userModel from "../models/userModel.js";

// // Consolidate add and update logic into a single function
// const setCart = async (req, res) => {
//     try {
//         const userId = req.userId; // Get userId securely from the auth middleware
//         const { itemId,  quantity } = req.body;

//         const userData = await userModel.findById(userId);
//         let cartData = userData.cartData || {};
        
//         if (!cartData[itemId]) {
//             cartData[itemId] = {};
//         }

//         if (quantity > 0) {
//             cartData[itemId][size] = quantity;
//         } else {
//             // Remove item from cart if quantity is 0 or less
//             if(cartData[itemId]){
//                  delete cartData[itemId][size];
//             }
//             if(Object.keys(cartData[itemId]).length === 0){
//                 delete cartData[itemId];
//             }
//         }

//         await userModel.findByIdAndUpdate(userId, { cartData });
//         res.json({ success: true, message: "Cart updated successfully" });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Failed to update cart" });
//     }
// };

// // Get user cart data
// const getUserCart = async (req, res) => {
//     try {
//         const userId = req.userId; // Get userId securely from the auth middleware
//         const userData = await userModel.findById(userId);
//         let cartData = userData.cartData || {};
//         res.json({
//             success: true,
//             cartData: cartData,
//             message: "Cart Data Received",
//         });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Failed to get cart data" });
//     }
// };

// export { setCart, getUserCart };

// controllers/cartController.js
// import userModel from "../models/userModel.js";

// // Add/Update cart item
// const setCart = async (req, res) => {
//   try {
//     const userId = req.userId; // from auth middleware
//     const { itemId, quantity } = req.body;

//     const userData = await userModel.findById(userId);
//     let cartData = userData.cartData || {};

//     if (quantity > 0) {
//       // Set or update quantity
//       cartData[itemId] = quantity;
//     } else {
//       // Remove item if quantity is 0 or less
//       delete cartData[itemId];
//     }

//     await userModel.findByIdAndUpdate(userId, { cartData });
//     res.json({ success: true, message: "Cart updated successfully" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Failed to update cart" });
//   }
// };

// // Get user cart data
// const getUserCart = async (req, res) => {
//   try {
//     const userId = req.userId; // from auth middleware
//     const userData = await userModel.findById(userId);
//     let cartData = userData.cartData || {};
//     res.json({
//       success: true,
//       cartData,
//       message: "Cart Data Received",
//     });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Failed to get cart data" });
//   }
// };

// export { setCart, getUserCart };


// controllers/cartController.js
import userModel from "../models/userModel.js";

// Consolidate add and update logic into a single function
const setCart = async (req, res) => {
    try {
        const userId = req.userId; // Get userId securely from the auth middleware
        const { itemId, size, quantity } = req.body;

        const userData = await userModel.findById(userId);
        let cartData = userData.cartData || {};
        
        if (!cartData[itemId]) {
            cartData[itemId] = {};
        }

        if (quantity > 0) {
            cartData[itemId][size] = quantity;
        } else {
            // Remove item from cart if quantity is 0 or less
            if(cartData[itemId]){
                 delete cartData[itemId][size];
            }
            if(Object.keys(cartData[itemId]).length === 0){
                delete cartData[itemId];
            }
        }

        await userModel.findByIdAndUpdate(userId, { cartData });
        res.json({ success: true, message: "Cart updated successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Failed to update cart" });
    }
};

// Get user cart data
const getUserCart = async (req, res) => {
    try {
        const userId = req.userId; // Get userId securely from the auth middleware
        const userData = await userModel.findById(userId);
        let cartData = userData.cartData || {};
        res.json({
            success: true,
            cartData: cartData,
            message: "Cart Data Received",
        });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Failed to get cart data" });
    }
};

export { setCart, getUserCart };