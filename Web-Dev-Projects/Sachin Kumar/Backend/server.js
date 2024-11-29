const express = require('express');
const app = express();
require("dotenv").config();
const dbconfig = require("./config/dbconfig");
const portfolioRoute = require("./routes/portfolioRoute");

const cors = require('cors');
app.use(cors());
app.use(cors({
    origin: '*'
}));


app.use(express.json());
app.use("/api/portfolio", portfolioRoute);


 
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server Listening on ${port}`);
});

