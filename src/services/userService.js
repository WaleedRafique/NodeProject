import AppError from "../utils/appError.js";
import {
    findAllUsers,
    findUserById,
    findUserByEmail,
    insertUser,
    updateUser,
    deleteUser,
} from "../repositories/userRepository.js";

export const getUsers = () => findAllUsers();

export const getUserById = async (id) => {
    const user = await findUserById(id);
    if (!user) throw new AppError("User not found", 404);
    return user;
};

export const createUser = async (data) => {
    const existing = await findUserByEmail(data.email);
    if (existing) throw new AppError("Email is already in use", 409);
    return insertUser(data);
};

export const updateUserById = async (id, data) => {
    await getUserById(id); // 404 if missing
    const existing = await findUserByEmail(data.email);
    if (existing && existing.id !== Number(id)) {
        throw new AppError("Email is already in use", 409);
    }
    return updateUser(id, data);
};

export const deleteUserById = async (id) => {
    await getUserById(id); // 404 if missing
    return deleteUser(id);
};
