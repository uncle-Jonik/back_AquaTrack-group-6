import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";

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
    name: {
      type: String,
    },
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

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  next();
});


userSchema.methods.checkUserPassword = (candidate, passwordHash) =>
  bcrypt.compare(candidate, passwordHash);

export const User = model("User", userSchema);

