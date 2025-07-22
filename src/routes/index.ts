import express from "express";
import productRoutes from "./product.routes";
import paymentRoutes from "./payment.routes";

const router = express.Router();

router.use("/products", productRoutes);
router.use("/payments", paymentRoutes);

export default router;
