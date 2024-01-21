require("dotenv").config();
require("express-async-errors");
const express = require("express");
const { errorHandler, notFound } = require("./lib/middleware/error-middleware");
const { dbConnect } = require("./lib/dbconnect");
const userRoutes = require("./routes/user-routes");
const accessLogs = require("./lib/middleware/accessLogs");
const app = express();
const port = 5500;
app.use(express.json());

app.use("/api/user", accessLogs, userRoutes);

app.use(errorHandler);
app.use(notFound);

dbConnect();
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
