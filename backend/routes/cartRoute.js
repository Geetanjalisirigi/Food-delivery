import express from "express"
import { getCart,AddToCart,removeFromCart } from "../controllers/cartController.js"
import { get } from "mongoose";
import authMiddleware from "../middleware/auth.js";


const cartRouter=express.Router();

cartRouter.post("/add",authMiddleware,AddToCart)
cartRouter.post("/remove",authMiddleware,removeFromCart)
cartRouter.post("/get",authMiddleware,getCart)


export default cartRouter;