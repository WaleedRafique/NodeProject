import pool from "../config/db.js";

// Must run AFTER createCountryTable — provinces references countries.
export const createProvinceTable = async () => {
    const query = `
    CREATE TABLE IF NOT EXISTS provinces (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        country_id INT NOT NULL REFERENCES countries(id) ON DELETE CASCADE,
        created_at TIMESTAMP DEFAULT NOW(),
        UNIQUE (name, country_id)
    )`;

    try {
        await pool.query(query);
        console.log("Province table is ready");
    } catch (err) {
        console.error("Error creating province table:", err);
    }
};

export default createProvinceTable;
