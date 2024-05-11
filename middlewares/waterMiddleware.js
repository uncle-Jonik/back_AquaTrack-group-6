import { HttpError } from "../utils/HttpError.js";
import { checkWaterValidator } from "../schemas/waterValueValidator.js";

export const checkAddWaterRate = (req, res, next) => {
  try {
    const { value, err } = checkWaterValidator(req.body);
    if (err) throw HttpError(400, "Bad Request", err);

    req.body = value;

    next();
  } catch (e) {
    next(e);
  }
};
