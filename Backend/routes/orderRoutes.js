import express from 'express';
import  adminAuth from '../middleware/adminAuth.js';
import { placeOrder, placeOrderRazorpay, allOrders, updateStatus, userOrders } from '../controllers/orderController.js';
import authUser from '../middleware/auth.js';

const orderRouter = express.Router();



//Admin features
orderRouter.post('/list', adminAuth, allOrders);
orderRouter.post('/status', adminAuth, updateStatus);

//payment features
orderRouter.post('/place',authUser, placeOrder);
orderRouter.post('/placeorderrzpay',authUser, placeOrderRazorpay);

//User features
orderRouter.post('/userorders',authUser, userOrders);

export default orderRouter