import { Types } from "mongoose";

import { HttpError } from "../utils/HttpError.js";
import { checkWaterValidator } from "../schemas/waterValidator.js";
import { dateNormalizer } from "../services/waterServices.js";
import { getWaterRecordIdService } from "../services/waterServices.js";

export const checkWaterDataMiddleware = (req, res, next) => {
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

export const checkIdMiddleware = async (req, res, next) => {
  try {
    const { id } = req.params;

    const isIdValid = Types.ObjectId.isValid(id);
    if (!isIdValid) throw HttpError(404, "Not Found");

    const waterRecord = await getWaterRecordIdService(id);
    if (!waterRecord) throw HttpError(404, "Not Found");

    req.water = waterRecord;

    next();
  } catch (e) {
    next(e);
  }
};
