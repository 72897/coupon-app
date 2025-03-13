const express = require("express");
const Coupon = require("../models/Coupon");
const ClaimLog = require("../models/ClaimLog");

const router = express.Router();
const CLAIM_COOLDOWN = 3600 * 1000; // 1 hour cooldown

// Claim a Coupon
router.post("/claim-coupon", async (req, res) => {
  const userIp = req.ip;
  const userCookie =
    req.cookies?.couponUser || Math.random().toString(36).substring(2);

  // Check last claim time
  const lastClaim = await ClaimLog.findOne({ ip: userIp }).sort({
    timestamp: -1,
  });
  if (lastClaim && Date.now() - lastClaim.timestamp < CLAIM_COOLDOWN) {
    const timeLeft = Math.ceil(
      (CLAIM_COOLDOWN - (Date.now() - lastClaim.timestamp)) / 1000
    );
    return res
      .status(429)
      .json({ message: `Try again in ${timeLeft} seconds`, timeLeft });
  }

  // Find an unused coupon
  const coupon = await Coupon.findOneAndUpdate({ used: false }, { used: true });
  if (!coupon) return res.status(400).json({ message: "No coupons available" });

  // Log claim attempt
  await ClaimLog.create({ ip: userIp, cookieId: userCookie });

  // Set cookie for tracking
  res.cookie("couponUser", userCookie, {
    maxAge: CLAIM_COOLDOWN,
    httpOnly: true,
  });

  res.json({ coupon: coupon.code });
});

// Get Available Coupons
router.get("/available-coupons", async (req, res) => {
  const coupons = await Coupon.find({ used: false });
  res.json({ available: coupons.length });
});

router.post("/claim-coupon", async (req, res) => {
  console.log("Received claim request"); // Debugging
  res.json({ message: "Testing route" });
});

module.exports = router;
