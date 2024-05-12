import { HttpError } from "../utils/HttpError.js";
import { checkWaterValidator } from "../schemas/waterValueValidator.js";
import { dateNormalizer } from "../services/waterServices.js";

export const checkAddWaterRate = (req, res, next) => {
  try {
    const { value, err } = checkWaterValidator(req.body);
    if (err) throw HttpError(400, "Bad Request", err);

    if (value.localDate) {
      const localDate = dateNormalizer(value.localDate);
      req.body = { ...value, localDate };
    }

    next();
  } catch (e) {
    next(e);
  }
};
