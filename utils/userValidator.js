import Joi from "joi";
import { joiValidator } from "./validator.js";
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
            name: Joi.string().min(2).max(30),
            email: Joi.string().email(),
            gender: Joi.string().valid(...Object.values(userGender)),
            weight: Joi.string(),
            sportsActivity: Joi.string(),
            waterRate: Joi.string(),
        })
        .validate(data)
);