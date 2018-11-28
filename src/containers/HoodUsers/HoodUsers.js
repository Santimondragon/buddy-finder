"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var mobx_react_1 = require("mobx-react");
var Store_1 = require("../../stores/Store");
require("./HoodUsers.scss");
var HoodUser_1 = require("../../components/HoodUser/HoodUser");
var HoodUsers = mobx_react_1.observer(function (hoodUsersProps) {
    return (React.createElement("article", { id: "hoodUsers" }, Store_1.store.hoodUsers.map(function (elem, index) {
        return React.createElement(HoodUser_1.default, { person: elem, picture: elem.foto, genre: elem.genero });
    })));
});
exports.default = HoodUsers;
//# sourceMappingURL=HoodUsers.js.map