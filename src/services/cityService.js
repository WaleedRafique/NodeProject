import AppError from "../utils/appError.js";
import { findProvinceById } from "../repositories/provinceRepository.js";
import {
    findAllCities,
    findCityById,
    findCityByNameAndProvince,
    insertCity,
    updateCity,
    deleteCity,
} from "../repositories/cityRepository.js";

// Business rules: a city must belong to a real province,
// and its name must be unique inside that province.

export const getCities = (provinceId) => findAllCities(provinceId);

export const getCityById = async (id) => {
    const city = await findCityById(id);
    if (!city) throw new AppError("City not found", 404);
    return city;
};

export const createCity = async ({ name, provinceId }) => {
    const province = await findProvinceById(provinceId);
    if (!province) throw new AppError("Province not found", 404);

    const existing = await findCityByNameAndProvince(name, provinceId);
    if (existing) throw new AppError("City already exists in this province", 409);

    return insertCity({ name, provinceId });
};

export const updateCityById = async (id, { name, provinceId }) => {
    await getCityById(id); // 404 if missing

    const province = await findProvinceById(provinceId);
    if (!province) throw new AppError("Province not found", 404);

    const existing = await findCityByNameAndProvince(name, provinceId);
    if (existing && existing.id !== Number(id)) {
        throw new AppError("City already exists in this province", 409);
    }

    return updateCity(id, { name, provinceId });
};

export const deleteCityById = async (id) => {
    await getCityById(id); // 404 if missing
    return deleteCity(id);
};
