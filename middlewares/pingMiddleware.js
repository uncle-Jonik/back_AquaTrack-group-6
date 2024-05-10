export const pingMiddleware = (req, res, next) => {
  try {
    console.log("middleware - DONE!");

    next();
  } catch (e) {
    next(e);
  }
};
