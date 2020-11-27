"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheControlScope = exports.Role = void 0;
var Role;
(function (Role) {
    Role["Guest"] = "GUEST";
    Role["Member"] = "MEMBER";
    Role["Admin"] = "ADMIN";
})(Role = exports.Role || (exports.Role = {}));
var CacheControlScope;
(function (CacheControlScope) {
    CacheControlScope["Public"] = "PUBLIC";
    CacheControlScope["Private"] = "PRIVATE";
})(CacheControlScope = exports.CacheControlScope || (exports.CacheControlScope = {}));
