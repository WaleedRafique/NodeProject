import express from "express";
import userRoutes from "./userRoutes.js";
import countryRoutes from "./countryRoutes.js";
import provinceRoutes from "./provinceRoutes.js";
import cityRoutes from "./cityRoutes.js";

// One router that mounts every resource under its own base path.

const router = express.Router();

router.use("/users", userRoutes);
router.use("/countries", countryRoutes);
router.use("/provinces", provinceRoutes);
router.use("/cities", cityRoutes);

export default router;
