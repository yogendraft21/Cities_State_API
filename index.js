const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json("Free India State and Cities API By Yogi Singh")
})

app.get("/yogi/api/india/state", (req, res) => {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.status(500).send("Error reading file");
      return;
    }
    try {
      const jsonData = JSON.parse(data);
      const states = jsonData.states.map((state) => state.state);
      res.json(states);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      res.status(500).send("Error parsing JSON");
    }
  });
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
