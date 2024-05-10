import { model, Schema } from "mongoose";

const waterSchema = Schema(
  {
    //
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Water = model("Water", waterSchema);
