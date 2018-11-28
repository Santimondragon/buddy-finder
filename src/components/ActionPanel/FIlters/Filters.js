"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var mobx_react_1 = require("mobx-react");
var react_router_1 = require("react-router");
require("./Filters.scss");
var DragAndDropStore_1 = require("../../../stores/DragAndDropStore");
var Filter_1 = require("./Filter/Filter");
var Filters = mobx_react_1.observer(react_router_1.withRouter(function (filtersProps) {
    return (React.createElement("article", { id: "filters" },
        React.createElement("h4", null, "Criterios"),
        DragAndDropStore_1.dragAndDropStore.filters.map(function (elem, index) {
            return React.createElement(Filter_1.default, { background: "white", content: "", used: false, value: "", position: index });
        })));
}));
exports.default = Filters;
//# sourceMappingURL=Filters.js.map