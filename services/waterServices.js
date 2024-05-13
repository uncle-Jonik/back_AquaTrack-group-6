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

//=================================================================================
export const addWaterService = async (waterData, owner) => {
  const localMonth = waterData.localDate.slice(3);

  const waterRecord = await Water.create({ ...waterData, localMonth, owner });

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

export const getDayWaterService = async (date, owner) => {
  const allWaterRecord = await Water.find({
    owner: owner.id,
    localDate: date.localDate,
  });

  let totalDay = 0;
  allWaterRecord.forEach((i) => (totalDay += i.waterValue));

  if (totalDay !== Number(owner.waterRate) * 1000) {
    const feasibility = (totalDay / (Number(owner.waterRate) * 1000)) * 100;
    return { allWaterRecord, feasibility, completed: false };
  }

  return { allWaterRecord, feasibility: 100, completed: true };
};

export const getMonthWaterService = async (date, owner) => {
  const allWaterRecord = await Water.find({
    owner: owner.id,
    localMonth: date.localDate.slice(3),
  });

  return allWaterRecord;
};
