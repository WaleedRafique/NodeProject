import Joi from "joi";

const userFields = {
    name: Joi.string().trim().min(2).max(100).required(),
    email: Joi.string().trim().email().required(),
    age: Joi.number().integer().min(0).max(150).required(),
};

export const createUserSchema = Joi.object(userFields);
export const updateUserSchema = Joi.object(userFields);
