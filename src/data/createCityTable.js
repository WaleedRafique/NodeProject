import pool from "../config/db.js";

// Must run AFTER createProvinceTable — cities references provinces.
export const createCityTable = async () => {
    const query = `
    CREATE TABLE IF NOT EXISTS cities (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        province_id INT NOT NULL REFERENCES provinces(id) ON DELETE CASCADE,
        created_at TIMESTAMP DEFAULT NOW(),
        UNIQUE (name, province_id)
    )`;

    try {
        await pool.query(query);
        console.log("City table is ready");
    } catch (err) {
        console.error("Error creating city table:", err);
    }
};

export default createCityTable;
