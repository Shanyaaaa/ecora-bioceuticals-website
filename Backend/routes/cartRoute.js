// routes/cartRouter.js
import express from "express";
import {
  setCart,
  getUserCart,
} from "../controllers/cartController.js";
import authUser from "../middleware/auth.js";

const cartRouter = express.Router();

// A single route for all cart modifications (add/update/remove)
cartRouter.post("/set", authUser, setCart);
cartRouter.get("/get", authUser, getUserCart);

export default cartRouter;  