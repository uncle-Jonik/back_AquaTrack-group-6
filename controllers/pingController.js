import { pingServices } from "../services/pingServices.js";

export const pingController = (req, res, next) => {
  try {
    const text = pingServices();
    console.log("controller - DONE!");

    res.status(200).json({ text });
  } catch (e) {
    next(e);
  }
};
