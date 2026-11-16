import express from "express";
import validate from "../middlewares/validate.js";
import {
    createProvinceSchema,
    updateProvinceSchema,
} from "../models/provinceModel.js";
import {
    getAll,
    getById,
    create,
    update,
    remove,
} from "../controllers/provinceController.js";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", validate(createProvinceSchema), create);
router.put("/:id", validate(updateProvinceSchema), update);
router.delete("/:id", remove);

export default router;
