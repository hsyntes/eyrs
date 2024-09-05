const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    website_name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    website_rtp: {
      type: Number,
      min: 90,
      max: 99,
      required: true,
      default: 0,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.models.Website || mongoose.model("Website", Schema);
