import pool from "../config/db.js";

// Repository layer for users. Only SQL + rows, nothing else.

export const findAllUsers = async () => {
    const result = await pool.query("SELECT * FROM users ORDER BY id");
    return result.rows;
};

export const findUserById = async (id) => {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0];
};

export const findUserByEmail = async (email) => {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    return result.rows[0];
};

export const insertUser = async ({ name, email, age }) => {
    const result = await pool.query(
        "INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *",
        [name, email, age]
    );
    return result.rows[0];
};

export const updateUser = async (id, { name, email, age }) => {
    const result = await pool.query(
        "UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *",
        [name, email, age, id]
    );
    return result.rows[0];
};

export const deleteUser = async (id) => {
    const result = await pool.query(
        "DELETE FROM users WHERE id = $1 RETURNING *",
        [id]
    );
    return result.rows[0];
};
