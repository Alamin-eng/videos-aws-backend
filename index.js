
const express = require("express");
const cors = require("cors");

const vidoesStaticData = require("./exampleresponse.json");
const app = express();
app.use(cors());

const{ Pool }= require("pg");

const pool = new Pool({
  user: "postgres",
  password: `${process.env.PASSWORD}`,
  host: "myfirstdb.c3uwgceuc087.eu-north-1.rds.amazonaws.com",
  port: 5432,
  database: "postgres",
  ssl: {
    rejectUnauthorized: false,
  },
});

app.get("/", async (req, res) => {
  // res.json(vidoesStaticData);
  let data = await pool.query("SELECT * FROM videosurl;");
  res.json(data.rows)
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
