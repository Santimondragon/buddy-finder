"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var mobx_react_1 = require("mobx-react");
var Store_1 = require("../../stores/Store");
var react_router_1 = require("react-router");
require("./ActionPanel.scss");
var Profile_1 = require("../../components/ActionPanel/Profile/Profile");
var Filters_1 = require("../../components/ActionPanel/FIlters/Filters");
var Settings_1 = require("../../components/ActionPanel/Settings/Settings");
var ActionPanel = mobx_react_1.observer(react_router_1.withRouter(function (actionPanelProps) {
    return (React.createElement("article", { id: "actionPanel" },
        React.createElement(Profile_1.default, { persona: Store_1.store.selectedUser }),
        React.createElement(Filters_1.default, null),
        React.createElement(Settings_1.default, null)));
}));
exports.default = ActionPanel;
//# sourceMappingURL=ActionPanel.js.map