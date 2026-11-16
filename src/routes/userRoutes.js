import express from "express";
import validate from "../middlewares/validate.js";
import {
    createUserSchema,
    updateUserSchema,
} from "../models/userModel.js";
import {
    getAll,
    getById,
    create,
    update,
    remove,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", validate(createUserSchema), create);
router.put("/:id", validate(updateUserSchema), update);
router.delete("/:id", remove);

export default router;
