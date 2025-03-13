const mongoose = require("mongoose");

const ClaimLogSchema = new mongoose.Schema({
  ip: { type: String, required: true },
  cookieId: { type: String },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ClaimLog", ClaimLogSchema);
