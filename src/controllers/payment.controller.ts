import { Request, Response } from "express";
import { createCheckoutSession } from "../services/stripe.service";

export const createPayment = async (req: Request, res: Response) => {
  const { amount } = req.body;
  try {
    const session = await createCheckoutSession(amount);
    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ message: "Payment failed" });
  }
};
