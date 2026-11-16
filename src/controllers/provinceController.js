import handleResponse from "../utils/apiResponse.js";
import {
    getProvinces,
    getProvinceById,
    createProvince,
    updateProvinceById,
    deleteProvinceById,
} from "../services/provinceService.js";

export const getAll = async (req, res, next) => {
    try {
        // supports optional filter: GET /api/provinces?countryId=1
        const provinces = await getProvinces(req.query.countryId);
        handleResponse(res, 200, "Provinces retrieved successfully", provinces);
    } catch (err) {
        next(err);
    }
};

export const getById = async (req, res, next) => {
    try {
        const province = await getProvinceById(req.params.id);
        handleResponse(res, 200, "Province retrieved successfully", province);
    } catch (err) {
        next(err);
    }
};

export const create = async (req, res, next) => {
    try {
        const province = await createProvince(req.body);
        handleResponse(res, 201, "Province created successfully", province);
    } catch (err) {
        next(err);
    }
};

export const update = async (req, res, next) => {
    try {
        const province = await updateProvinceById(req.params.id, req.body);
        handleResponse(res, 200, "Province updated successfully", province);
    } catch (err) {
        next(err);
    }
};

export const remove = async (req, res, next) => {
    try {
        const province = await deleteProvinceById(req.params.id);
        handleResponse(res, 200, "Province deleted successfully", province);
    } catch (err) {
        next(err);
    }
};
