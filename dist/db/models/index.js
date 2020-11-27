"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMdl = void 0;
var index_1 = require("../index");
var sequelize_1 = require("sequelize");
exports.userMdl = index_1.db.define('user', {
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    name: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    password: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false,
    },
    role: {
        type: sequelize_1.DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        defaultValue: 0
    },
}, {
    charset: 'utf8'
});
