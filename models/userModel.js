import { model, Schema } from "mongoose";

import { userGender } from "../constants/userGender.js";

const userSchema = Schema(
  {
    //
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    token: {
      type: String,
      default: null,
    },

    //
    gender: {
      type: String,
      enum: Object.values(userGender),
      default: null,
    },
    avatar: {
      type: String,
    },
    weight: {
      type: Number,
      default: null,
    },
    sportsActivity: {
      type: Number,
      default: null,
    },
    waterRate: {
      type: Number,
      default: 1.5,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const User = model("User", userSchema);
