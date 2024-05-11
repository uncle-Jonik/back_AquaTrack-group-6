import { addWaterService } from "../services/waterServices.js";

export const addWaterController = async (req, res, next) => {
  try {
    const waterRecord = await addWaterService(req.body);

    res.status(201).json({
      waterRecord: {
        date: waterRecord.localDate,
        time: waterRecord.localTime,
        value: waterRecord.waterValue,
      },
    });
  } catch (e) {
    next(e);
  }
};
