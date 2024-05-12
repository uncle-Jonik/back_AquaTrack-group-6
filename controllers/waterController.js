import { addWaterService } from "../services/waterServices.js";
import { deleteWaterRecordIdService } from "../services/waterServices.js";

export const addWaterController = async (req, res, next) => {
  try {
    const waterRecord = await addWaterService(req.body);

    res.status(201).json({
      msg: "CREATED!",
      waterRecord: {
        id: waterRecord.id,
        date: waterRecord.localDate,
        time: waterRecord.localTime,
        value: waterRecord.waterValue,
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
        date: waterRecord.localDate,
        time: waterRecord.localTime,
        value: waterRecord.waterValue,
      },
    });
  } catch (e) {
    next(e);
  }
};
