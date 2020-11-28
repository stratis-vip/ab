"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModel = exports.UserModel = exports.TokenModel = void 0;
var strings_1 = require("./strings");
var scalars_1 = require("./scalars");
var users_1 = require("../../graphql/resolvers/users");
var tokens_1 = require("./tokens");
var sequelize_1 = require("sequelize");
var TokenModel = /** @class */ (function (_super) {
    __extends(TokenModel, _super);
    function TokenModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TokenModel;
}(sequelize_1.Model));
exports.TokenModel = TokenModel;
var UserModel = /** @class */ (function (_super) {
    __extends(UserModel, _super);
    function UserModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UserModel;
}(sequelize_1.Model));
exports.UserModel = UserModel;
var AppModel = /** @class */ (function (_super) {
    __extends(AppModel, _super);
    function AppModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AppModel;
}(sequelize_1.Model));
exports.AppModel = AppModel;
exports.default = __assign(__assign({ Query: __assign(__assign({}, strings_1.strings.Query), users_1.users.Query), Mutation: __assign(__assign({}, users_1.users.Mutation), tokens_1.tokens.Mutation) }, tokens_1.tokens.Others), scalars_1.scalars);
