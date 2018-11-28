"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var mobx_react_1 = require("mobx-react");
var Store_1 = require("../../stores/Store");
require("./User.scss");
var User = mobx_react_1.observer(function (_a) {
    var person = _a.person, picture = _a.picture, genre = _a.genre;
    return (React.createElement("article", { draggable: true, className: "user", onClick: function () {
            Store_1.store.clearAllArrays();
            Store_1.store.setUser(person);
            Store_1.store.cosineSimilarity(Store_1.store.selectedUser);
            document.getElementById("profile").className = "active";
        } },
        React.createElement("img", { src: person.foto, alt: "" }),
        React.createElement("div", { className: "info" },
            React.createElement("div", { className: "content" },
                React.createElement("h1", null, person.nombreCompleto),
                React.createElement("ul", { className: "gustos" },
                    React.createElement("li", null,
                        React.createElement("span", null, person.temperatura),
                        React.createElement("img", { src: "./assets/img/snowflake.png", alt: "" })),
                    React.createElement("li", null,
                        React.createElement("span", null, person.tipo),
                        React.createElement("img", { src: "./assets/img/new.png", alt: "" })),
                    React.createElement("li", null,
                        React.createElement("span", null, person.espacio),
                        React.createElement("img", { src: "./assets/img/team.png", alt: "" })),
                    React.createElement("li", null,
                        React.createElement("span", null, person.cafe),
                        React.createElement("img", { src: "./assets/img/coffee-cup.png", alt: "" }))),
                React.createElement("button", { onClick: function () {
                        Store_1.store.setUser(person);
                        Store_1.store.cosineSimilarity(person);
                        document.getElementById("profile").className = "active";
                    } }, "Select")))));
});
exports.default = User;
//# sourceMappingURL=User.js.map