"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var mobx_react_1 = require("mobx-react");
var Store_1 = require("../../stores/Store");
var react_router_1 = require("react-router");
require("./ContextCriteria.scss");
var CriteriaItem_1 = require("../../components/CriteriaItem/CriteriaItem");
var ContextCriteria = mobx_react_1.observer(react_router_1.withRouter(function (criteriaProps) {
    return (React.createElement("article", { id: "contextCriteria", className: "notActive" },
        React.createElement("div", { id: "contextCriteriaActivator", onClick: function () {
                document.getElementById("contextCriteria").className === "notActive" ? document.getElementById("contextCriteria").className = "active" : document.getElementById("contextCriteria").className = "notActive";
                document.getElementById("contextCriteria").className === "notActive" ? document.getElementById("contextCriteriaActivator").innerHTML = "<span>Contexto ▲</span>" : document.getElementById("contextCriteriaActivator").innerHTML = "<span>Contexto ▼</span>";
            } },
            React.createElement("span", null, "Contexto \u25B2")),
        React.createElement("ul", null, Store_1.store.contextCriterios.map(function (elem, index) {
            return React.createElement(CriteriaItem_1.default, { content: elem.display, tipo: 2 });
        }))));
}));
exports.default = ContextCriteria;
//# sourceMappingURL=ContextCriteria.js.map