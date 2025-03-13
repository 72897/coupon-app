const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Coupon = require("../models/Coupon");

dotenv.config();
mongoose.connect(process.env.MONGO_URI);

const addCoupons = async () => {
  const coupons = ["SAVE10", "DISCOUNT20", "OFFER30"].map((code) => ({ code }));
  await Coupon.insertMany(coupons);
  console.log("Coupons added!");
  process.exit();
};

addCoupons();
