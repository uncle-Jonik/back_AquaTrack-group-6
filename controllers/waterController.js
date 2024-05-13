import { addWaterService } from "../services/waterServices.js";
import { getDayWaterService } from "../services/waterServices.js";
import { getMonthWaterService } from "../services/waterServices.js";
import { updateWaterRecordIdService } from "../services/waterServices.js";
import { deleteWaterRecordIdService } from "../services/waterServices.js";

export const addWaterController = async (req, res, next) => {
  try {
    const waterRecord = await addWaterService(req.body, req.user);

    res.status(201).json({
      msg: "CREATED!",
      waterRecord: {
        id: waterRecord.id,
        localDate: waterRecord.localDate,
        localTime: waterRecord.localTime,
        waterValue: waterRecord.waterValue,
        owner: waterRecord.owner,
      },
    });
  } catch (e) {
    next(e);
  }
};

export const deleteWaterController = async (req, res, next) => {
  try {
    const waterRecord = await deleteWaterRecordIdService(req.water.id);

    res.status(200).json({
      msg: "DELETED!",
      waterRecord: {
        id: waterRecord.id,
        localDate: waterRecord.localDate,
        localTime: waterRecord.localTime,
        waterValue: waterRecord.waterValue,
        owner: waterRecord.owner,
      },
    });
  } catch (e) {
    next(e);
  }
};

export const updateWaterController = async (req, res, next) => {
  try {
    const waterRecord = await updateWaterRecordIdService(
      req.water.id,
      req.body
    );

    res.status(201).json({
      msg: "UPDATED!",
      waterRecord: {
        id: waterRecord.id,
        localDate: waterRecord.localDate,
        localTime: waterRecord.localTime,
        waterValue: waterRecord.waterValue,
        owner: waterRecord.owner,
      },
    });
  } catch (e) {
    next(e);
  }
};

export const getDayWaterController = async (req, res, next) => {
  try {
    const allWaterRecord = await getDayWaterService(req.body, req.user);

    res.status(200).json({
      msg: "GETED!",
      waterRecord: allWaterRecord,
    });
  } catch (e) {
    next(e);
  }
};

export const getMonthWaterController = async (req, res, next) => {
  try {
    const allWaterRecord = await getMonthWaterService();

    res.status(200).json({
      msg: "GETED!",
      waterRecord: {},
    });
  } catch (e) {
    next(e);
  }
};
