const express = require("express");
const cors = require("cors");
require ("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json())

const routes = require("./routes");

app.use("/api", routes);


const port = 5000;

const connectDB = require("./connectDb");

const startServer = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`Server is listening on http://localhost:${port}`)
    });
}

startServer();