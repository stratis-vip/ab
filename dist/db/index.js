"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var sequelize_1 = require("sequelize");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.db = new sequelize_1.Sequelize(process.env.DBASE, process.env.DBUSER, process.env.DBPASS, {
    dialect: "mariadb",
    port: Number(process.env.PORT),
    dialectOptions: {
        timezone: "Europe/Athens",
    },
    // logging: () => console.log,
    logging: false,
    define: {
        charset: 'utf8'
    }
});
