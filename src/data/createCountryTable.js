import pool from "../config/db.js";

export const createCountryTable = async () => {
    const query = `
    CREATE TABLE IF NOT EXISTS countries (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) UNIQUE NOT NULL,
        code VARCHAR(2) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
    )`;

    try {
        await pool.query(query);
        console.log("Country table is ready");
    } catch (err) {
        console.error("Error creating country table:", err);
    }
};

export default createCountryTable;
