"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminController = void 0;
// Mock admin data (replace with database integration)
var admins = [];
// Admin controller for handling admin-related functionalities
exports.adminController = {
    // Create new admin
    createAdmin: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, email_1, password, existingAdmin, newAdmin;
        return __generator(this, function (_b) {
            try {
                _a = req.body, email_1 = _a.email, password = _a.password;
                existingAdmin = admins.find(function (admin) { return admin.email === email_1; });
                if (existingAdmin) {
                    res.status(400).json({ error: 'Admin with this email already exists' });
                    return [2 /*return*/];
                }
                newAdmin = { email: email_1, password: password };
                admins.push(newAdmin);
                // Return success message
                res.status(201).json({ message: 'Admin created successfully', admin: newAdmin });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal server error' });
            }
            return [2 /*return*/];
        });
    }); },
    // Get all admins
    getAllAdmins: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                // Retrieve all admins
                res.status(200).json({ admins: admins });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal server error' });
            }
            return [2 /*return*/];
        });
    }); },
    // Get admin by ID
    getAdminById: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id_1, admin;
        return __generator(this, function (_a) {
            try {
                id_1 = req.params.id;
                admin = admins.find(function (admin) { return admin.id === id_1; });
                if (!admin) {
                    res.status(404).json({ error: 'Admin not found' });
                    return [2 /*return*/];
                }
                res.status(200).json({ admin: admin });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal server error' });
            }
            return [2 /*return*/];
        });
    }); },
    // Other admin controller functions...
};
