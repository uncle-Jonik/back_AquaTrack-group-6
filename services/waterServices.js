import { Water } from "../models/waterModel.js";
import { HttpError } from "../utils/HttpError.js";

export const localDate = () => {
  const milliseconds = Date.now();
  const date = new Date(milliseconds);

  return date.toLocaleDateString();
};

export const localTime = () => {
  const milliseconds = Date.now();
  const time = new Date(milliseconds);

  const timeString = time
    .toLocaleTimeString()
    .split(":")
    .splice(0, 2)
    .join(":");

  return timeString;
};

export const dateNormalizer = (dateValue) => {
  const arr = dateValue.split(/[\\/.\-]/).join(".");

  return arr;
};

//=================================================================================
export const addWaterService = async (waterData, owner) => {
  const waterRecord = await Water.create({ ...waterData, owner });

  return waterRecord;
};

export const getWaterRecordIdService = async (id) => {
  const waterRecord = await Water.findById(id);

  return waterRecord;
};

export const deleteWaterRecordIdService = async (id) => {
  const waterData = await Water.findByIdAndDelete(id);

  return waterData;
};

export const updateWaterRecordIdService = async (id, waterData) => {
  const waterRecord = await Water.findByIdAndUpdate(id, waterData, {
    new: true,
  });

  return waterRecord;
};
