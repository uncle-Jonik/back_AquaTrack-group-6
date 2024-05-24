import Joi from "joi";
import { joiValidator } from "../utils/joiValidator.js";
import { userGender } from "../constants/userGender.js";

export const createUserDataValidator = joiValidator((data) =>
  Joi.object()
    .options({ abortEarly: false })
    .keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    })
    .validate(data)
);

export const logInUserDataValidator = joiValidator((data) =>
  Joi.object()
    .options({ abortEarly: false })
    .keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    })
    .validate(data)
);

export const updateUserValidator = joiValidator((data) =>
  Joi.object()
    .options({ abortEarly: false })
    .keys({
      name: Joi.string().min(3).max(20),
      email: Joi.string().email(),
      gender: Joi.string().valid(...Object.values(userGender)),
      weight: Joi.string(),
      sportsActivity: Joi.string(),
      waterRate: Joi.string(),
    })
    .validate(data)
);

export const refreshUserValidator = joiValidator((data) =>
  Joi.object()
    .options({ abortEarly: false })
    .keys({
      refreshToken: Joi.string().required(),
    })
    .validate(data)
);