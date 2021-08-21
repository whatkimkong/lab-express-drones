//* Step 1: Require mongoose
const { Schema, model } = require("mongoose");

//* Step 2:
const droneSchema = new Schema(
  {
    name: String,
    propellers: Number,
    maxSpeed: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Drone", droneSchema);
