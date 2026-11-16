import handleResponse from "../utils/apiResponse.js";
import {
    getCountries,
    getCountryById,
    createCountry,
    updateCountryById,
    deleteCountryById,
} from "../services/countryService.js";

// Controller layer: reads req, calls the service, writes res.
// No SQL and no business rules here — errors go to next(err).

export const getAll = async (req, res, next) => {
    try {
        const countries = await getCountries();
        handleResponse(res, 200, "Countries retrieved successfully", countries);
    } catch (err) {
        next(err);
    }
};

export const getById = async (req, res, next) => {
    try {
        const country = await getCountryById(req.params.id);
        handleResponse(res, 200, "Country retrieved successfully", country);
    } catch (err) {
        next(err);
    }
};

export const create = async (req, res, next) => {
    try {
        const country = await createCountry(req.body);
        handleResponse(res, 201, "Country created successfully", country);
    } catch (err) {
        next(err);
    }
};

export const update = async (req, res, next) => {
    try {
        const country = await updateCountryById(req.params.id, req.body);
        handleResponse(res, 200, "Country updated successfully", country);
    } catch (err) {
        next(err);
    }
};

export const remove = async (req, res, next) => {
    try {
        const country = await deleteCountryById(req.params.id);
        handleResponse(res, 200, "Country deleted successfully", country);
    } catch (err) {
        next(err);
    }
};
