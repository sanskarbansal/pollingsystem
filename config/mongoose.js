const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost:${process.env.DB_PORT}/${process.env.DB_NAME}`, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", (err) => {
    console.log("Error while connecting to database.");
});
db.once("open", () => {
    console.log("Database connected successfully.");
});

module.exports = db;
