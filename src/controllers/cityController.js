import handleResponse from "../utils/apiResponse.js";
import {
    getCities,
    getCityById,
    createCity,
    updateCityById,
    deleteCityById,
} from "../services/cityService.js";

export const getAll = async (req, res, next) => {
    try {
        // supports optional filter: GET /api/cities?provinceId=1
        const cities = await getCities(req.query.provinceId);
        handleResponse(res, 200, "Cities retrieved successfully", cities);
    } catch (err) {
        next(err);
    }
};

export const getById = async (req, res, next) => {
    try {
        const city = await getCityById(req.params.id);
        handleResponse(res, 200, "City retrieved successfully", city);
    } catch (err) {
        next(err);
    }
};

export const create = async (req, res, next) => {
    try {
        const city = await createCity(req.body);
        handleResponse(res, 201, "City created successfully", city);
    } catch (err) {
        next(err);
    }
};

export const update = async (req, res, next) => {
    try {
        const city = await updateCityById(req.params.id, req.body);
        handleResponse(res, 200, "City updated successfully", city);
    } catch (err) {
        next(err);
    }
};

export const remove = async (req, res, next) => {
    try {
        const city = await deleteCityById(req.params.id);
        handleResponse(res, 200, "City deleted successfully", city);
    } catch (err) {
        next(err);
    }
};
