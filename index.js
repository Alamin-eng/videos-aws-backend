const express = require("express");
const cors = require("cors");

const vidoesStaticData = require("./exampleresponse.json")
const app = express();
app.use(cors());


app.get("/", (req, res) => { 
  res.json(vidoesStaticData);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
