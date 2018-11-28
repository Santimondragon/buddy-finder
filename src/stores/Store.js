"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var dataBase_1 = require("../stores/dataBase");
var Store = (function () {
    function Store() {
        this.users = dataBase_1.dataBase.users;
        this.contextCriterios = [
            {
                display: "Quiero salir con un hombre",
                dontShow: "f",
            },
            {
                display: "Quiero salir con una mujer",
                dontShow: "m",
            },
            {
                display: "Me es indiferente si es hombre o mujer",
                dontShow: "none",
            }
        ];
        this.hoodCriterios = [
            "Quiero comer helado",
            "Quiero tomar Café",
            "Quiero comer Torta",
            "Quiero sabores Tradicionales",
            "Quiero sabores Nuevos y Extravagantes",
            "Quiero un lugar con poca Gente",
            "Quiero un lugar con mucha Gente",
        ];
        this.hoodUsers = [];
        this.filteredUsersOne = [];
        this.filteredUsersTwo = [];
        this.filteredUsersThree = [];
        this.filteredUsersFour = [];
        this.tempHoodFilterArray = this.users;
        this.filterPrecision = 5;
        this.similarity = 0.7;
        this.selectedUser = {
            "nombreCompleto": "",
            "nombre": "",
            "segundoNombre": "",
            "apellido": "",
            "genero": "",
            "foto": "",
            "cedula": 0,
            "temperatura": 0,
            "consistencia": 0,
            "frutas": 0,
            "tipo": 0,
            "dulce": 0,
            "agridulce": 0,
            "salado": 0
        };
        this.selectedHoodUser = {
            "nombreCompleto": "",
            "nombre": "",
            "segundoNombre": "",
            "apellido": "",
            "genero": "",
            "foto": "",
            "cedula": 0,
            "temperatura": 0,
            "consistencia": 0,
            "frutas": 0,
            "tipo": 0,
            "dulce": 0,
            "agridulce": 0,
            "salado": 0
        };
        this.criteria = [];
        this.placesCriteria = [
            {
                place: "Juan Valdez",
                key1: "Cafe",
                key2: "Helado",
                key3: "Torta",
                key4: "Mucha"
            },
            {
                place: "Ventolinni",
                key1: "Cafe",
                key2: "Helado",
                key3: "Torta",
                key4: "Mucha"
            },
            {
                place: "Starbucks",
                key1: "Cafe",
                key2: "Helado",
                key3: "Torta",
                key4: "Mucha"
            },
            {
                place: "Storia D'amore",
                key1: "Cafe",
                key2: "Helado",
                key3: "Torta",
                key4: "Mucha"
            },
            {
                place: "Pan del Italiano",
                key1: "Cafe",
                key2: "Helado",
                key3: "Torta",
                key4: "Poca"
            },
            {
                place: "Galatea",
                key1: "Cafe",
                key2: "Helado",
                key3: "Torta",
                key4: "Poca"
            },
            {
                place: "Librería Nacional",
                key1: "Cafe",
                key2: "Helado",
                key3: "Torta",
                key4: "Poca"
            },
            {
                place: "Más Brownies",
                key1: "No",
                key2: "Helado",
                key3: "Torta",
                key4: "Poca"
            },
            {
                place: "Cookie Jar",
                key1: "No",
                key2: "Helado",
                key3: "Torta",
                key4: "Mucha"
            },
            {
                place: "Dolce Stella",
                key1: "No",
                key2: "Helado",
                key3: "Torta",
                key4: "Poca"
            },
            {
                place: "Wonka",
                key1: "No",
                key2: "Helado",
                key3: "Torta",
                key4: "Mucha"
            },
            {
                place: "Fiore",
                key1: "Cafe",
                key2: "Helado",
                key3: "No",
                key4: "Mucha"
            },
            {
                place: "Dolce Vicolo",
                key1: "Cafe",
                key2: "Helado",
                key3: "No",
                key4: "Mucha"
            },
            {
                place: "Creppes & Waffles",
                key1: "Cafe",
                key2: "Helado",
                key3: "No",
                key4: "Mucha"
            },
            {
                place: "Tierradentro Cafe",
                key1: "Cafe",
                key2: "Helado",
                key3: "No",
                key4: "Poca"
            },
            {
                place: "Elsa Café",
                key1: "Cafe",
                key2: "Helado",
                key3: "No",
                key4: "Poca"
            },
            {
                place: "Corinna",
                key1: "Cafe",
                key2: "Helado",
                key3: "No",
                key4: "Mucha"
            },
            {
                place: "El Molino",
                key1: "Cafe",
                key2: "No",
                key3: "Torta",
                key4: "Mucha"
            },
            {
                place: "Tostao",
                key1: "Cafe",
                key2: "No",
                key3: "Torta",
                key4: "Mucha"
            },
            {
                place: "Ananda",
                key1: "Cafe",
                key2: "No",
                key3: "Torta",
                key4: "Poca"
            },
            {
                place: "El Patio del Museo",
                key1: "Cafe",
                key2: "No",
                key3: "Torta",
                key4: "Poca"
            },
        ];
        this.places = [];
    }
    Store.prototype.shuffleArray = function (array) {
        var l = array.length, temp, index;
        while (l > 0) {
            index = Math.floor(Math.random() * l);
            l--;
            temp = array[l];
            array[l] = array[index];
            array[index] = temp;
        }
        return array;
    };
    Store.prototype.fillPlaces = function (array) {
        var _this = this;
        array.forEach(function (place) {
            _this.places.push(place.place);
        });
        console.log(array);
    };
    Store.prototype.setFilterPresicion = function (value) {
        this.filterPrecision = value;
    };
    Store.prototype.setHoodUsers = function (criteria, position) {
        var _this = this;
        if (criteria.includes("clear")) {
            var value = criteria.replace("clear", "");
            if (position == 0) {
                this.hoodUsers.push.apply(this.hoodUsers, this.filteredUsersOne);
                console.log(this.filteredUsersOne);
                console.log("limpiando 1");
            }
            else if (position == 1) {
                this.hoodUsers.push.apply(this.hoodUsers, this.filteredUsersTwo);
                console.log(this.filteredUsersTwo);
                console.log("limpiando 2");
            }
            else if (position == 2) {
                this.hoodUsers.push.apply(this.hoodUsers, this.filteredUsersThree);
                console.log(this.filteredUsersThree);
                console.log("limpiando 3");
            }
            else if (position == 3) {
                this.hoodUsers.push.apply(this.hoodUsers, this.filteredUsersFour);
                console.log(this.filteredUsersFour);
                console.log("limpiando 4");
            }
        }
        else {
            this.contextCriterios.forEach(function (element) {
                var filtro = "";
                if (criteria == element.display) {
                    filtro = element.dontShow;
                    var tempArray = _this.hoodUsers.filter(function (criterio) { return filtro != criterio.genero; });
                    _this.tempHoodFilterArray = tempArray;
                    var filteredArray = _this.hoodUsers.filter(function (criterio) { return filtro == criterio.genero; });
                    if (position == 0) {
                        _this.filteredUsersOne = filteredArray;
                    }
                    else if (position == 1) {
                        _this.filteredUsersTwo = filteredArray;
                    }
                    else if (position == 2) {
                        _this.filteredUsersThree = filteredArray;
                    }
                    else if (position == 3) {
                        _this.filteredUsersFour = filteredArray;
                    }
                }
                ;
            });
            this.hoodCriterios.forEach(function (element) {
                var filtro = "";
                if (criteria.includes("helado")) {
                    var tempArray = _this.hoodUsers.filter(function (criterio) { return criterio.temperatura >= _this.filterPrecision; });
                    _this.tempHoodFilterArray = tempArray;
                    _this.setCriteria("Helado");
                    var filteredArray = _this.hoodUsers.filter(function (criterio) { return criterio.temperatura < _this.filterPrecision; });
                    if (position == 0) {
                        _this.filteredUsersOne = filteredArray;
                    }
                    else if (position == 1) {
                        _this.filteredUsersTwo = filteredArray;
                    }
                    else if (position == 2) {
                        _this.filteredUsersThree = filteredArray;
                    }
                    else if (position == 3) {
                        _this.filteredUsersFour = filteredArray;
                    }
                }
                ;
                if (criteria.includes("Torta")) {
                    var tempArray = _this.hoodUsers.filter(function (criterio) { return criterio.temperatura <= _this.filterPrecision; });
                    _this.tempHoodFilterArray = tempArray;
                    _this.setCriteria("Torta");
                    var filteredArray = _this.hoodUsers.filter(function (criterio) { return criterio.temperatura > _this.filterPrecision; });
                    if (position == 0) {
                        _this.filteredUsersOne = filteredArray;
                    }
                    else if (position == 1) {
                        _this.filteredUsersTwo = filteredArray;
                    }
                    else if (position == 2) {
                        _this.filteredUsersThree = filteredArray;
                    }
                    else if (position == 3) {
                        _this.filteredUsersFour = filteredArray;
                    }
                }
                ;
                if (criteria.includes("tomar")) {
                    var tempArray = _this.hoodUsers.filter(function (criterio) { return criterio.cafe >= _this.filterPrecision; });
                    _this.tempHoodFilterArray = tempArray;
                    _this.setCriteria("Cafe");
                    var filteredArray = _this.hoodUsers.filter(function (criterio) { return criterio.cafe < _this.filterPrecision; });
                    if (position == 0) {
                        _this.filteredUsersOne = filteredArray;
                    }
                    else if (position == 1) {
                        _this.filteredUsersTwo = filteredArray;
                    }
                    else if (position == 2) {
                        _this.filteredUsersThree = filteredArray;
                    }
                    else if (position == 3) {
                        _this.filteredUsersFour = filteredArray;
                    }
                }
                ;
                if (criteria.includes("Tradicionales")) {
                    var tempArray = _this.hoodUsers.filter(function (criterio) { return criterio.tipo <= _this.filterPrecision; });
                    _this.tempHoodFilterArray = tempArray;
                    var filteredArray = _this.hoodUsers.filter(function (criterio) { return criterio.cafe > _this.filterPrecision; });
                    if (position == 0) {
                        _this.filteredUsersOne = filteredArray;
                    }
                    else if (position == 1) {
                        _this.filteredUsersTwo = filteredArray;
                    }
                    else if (position == 2) {
                        _this.filteredUsersThree = filteredArray;
                    }
                    else if (position == 3) {
                        _this.filteredUsersFour = filteredArray;
                    }
                }
                ;
                if (criteria.includes("Extravagantes")) {
                    var tempArray = _this.hoodUsers.filter(function (criterio) { return criterio.tipo >= _this.filterPrecision; });
                    _this.tempHoodFilterArray = tempArray;
                    var filteredArray = _this.hoodUsers.filter(function (criterio) { return criterio.cafe < _this.filterPrecision; });
                    if (position == 0) {
                        _this.filteredUsersOne = filteredArray;
                    }
                    else if (position == 1) {
                        _this.filteredUsersTwo = filteredArray;
                    }
                    else if (position == 2) {
                        _this.filteredUsersThree = filteredArray;
                    }
                    else if (position == 3) {
                        _this.filteredUsersFour = filteredArray;
                    }
                }
                ;
                if (criteria.includes("poca")) {
                    var tempArray = _this.hoodUsers.filter(function (criterio) { return criterio.espacio <= _this.filterPrecision; });
                    _this.tempHoodFilterArray = tempArray;
                    _this.setCriteria("Poca");
                    var filteredArray = _this.hoodUsers.filter(function (criterio) { return criterio.espacio > _this.filterPrecision; });
                    if (position == 0) {
                        _this.filteredUsersOne = filteredArray;
                    }
                    else if (position == 1) {
                        _this.filteredUsersTwo = filteredArray;
                    }
                    else if (position == 2) {
                        _this.filteredUsersThree = filteredArray;
                    }
                    else if (position == 3) {
                        _this.filteredUsersFour = filteredArray;
                    }
                }
                ;
                if (criteria.includes("mucha")) {
                    var tempArray = _this.hoodUsers.filter(function (criterio) { return criterio.espacio >= _this.filterPrecision; });
                    _this.tempHoodFilterArray = tempArray;
                    _this.setCriteria("Mucha");
                    var filteredArray = _this.hoodUsers.filter(function (criterio) { return criterio.espacio < _this.filterPrecision; });
                    if (position == 0) {
                        _this.filteredUsersOne = filteredArray;
                    }
                    else if (position == 1) {
                        _this.filteredUsersTwo = filteredArray;
                    }
                    else if (position == 2) {
                        _this.filteredUsersThree = filteredArray;
                    }
                    else if (position == 3) {
                        _this.filteredUsersFour = filteredArray;
                    }
                }
                ;
            });
            this.hoodUsers = this.tempHoodFilterArray;
        }
    };
    Store.prototype.setSimilarity = function (value) {
        this.similarity = value;
    };
    Store.prototype.cosineSimilarity = function (selectedUser) {
        var _this = this;
        var selectedUserArray = [
            selectedUser.temperatura, selectedUser.frutas, selectedUser.tipo, selectedUser.espacio, selectedUser.cafe,
        ];
        this.hoodUsers = [];
        this.users.forEach(function (comparedUser) {
            var comparedUserArray = [
                comparedUser.temperatura, comparedUser.frutas, comparedUser.tipo, comparedUser.espacio, comparedUser.cafe,
            ];
            var multAB = 0;
            var powerA = 0;
            var powerB = 0;
            for (var index = 0; index < comparedUserArray.length; index++) {
                multAB = multAB + comparedUserArray[index] * selectedUserArray[index];
                powerA = powerA + comparedUserArray[index] * comparedUserArray[index];
                powerB = powerB + selectedUserArray[index] * selectedUserArray[index];
            }
            var similarity = multAB / Math.sqrt(powerA * powerB);
            if (similarity >= _this.similarity && comparedUser != selectedUser) {
                comparedUser.similarity = similarity;
                _this.hoodUsers.push(comparedUser);
            }
        });
    };
    Store.prototype.setUser = function (user) {
        this.selectedUser = user;
    };
    Store.prototype.setHoodUser = function (user) {
        this.selectedHoodUser = user;
    };
    Store.prototype.setCriteria = function (criteria) {
        this.criteria.push(criteria);
    };
    Store.prototype.setPlaces = function () {
        var _this = this;
        this.placesCriteria.forEach(function (place) {
            _this.places.push(place.place);
            _this.criteria.forEach(function (criteria) {
                if (place.key1 == "No" && criteria == "No") {
                    _this.places.push(place.place);
                }
                if (place.key2 == "Helado" && criteria == "Helado") {
                    _this.places.push(place.place);
                }
                if (place.key3 == "Torta" && criteria == "Torta") {
                    _this.places.push(place.place);
                }
                if (place.key4 == "Mucha" && criteria == "Mucha") {
                    _this.places.push(place.place);
                }
                if (place.key4 == "Poca" && criteria == "Poca") {
                    _this.places.push(place.place);
                }
                if (place.key3 == "No" && criteria == "No") {
                    _this.places.push(place.place);
                }
                if (place.key4 == "Mucha" && criteria == "Mucha") {
                    _this.places.push(place.place);
                }
                if (place.key4 == "Poca" && criteria == "Poca") {
                    _this.places.push(place.place);
                }
                if (place.key2 == "No" && criteria == "No") {
                    _this.places.push(place.place);
                }
                if (place.key3 == "Torta" && criteria == "Torta") {
                    _this.places.push(place.place);
                }
                if (place.key4 == "Mucha" && criteria == "Mucha") {
                    _this.places.push(place.place);
                }
                if (place.key4 == "Poca" && criteria == "Poca") {
                    _this.places.push(place.place);
                }
                if (place.key3 == "No" && criteria == "No") {
                    _this.places.push(place.place);
                }
                if (place.key4 == "Mucha" && criteria == "Mucha") {
                    _this.places.push(place.place);
                }
                if (place.key4 == "Poca" && criteria == "Poca") {
                    _this.places.push(place.place);
                }
                if (place.key1 == "Cafe" && criteria == "Cafe") {
                    _this.places.push(place.place);
                }
                if (place.key2 == "Helado" && criteria == "Helado") {
                    _this.places.push(place.place);
                }
                if (place.key3 == "Torta" && criteria == "Torta") {
                    _this.places.push(place.place);
                }
                if (place.key4 == "Mucha" && criteria == "Mucha") {
                    _this.places.push(place.place);
                }
                if (place.key4 == "Poca" && criteria == "Poca") {
                    _this.places.push(place.place);
                }
                if (place.key3 == "No" && criteria == "No") {
                    _this.places.push(place.place);
                }
                if (place.key4 == "Mucha" && criteria == "Mucha") {
                    _this.places.push(place.place);
                }
                if (place.key4 == "Poca" && criteria == "Poca") {
                    _this.places.push(place.place);
                }
                if (place.key2 == "No" && criteria == "No") {
                    _this.places.push(place.place);
                }
                if (place.key3 == "Torta" && criteria == "Torta") {
                    _this.places.push(place.place);
                }
                if (place.key4 == "Mucha" && criteria == "Mucha") {
                    _this.places.push(place.place);
                }
                if (place.key4 == "Poca" && criteria == "Poca") {
                    _this.places.push(place.place);
                }
                if (place.key3 == "No" && criteria == "No") {
                    _this.places.push(place.place);
                }
                if (place.key4 == "Mucha" && criteria == "Mucha") {
                    _this.places.push(place.place);
                }
                if (place.key4 == "Poca" && criteria == "Poca") {
                    _this.places.push(place.place);
                }
            });
        });
    };
    Store.prototype.clearPlaces = function () {
        this.places = [];
    };
    Store.prototype.getPlace = function () {
        return this.places[Math.floor(Math.random() * this.places.length)];
    };
    Store.prototype.clearAllArrays = function () {
        this.filteredUsersOne = [];
        this.filteredUsersTwo = [];
        this.filteredUsersThree = [];
        this.filteredUsersFour = [];
        this.tempHoodFilterArray = [];
        this.hoodUsers = [];
        this.places = [];
        this.selectedUser = {};
        this.selectedHoodUser = {};
        document.getElementById("filter0").style.background = "white";
        document.getElementById("filter1").style.background = "white";
        document.getElementById("filter2").style.background = "white";
        document.getElementById("filter3").style.background = "white";
        document.getElementById("filter0").innerHTML = "<span></span>";
        document.getElementById("filter1").innerHTML = "<span></span>";
        document.getElementById("filter2").innerHTML = "<span></span>";
        document.getElementById("filter3").innerHTML = "<span></span>";
    };
    __decorate([
        mobx_1.observable
    ], Store.prototype, "users", void 0);
    __decorate([
        mobx_1.action
    ], Store.prototype, "shuffleArray", null);
    __decorate([
        mobx_1.action
    ], Store.prototype, "fillPlaces", null);
    __decorate([
        mobx_1.observable
    ], Store.prototype, "contextCriterios", void 0);
    __decorate([
        mobx_1.observable
    ], Store.prototype, "hoodCriterios", void 0);
    __decorate([
        mobx_1.observable
    ], Store.prototype, "hoodUsers", void 0);
    __decorate([
        mobx_1.observable
    ], Store.prototype, "filteredUsersOne", void 0);
    __decorate([
        mobx_1.observable
    ], Store.prototype, "filteredUsersTwo", void 0);
    __decorate([
        mobx_1.observable
    ], Store.prototype, "filteredUsersThree", void 0);
    __decorate([
        mobx_1.observable
    ], Store.prototype, "filteredUsersFour", void 0);
    __decorate([
        mobx_1.observable
    ], Store.prototype, "tempHoodFilterArray", void 0);
    __decorate([
        mobx_1.observable
    ], Store.prototype, "filterPrecision", void 0);
    __decorate([
        mobx_1.action
    ], Store.prototype, "setFilterPresicion", null);
    __decorate([
        mobx_1.action
    ], Store.prototype, "setHoodUsers", null);
    __decorate([
        mobx_1.observable
    ], Store.prototype, "similarity", void 0);
    __decorate([
        mobx_1.action
    ], Store.prototype, "setSimilarity", null);
    __decorate([
        mobx_1.action
    ], Store.prototype, "cosineSimilarity", null);
    __decorate([
        mobx_1.observable
    ], Store.prototype, "selectedUser", void 0);
    __decorate([
        mobx_1.action
    ], Store.prototype, "setUser", null);
    __decorate([
        mobx_1.observable
    ], Store.prototype, "selectedHoodUser", void 0);
    __decorate([
        mobx_1.action
    ], Store.prototype, "setHoodUser", null);
    __decorate([
        mobx_1.observable
    ], Store.prototype, "criteria", void 0);
    __decorate([
        mobx_1.action
    ], Store.prototype, "setCriteria", null);
    __decorate([
        mobx_1.observable
    ], Store.prototype, "placesCriteria", void 0);
    __decorate([
        mobx_1.observable
    ], Store.prototype, "places", void 0);
    __decorate([
        mobx_1.action
    ], Store.prototype, "setPlaces", null);
    __decorate([
        mobx_1.action
    ], Store.prototype, "clearPlaces", null);
    __decorate([
        mobx_1.action
    ], Store.prototype, "getPlace", null);
    __decorate([
        mobx_1.action
    ], Store.prototype, "clearAllArrays", null);
    return Store;
}());
exports.store = new Store();
//# sourceMappingURL=Store.js.map