"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var mobx_react_1 = require("mobx-react");
var Store_1 = require("../../stores/Store");
require("./Match.scss");
var Match = mobx_react_1.observer(function (_a) {
    return (React.createElement("article", { id: "match" },
        React.createElement("section", { className: "modal" },
            React.createElement("div", { onClick: function () {
                    document.getElementById("match").style.zIndex = "-999";
                    document.getElementById("match").style.opacity = "0";
                    document.getElementById("profile").className = "notActive";
                    Store_1.store.clearAllArrays();
                }, id: "close" }),
            React.createElement("section", { className: "profiles" },
                React.createElement("article", null,
                    React.createElement("img", { src: "./assets/img/profileSlot.png", alt: "Profile Slot" }),
                    React.createElement("img", { src: Store_1.store.selectedUser.foto, alt: Store_1.store.selectedUser.nombreCompleto, className: "selected" }),
                    React.createElement("h1", null, Store_1.store.selectedUser.nombreCompleto)),
                React.createElement("h2", null,
                    React.createElement("b", null,
                        Math.floor(Store_1.store.selectedHoodUser.similarity * 100),
                        "%"),
                    React.createElement("br", null),
                    "\u2665"),
                React.createElement("article", null,
                    React.createElement("img", { src: "./assets/img/profileSlot.png", alt: "Profile Slot" }),
                    React.createElement("img", { src: Store_1.store.selectedHoodUser.foto, alt: Store_1.store.selectedHoodUser.nombreCompleto, className: "finded" }),
                    React.createElement("h1", null, Store_1.store.selectedHoodUser.nombreCompleto))),
            React.createElement("section", { className: "recomendation" },
                React.createElement("h1", null, "\u00A1Te Recomendamos...!"),
                React.createElement("h1", { id: "place" }, Store_1.store.getPlace())))));
});
exports.default = Match;
//# sourceMappingURL=Match.js.map