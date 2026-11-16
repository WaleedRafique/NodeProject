import pool from "../config/db.js";

export const createUserTable = async () => {
    const query = `
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        age INT,
        created_at TIMESTAMP DEFAULT NOW()
    )`;

    try {
        await pool.query(query);
        console.log("User table is ready");
    } catch (err) {
        console.error("Error creating user table:", err);
    }
};

export default createUserTable;
