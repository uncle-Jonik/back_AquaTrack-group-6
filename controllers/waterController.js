export const addWaterController = (req, res, next) => {
  try {
    console.log(req.body);

    res.status(201).json("a");
  } catch (e) {
    next(e);
  }
};
