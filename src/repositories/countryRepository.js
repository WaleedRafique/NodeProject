import pool from "../config/db.js";

// Repository layer: the ONLY place that talks to the database.
// SQL goes in, rows come out. No business logic, no req/res here.

export const findAllCountries = async () => {
    const result = await pool.query("SELECT * FROM countries ORDER BY id");
    return result.rows;
};

export const findCountryById = async (id) => {
    const result = await pool.query("SELECT * FROM countries WHERE id = $1", [id]);
    return result.rows[0];
};

export const findCountryByName = async (name) => {
    const result = await pool.query(
        "SELECT * FROM countries WHERE LOWER(name) = LOWER($1)",
        [name]
    );
    return result.rows[0];
};

export const insertCountry = async ({ name, code }) => {
    const result = await pool.query(
        "INSERT INTO countries (name, code) VALUES ($1, $2) RETURNING *",
        [name, code]
    );
    return result.rows[0];
};

export const updateCountry = async (id, { name, code }) => {
    const result = await pool.query(
        "UPDATE countries SET name = $1, code = $2 WHERE id = $3 RETURNING *",
        [name, code, id]
    );
    return result.rows[0];
};

export const deleteCountry = async (id) => {
    const result = await pool.query(
        "DELETE FROM countries WHERE id = $1 RETURNING *",
        [id]
    );
    return result.rows[0];
};
