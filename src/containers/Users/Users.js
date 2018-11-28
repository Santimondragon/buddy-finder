"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var mobx_react_1 = require("mobx-react");
var Store_1 = require("../../stores/Store");
require("./Users.scss");
var User_1 = require("../../components/User/User");
var Users = mobx_react_1.observer(function (usersProps) {
    return (React.createElement("article", { id: "users" },
        React.createElement("section", null, Store_1.store.users.map(function (elem, index) {
            return React.createElement(User_1.default, { person: elem, picture: elem.foto, genre: elem.genero });
        }))));
});
exports.default = Users;
//# sourceMappingURL=Users.js.map