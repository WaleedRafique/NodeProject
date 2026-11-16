import Joi from "joi";

const provinceFields = {
    name: Joi.string().trim().min(2).max(100).required(),
    countryId: Joi.number().integer().positive().required(),
};

export const createProvinceSchema = Joi.object(provinceFields);
export const updateProvinceSchema = Joi.object(provinceFields);
