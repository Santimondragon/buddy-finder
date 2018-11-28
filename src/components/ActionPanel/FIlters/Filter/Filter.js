"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var mobx_react_1 = require("mobx-react");
var Store_1 = require("../../../../stores/Store");
var DragAndDropStore_1 = require("../../../../stores/DragAndDropStore");
var Filter = mobx_react_1.observer(function (_a) {
    var content = _a.content, background = _a.background, used = _a.used, value = _a.value, position = _a.position;
    background = "white";
    console.log("loading");
    return (React.createElement("article", { style: {
            backgroundColor: background
        }, onDragOver: function (e) {
            e.target.style.cursor = "hand";
            if (!used && DragAndDropStore_1.dragAndDropStore.draggedInfo != "") {
                value = DragAndDropStore_1.dragAndDropStore.draggedInfo;
                e.target.innerHTML = "<span>" + value + "</span>";
                e.target.style.backgroundColor = DragAndDropStore_1.dragAndDropStore.draggedBackground;
                Store_1.store.setHoodUsers(DragAndDropStore_1.dragAndDropStore.draggedInfo, position);
                used = true;
            }
            if (e.target.innerHTML == "<span></span>") {
                used = false;
            }
        }, onDoubleClick: function (e) {
            Store_1.store.setHoodUsers(value + "clear", position);
            console.log(value);
            value = "";
            e.target.innerHTML = "<span></span>";
            e.target.style.backgroundColor = "white";
            used = false;
        }, id: "filter" + position },
        React.createElement("span", null, content)));
});
exports.default = Filter;
//# sourceMappingURL=Filter.js.map