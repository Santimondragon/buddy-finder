"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var mobx_react_1 = require("mobx-react");
var DragAndDropStore_1 = require("../../stores/DragAndDropStore");
var CriteriaItem = mobx_react_1.observer(function (_a) {
    var content = _a.content, tipo = _a.tipo;
    return (React.createElement("li", { draggable: true, onMouseDown: function (e) {
            e.target.style.cursor = "grabbing";
        }, onMouseUp: function (e) {
            e.target.style.cursor = "grab";
        }, onDragStart: function (e) {
            document.getElementById("hoodCriteria").className === "active" ? document.getElementById("hoodCriteria").style.opacity = "0" : document;
            document.getElementById("contextCriteria").className === "active" ? document.getElementById("contextCriteria").style.opacity = "0" : document;
            DragAndDropStore_1.dragAndDropStore.setDraggedInfo(e.target.innerHTML);
            if (tipo == 1) {
                DragAndDropStore_1.dragAndDropStore.setDraggedBackground("#2e3192");
            }
            else {
                DragAndDropStore_1.dragAndDropStore.setDraggedBackground("#00a99d");
            }
        }, onDragEnd: function (e) {
            document.getElementById("hoodCriteria").className === "active" ? document.getElementById("hoodCriteria").style.opacity = "1" : document;
            document.getElementById("contextCriteria").className === "active" ? document.getElementById("contextCriteria").style.opacity = "1" : document;
            DragAndDropStore_1.dragAndDropStore.setDraggedInfo("");
            DragAndDropStore_1.dragAndDropStore.setDraggedBackground("white");
        }, className: "criteriaItem" }, content));
});
exports.default = CriteriaItem;
//# sourceMappingURL=CriteriaItem.js.map