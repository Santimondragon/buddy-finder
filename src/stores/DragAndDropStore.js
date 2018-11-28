"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var DragAndDropStore = (function () {
    function DragAndDropStore() {
        this.filters = [
            {
                position: 1,
                filter: "",
            },
            {
                position: 2,
                filter: "",
            },
            {
                position: 3,
                filter: "",
            },
            {
                position: 4,
                filter: "",
            },
        ];
    }
    DragAndDropStore.prototype.setDraggedInfo = function (info) {
        this.draggedInfo = info;
    };
    DragAndDropStore.prototype.setDraggedBackground = function (backgroung) {
        this.draggedBackground = backgroung;
    };
    __decorate([
        mobx_1.observable
    ], DragAndDropStore.prototype, "filters", void 0);
    __decorate([
        mobx_1.observable
    ], DragAndDropStore.prototype, "draggedInfo", void 0);
    __decorate([
        mobx_1.action
    ], DragAndDropStore.prototype, "setDraggedInfo", null);
    __decorate([
        mobx_1.observable
    ], DragAndDropStore.prototype, "draggedBackground", void 0);
    __decorate([
        mobx_1.action
    ], DragAndDropStore.prototype, "setDraggedBackground", null);
    return DragAndDropStore;
}());
exports.dragAndDropStore = new DragAndDropStore();
//# sourceMappingURL=DragAndDropStore.js.map