"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./Root.scss");
var Store_1 = require("../../stores/Store");
var ActionPanel_1 = require("../ActionPanel/ActionPanel");
var HoodCriteria_1 = require("../HoodCriteria/HoodCriteria");
var ContextCriteria_1 = require("../ContextCriteria/ContextCriteria");
var Users_1 = require("../Users/Users");
var HoodUsers_1 = require("../HoodUsers/HoodUsers");
var Match_1 = require("../../components/Match/Match");
var dataBase_1 = require("../../stores/dataBase");
var Root = (function (_super) {
    __extends(Root, _super);
    function Root(props) {
        var _this = _super.call(this, props) || this;
        Store_1.store.shuffleArray(dataBase_1.dataBase.users);
        Store_1.store.setUser(dataBase_1.dataBase.users);
        Store_1.store.fillPlaces(Store_1.store.placesCriteria);
        return _this;
    }
    Root.prototype.render = function () {
        return (React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement("section", { id: "container" },
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: ActionPanel_1.default }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Users_1.default }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: HoodUsers_1.default }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: ContextCriteria_1.default }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: HoodCriteria_1.default }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Match_1.default }))));
    };
    return Root;
}(React.Component));
exports.Root = Root;
//# sourceMappingURL=Root.js.map