"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var mobx_react_1 = require("mobx-react");
var Store_1 = require("../../../stores/Store");
require("./Settings.scss");
var Settings = mobx_react_1.observer(function (_a) {
    return (React.createElement("article", { id: "settings", className: "notActive" },
        React.createElement("div", { onClick: function () {
                document.getElementById("settings").className === "notActive" ? document.getElementById("settings").className = "active" : document.getElementById("settings").className = "notActive";
            } },
            React.createElement("img", { src: "./assets/img/settings.png", alt: "" }),
            React.createElement("h4", null, "Configuraci\u00F3n")),
        React.createElement("ul", null,
            React.createElement("article", { onClick: function () {
                    document.getElementById("settings").className === "notActive" ? document.getElementById("settings").className = "active" : document.getElementById("settings").className = "notActive";
                }, id: "close" }, "\u00D7"),
            React.createElement("li", null,
                React.createElement("span", null,
                    "Nivel de Afinidad: ",
                    React.createElement("b", null,
                        Math.floor(Store_1.store.similarity * 100),
                        "%")),
                React.createElement("article", null,
                    React.createElement("label", { htmlFor: "sAfinidad" }, "0%"),
                    React.createElement("input", { onChange: function (e) {
                            Store_1.store.setSimilarity(e.target.value);
                            if (Store_1.store.selectedUser.nombreCompleto != "") {
                                if (Store_1.store.filteredUsersOne.length >= 1) {
                                    alert("Una vez aplicado un filtro no puedes cambiar el nivel de afinidad");
                                    Store_1.store.setSimilarity(Store_1.store.similarity);
                                }
                                else {
                                    Store_1.store.cosineSimilarity(Store_1.store.selectedUser);
                                }
                            }
                        }, id: "sAfinidad", type: "range", min: "0", max: "1", step: "0.01", value: Store_1.store.similarity }),
                    React.createElement("label", { htmlFor: "sAfinidad" }, "100%"))),
            React.createElement("li", null,
                React.createElement("span", null,
                    "Precisi\u00F3n del Filtro: ",
                    React.createElement("b", null,
                        Math.floor(Store_1.store.filterPrecision * 10),
                        "%")),
                React.createElement("article", null,
                    React.createElement("label", { htmlFor: "sFiltro" }, "0%"),
                    React.createElement("input", { onChange: function (e) {
                            Store_1.store.setFilterPresicion(e.target.value);
                        }, id: "sFiltro", type: "range", min: "0", max: "10", step: "1", value: Store_1.store.filterPrecision }),
                    React.createElement("label", { htmlFor: "sFiltro" }, "100%"))))));
});
exports.default = Settings;
//# sourceMappingURL=Settings.js.map