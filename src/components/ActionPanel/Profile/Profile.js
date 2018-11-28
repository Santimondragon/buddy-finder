"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var mobx_react_1 = require("mobx-react");
var Store_1 = require("../../../stores/Store");
require("./Profile.scss");
var Profile = mobx_react_1.observer(function (_a) {
    var persona = _a.persona;
    return (React.createElement("article", { id: "profile", className: "notActive" },
        React.createElement("div", null,
            React.createElement("img", { src: "./assets/img/profileSlot.png", alt: "Profile Slot", className: "slot", onClick: function () {
                    document.getElementById("profile").className === "notActive" ? document.getElementById("profile").className = "active" : document.getElementById("profile").className = "notActive";
                    Store_1.store.clearAllArrays();
                } }),
            React.createElement("img", { src: Store_1.store.selectedUser.foto, alt: Store_1.store.selectedUser.nombreCompleto, className: "thumbnail", onClick: function () {
                    document.getElementById("profile").className === "notActive" ? document.getElementById("profile").className = "active" : document.getElementById("profile").className = "notActive";
                    Store_1.store.clearAllArrays();
                } })),
        React.createElement("h1", null, Store_1.store.selectedUser.nombreCompleto)));
});
exports.default = Profile;
//# sourceMappingURL=Profile.js.map