import AppError from "../utils/appError.js";
import { findCountryById } from "../repositories/countryRepository.js";
import {
    findAllProvinces,
    findProvinceById,
    findProvinceByNameAndCountry,
    insertProvince,
    updateProvince,
    deleteProvince,
} from "../repositories/provinceRepository.js";

// Business rules: a province must belong to a real country,
// and its name must be unique inside that country.

export const getProvinces = (countryId) => findAllProvinces(countryId);

export const getProvinceById = async (id) => {
    const province = await findProvinceById(id);
    if (!province) throw new AppError("Province not found", 404);
    return province;
};

export const createProvince = async ({ name, countryId }) => {
    const country = await findCountryById(countryId);
    if (!country) throw new AppError("Country not found", 404);

    const existing = await findProvinceByNameAndCountry(name, countryId);
    if (existing) throw new AppError("Province already exists in this country", 409);

    return insertProvince({ name, countryId });
};

export const updateProvinceById = async (id, { name, countryId }) => {
    await getProvinceById(id); // 404 if missing

    const country = await findCountryById(countryId);
    if (!country) throw new AppError("Country not found", 404);

    const existing = await findProvinceByNameAndCountry(name, countryId);
    if (existing && existing.id !== Number(id)) {
        throw new AppError("Province already exists in this country", 409);
    }

    return updateProvince(id, { name, countryId });
};

export const deleteProvinceById = async (id) => {
    await getProvinceById(id); // 404 if missing
    return deleteProvince(id);
};
