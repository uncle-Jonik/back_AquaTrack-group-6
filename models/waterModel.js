import { model, Schema } from "mongoose";

import { localDate } from "../services/waterServices.js";
import { localTime } from "../services/waterServices.js";

const waterSchema = Schema(
  {
    //
    // owner: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
    localDate: { type: String, default: () => localDate() },
    localTime: { type: String, default: () => localTime() },
    waterValue: { type: Number, require: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Water = model("Water", waterSchema);
