"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {Response, NextFunction } from 'express';
// @ts-ignore
var cors = require('cors');
var authRoutes_1 = require("./routes/authRoutes");
var complaintRoutes_1 = require("./routes/complaintRoutes");
var adminRoutes_1 = require("./routes/adminRoutes");
var express = require('express');
var app = express();
// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors());
// Routes
app.use('/auth', authRoutes_1.authRouter);
app.use('/complaints', complaintRoutes_1.complaintRouter);
app.use('/admin', adminRoutes_1.adminRouter);
// Error handling middleware
app.use(function (err, req, res) {
    console.error(err.stack);
    // res.send('Internal Server Error');
});
var PORT = process.env.PORT || 5000; // Use the environment port or default to 5000
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
exports.default = app;
