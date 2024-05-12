import { Water } from "../models/waterModel.js";

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

export const addWaterService = async (waterData) => {
  const waterRecord = await Water.create(waterData);

  return waterRecord;
};

export const getWaterRecordIdService = async (id) => {
  const waterData = await Water.findById(id);

  return waterData;
};

export const deleteWaterRecordIdService = async (id) => {
  const waterData = await Water.findByIdAndDelete(id);

  return waterData;
};
