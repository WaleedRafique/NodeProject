import Joi from "joi";

// Model layer: defines the SHAPE of the entity and its validation rules.
// (With raw SQL/Postgres there is no ORM, so Joi schemas act as the model.)

const countryFields = {
    name: Joi.string().trim().min(2).max(100).required(),
    code: Joi.string().trim().uppercase().length(2).required(), // e.g. "PK", "US"
};

export const createCountrySchema = Joi.object(countryFields);
export const updateCountrySchema = Joi.object(countryFields);
