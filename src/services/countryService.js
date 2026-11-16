import AppError from "../utils/appError.js";
import {
    findAllCountries,
    findCountryById,
    findCountryByName,
    insertCountry,
    updateCountry,
    deleteCountry,
} from "../repositories/countryRepository.js";

// Service layer: business rules live here.
// It never touches req/res — it returns data or throws an AppError.

export const getCountries = () => findAllCountries();

export const getCountryById = async (id) => {
    const country = await findCountryById(id);
    if (!country) throw new AppError("Country not found", 404);
    return country;
};

export const createCountry = async (data) => {
    const existing = await findCountryByName(data.name);
    if (existing) throw new AppError("Country with this name already exists", 409);
    return insertCountry(data);
};

export const updateCountryById = async (id, data) => {
    await getCountryById(id); // throws 404 if it does not exist
    const existing = await findCountryByName(data.name);
    if (existing && existing.id !== Number(id)) {
        throw new AppError("Country with this name already exists", 409);
    }
    return updateCountry(id, data);
};

export const deleteCountryById = async (id) => {
    await getCountryById(id); // throws 404 if it does not exist
    return deleteCountry(id);
};
