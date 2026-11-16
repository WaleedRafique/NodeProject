import express from "express";
import validate from "../middlewares/validate.js";
import {
    createCountrySchema,
    updateCountrySchema,
} from "../models/countryModel.js";
import {
    getAll,
    getById,
    create,
    update,
    remove,
} from "../controllers/countryController.js";

// Route layer: maps URLs to middleware + controller functions.

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", validate(createCountrySchema), create);
router.put("/:id", validate(updateCountrySchema), update);
router.delete("/:id", remove);

export default router;
