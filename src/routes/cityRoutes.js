import express from "express";
import validate from "../middlewares/validate.js";
import {
    createCitySchema,
    updateCitySchema,
} from "../models/cityModel.js";
import {
    getAll,
    getById,
    create,
    update,
    remove,
} from "../controllers/cityController.js";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", validate(createCitySchema), create);
router.put("/:id", validate(updateCitySchema), update);
router.delete("/:id", remove);

export default router;
