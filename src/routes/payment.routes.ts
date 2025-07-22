import express from "express";
import { createPayment } from "../controllers/payment.controller";

const router = express.Router();
router.post("/create-checkout-session", createPayment);

export default router;
