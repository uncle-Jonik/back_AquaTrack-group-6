import { addWaterService } from "../services/waterServices.js";
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
