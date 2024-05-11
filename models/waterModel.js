import { model, Schema } from "mongoose";

const waterSchema = Schema(
  {
    //
    // owner: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
    date: { type: Date },
    waterRate: { type: Number, default: 0 },
    process: { type: Number, default: 0 },
    complete: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Water = model("Water", waterSchema);
