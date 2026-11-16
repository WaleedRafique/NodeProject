import Joi from "joi";

const cityFields = {
    name: Joi.string().trim().min(2).max(100).required(),
    provinceId: Joi.number().integer().positive().required(),
};

export const createCitySchema = Joi.object(cityFields);
export const updateCitySchema = Joi.object(cityFields);
