require("dotenv").config(); // Notice how we connect env
const express = require("express");
const cors = require("cors");

const vidoesStaticData = require("./exampleresponse.json");
const app = express();
app.use(cors());

const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: 5432,
  database: "postgres",
  ssl: {
    rejectUnauthorized: false,
  },
});

app.get("/", async (req, res) => {
  // res.json(vidoesStaticData);
  let data = await pool.query("SELECT * FROM videosurl;");
  res.json(data.rows);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
