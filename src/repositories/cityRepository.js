import pool from "../config/db.js";

// Repository layer for cities. Only SQL + rows, nothing else.

export const findAllCities = async (provinceId) => {
    if (provinceId) {
        const result = await pool.query(
            "SELECT * FROM cities WHERE province_id = $1 ORDER BY id",
            [provinceId]
        );
        return result.rows;
    }
    const result = await pool.query("SELECT * FROM cities ORDER BY id");
    return result.rows;
};

export const findCityById = async (id) => {
    const result = await pool.query("SELECT * FROM cities WHERE id = $1", [id]);
    return result.rows[0];
};

export const findCityByNameAndProvince = async (name, provinceId) => {
    const result = await pool.query(
        "SELECT * FROM cities WHERE LOWER(name) = LOWER($1) AND province_id = $2",
        [name, provinceId]
    );
    return result.rows[0];
};

export const insertCity = async ({ name, provinceId }) => {
    const result = await pool.query(
        "INSERT INTO cities (name, province_id) VALUES ($1, $2) RETURNING *",
        [name, provinceId]
    );
    return result.rows[0];
};

export const updateCity = async (id, { name, provinceId }) => {
    const result = await pool.query(
        "UPDATE cities SET name = $1, province_id = $2 WHERE id = $3 RETURNING *",
        [name, provinceId, id]
    );
    return result.rows[0];
};

export const deleteCity = async (id) => {
    const result = await pool.query(
        "DELETE FROM cities WHERE id = $1 RETURNING *",
        [id]
    );
    return result.rows[0];
};
