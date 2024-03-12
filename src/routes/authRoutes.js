"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
var express = require('express');
var authController_1 = require("../controllers/authController");
var authRouter = express.Router();
exports.authRouter = authRouter;
// Define routes
authRouter.post('/signup', function (_req, _res) {
    console.log(1);
    return 1;
});
authRouter.post('/signin', authController_1.signIn);
