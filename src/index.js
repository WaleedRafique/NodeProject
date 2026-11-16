import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";
import apiRoutes from "./routes/index.js";
import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";
import createUserTable from "./data/createUserTable.js";
import createCountryTable from "./data/createCountryTable.js";
import createProvinceTable from "./data/createProvinceTable.js";
import createCityTable from "./data/createCityTable.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

//Middleware
app.use(cors());
app.use(express.json());

//Routes  ->  /api/users, /api/countries, /api/provinces, /api/cities
app.use("/api", apiRoutes);

//404 handler: catches every request that did not match a route
app.use(notFound);

//Error Handling Middleware
app.use(errorHandler);

//Create all tables before starting server
//Order matters: countries -> provinces -> cities (foreign keys)
const initTables = async () => {
    await createUserTable();
    await createCountryTable();
    await createProvinceTable();
    await createCityTable();
};
initTables();

//Testing postgress connection
app.get("/", async (req, res) => {
    const client = await pool.query("SELECT current_database()");
    res.send(`Connected to database: ${client.rows[0].current_database}`);
});

//server running
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
