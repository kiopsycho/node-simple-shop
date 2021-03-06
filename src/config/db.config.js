'use strict'

// Export mongoose
const mongoose = require("mongoose");

//Assign MongoDB connection string to Uri and declare options settings
const uri = "mongodb+srv://Admin:demopass@reportingdata.lvtrt.mongodb.net/shopdb?retryWrites=true&w=majority"
// Declare a variable named option and assign optional settings
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

// Connect MongoDB Atlas using mongoose connect method
mongoose
    .connect(uri, options)
    .then(() => {
        console.log("Database connection established!");
    })
    .catch(err => {
        console.log("Error connecting Database instance due to:", err);
    });