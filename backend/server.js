const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const couponRoutes = require("./routes/couponRoutes"); // Ensure this is correct

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors({ origin: "*", credentials: true }));
app.use(cookieParser());

// Use routes correctly
app.use("/api/coupons", couponRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app._router.stack.forEach((route) => {
  if (route.route) {
    console.log(route.route.path);
  } else if (route.name === "router") {
    route.handle.stack.forEach((r) => r.route && console.log(r.route.path));
  }
});
