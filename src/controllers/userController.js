import handleResponse from "../utils/apiResponse.js";
import {
    getUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
} from "../services/userService.js";

export const getAll = async (req, res, next) => {
    try {
        const users = await getUsers();
        handleResponse(res, 200, "Users retrieved successfully", users);
    } catch (err) {
        next(err);
    }
};

export const getById = async (req, res, next) => {
    try {
        const user = await getUserById(req.params.id);
        handleResponse(res, 200, "User retrieved successfully", user);
    } catch (err) {
        next(err);
    }
};

export const create = async (req, res, next) => {
    try {
        const user = await createUser(req.body);
        handleResponse(res, 201, "User created successfully", user);
    } catch (err) {
        next(err);
    }
};

export const update = async (req, res, next) => {
    try {
        const user = await updateUserById(req.params.id, req.body);
        handleResponse(res, 200, "User updated successfully", user);
    } catch (err) {
        next(err);
    }
};

export const remove = async (req, res, next) => {
    try {
        const user = await deleteUserById(req.params.id);
        handleResponse(res, 200, "User deleted successfully", user);
    } catch (err) {
        next(err);
    }
};
