"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var mobx_react_1 = require("mobx-react");
var Store_1 = require("../../stores/Store");
var react_router_1 = require("react-router");
require("./HoodCriteria.scss");
var CriteriaItem_1 = require("../../components/CriteriaItem/CriteriaItem");
var HoodCriteria = mobx_react_1.observer(react_router_1.withRouter(function (criteriaProps) {
    return (React.createElement("article", { id: "hoodCriteria", className: "notActive" },
        React.createElement("div", { id: "criteriaActivator", onClick: function () {
                document.getElementById("hoodCriteria").className === "notActive" ? document.getElementById("hoodCriteria").className = "active" : document.getElementById("hoodCriteria").className = "notActive";
                document.getElementById("hoodCriteria").className === "notActive" ? document.getElementById("criteriaActivator").innerHTML = "<span>Hood ▲</span>" : document.getElementById("criteriaActivator").innerHTML = "<span>Hood ▼</span>";
            } },
            React.createElement("span", null, "Hood \u25B2")),
        React.createElement("ul", null, Store_1.store.hoodCriterios.map(function (elem, index) {
            return React.createElement(CriteriaItem_1.default, { content: elem, tipo: 1 });
        }))));
}));
exports.default = HoodCriteria;
//# sourceMappingURL=HoodCriteria.js.map