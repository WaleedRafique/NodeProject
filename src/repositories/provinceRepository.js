import pool from "../config/db.js";

// Repository layer for provinces. Only SQL + rows, nothing else.

export const findAllProvinces = async (countryId) => {
    if (countryId) {
        const result = await pool.query(
            "SELECT * FROM provinces WHERE country_id = $1 ORDER BY id",
            [countryId]
        );
        return result.rows;
    }
    const result = await pool.query("SELECT * FROM provinces ORDER BY id");
    return result.rows;
};

export const findProvinceById = async (id) => {
    const result = await pool.query("SELECT * FROM provinces WHERE id = $1", [id]);
    return result.rows[0];
};

export const findProvinceByNameAndCountry = async (name, countryId) => {
    const result = await pool.query(
        "SELECT * FROM provinces WHERE LOWER(name) = LOWER($1) AND country_id = $2",
        [name, countryId]
    );
    return result.rows[0];
};

export const insertProvince = async ({ name, countryId }) => {
    const result = await pool.query(
        "INSERT INTO provinces (name, country_id) VALUES ($1, $2) RETURNING *",
        [name, countryId]
    );
    return result.rows[0];
};

export const updateProvince = async (id, { name, countryId }) => {
    const result = await pool.query(
        "UPDATE provinces SET name = $1, country_id = $2 WHERE id = $3 RETURNING *",
        [name, countryId, id]
    );
    return result.rows[0];
};

export const deleteProvince = async (id) => {
    const result = await pool.query(
        "DELETE FROM provinces WHERE id = $1 RETURNING *",
        [id]
    );
    return result.rows[0];
};
