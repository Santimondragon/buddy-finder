import {
    observable,
    action,
    computed
} from 'mobx';
import {
    setupMaster
} from 'cluster';
import {
    dataBase
} from "../stores/dataBase"
import ContextCriteria from '../containers/ContextCriteria/ContextCriteria';
import Users from '../containers/Users/Users';


class Store {
    @observable users: any[] = dataBase.users;
    @action shuffleArray(array: any) {
        let l = array.length, temp, index;
        while (l > 0) {
            index = Math.floor(Math.random() * l);
            l--;
            temp = array[l];
            array[l] = array[index];
            array[index] = temp;
        }
        return array;
    }
    @action fillPlaces(array:any[]){
        array.forEach(place => {
            this.places.push(place.place);
        });
        console.log(array);
    }
    @observable contextCriterios: any[] = [
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
    @observable hoodCriterios: string[] = [
        "Quiero comer helado",
        "Quiero tomar Café",
        "Quiero comer Torta",
        "Quiero sabores Tradicionales",
        "Quiero sabores Nuevos y Extravagantes",
        "Quiero un lugar con poca Gente",
        "Quiero un lugar con mucha Gente",
    ];

    @observable hoodUsers: any[] = [];
    @observable filteredUsersOne: any[] = [];
    @observable filteredUsersTwo: any[] = [];
    @observable filteredUsersThree: any[] = [];
    @observable filteredUsersFour: any[] = [];
    @observable tempHoodFilterArray: any[] = this.users;

    @observable filterPrecision:number = 5;
    @action setFilterPresicion(value:number){
        this.filterPrecision = value;
    }
    @action setHoodUsers(criteria: string, position: number) {
        if (criteria.includes("clear")) {
            const value = criteria.replace("clear", "");

            if (position == 0) {
                this.hoodUsers.push.apply(this.hoodUsers, this.filteredUsersOne);
                console.log(this.filteredUsersOne)
                console.log("limpiando 1")
            } else if (position == 1) {
                this.hoodUsers.push.apply(this.hoodUsers, this.filteredUsersTwo);
                console.log(this.filteredUsersTwo)
                console.log("limpiando 2")
            } else if (position == 2) {
                this.hoodUsers.push.apply(this.hoodUsers, this.filteredUsersThree);
                console.log(this.filteredUsersThree)
                console.log("limpiando 3")
            } else if (position == 3) {
                this.hoodUsers.push.apply(this.hoodUsers, this.filteredUsersFour);
                console.log(this.filteredUsersFour)
                console.log("limpiando 4")
            }

        } else {
            this.contextCriterios.forEach(element => {
                let filtro: string = "";

                if (criteria == element.display) {
                    filtro = element.dontShow;

                    const tempArray = this.hoodUsers.filter(criterio => filtro != criterio.genero);
                    this.tempHoodFilterArray = tempArray;


                    const filteredArray = this.hoodUsers.filter(criterio => filtro == criterio.genero);
                    if (position == 0) {
                        this.filteredUsersOne = filteredArray;
                    } else if (position == 1) {
                        this.filteredUsersTwo = filteredArray;
                    } else if (position == 2) {
                        this.filteredUsersThree = filteredArray;
                    } else if (position == 3) {
                        this.filteredUsersFour = filteredArray;
                    }
                };
            });
            this.hoodCriterios.forEach(element => {
                let filtro: string = "";

                if (criteria.includes("helado")) {

                    const tempArray = this.hoodUsers.filter(criterio => criterio.temperatura >= this.filterPrecision);
                    this.tempHoodFilterArray = tempArray;
                    this.setCriteria("Helado");


                    const filteredArray = this.hoodUsers.filter(criterio => criterio.temperatura < this.filterPrecision);
                    if (position == 0) {
                        this.filteredUsersOne = filteredArray;
                    } else if (position == 1) {
                        this.filteredUsersTwo = filteredArray;
                    } else if (position == 2) {
                        this.filteredUsersThree = filteredArray;
                    } else if (position == 3) {
                        this.filteredUsersFour = filteredArray;
                    }
                };
                if (criteria.includes("Torta")) {

                    const tempArray = this.hoodUsers.filter(criterio => criterio.temperatura <= this.filterPrecision);
                    this.tempHoodFilterArray = tempArray;
                    this.setCriteria("Torta");

                    const filteredArray = this.hoodUsers.filter(criterio => criterio.temperatura > this.filterPrecision);
                    if (position == 0) {
                        this.filteredUsersOne = filteredArray;
                    } else if (position == 1) {
                        this.filteredUsersTwo = filteredArray;
                    } else if (position == 2) {
                        this.filteredUsersThree = filteredArray;
                    } else if (position == 3) {
                        this.filteredUsersFour = filteredArray;
                    }
                };
                if (criteria.includes("tomar")) {

                    const tempArray = this.hoodUsers.filter(criterio => criterio.cafe >= this.filterPrecision);
                    this.tempHoodFilterArray = tempArray;
                    this.setCriteria("Cafe");

                    const filteredArray = this.hoodUsers.filter(criterio => criterio.cafe < this.filterPrecision);
                    if (position == 0) {
                        this.filteredUsersOne = filteredArray;
                    } else if (position == 1) {
                        this.filteredUsersTwo = filteredArray;
                    } else if (position == 2) {
                        this.filteredUsersThree = filteredArray;
                    } else if (position == 3) {
                        this.filteredUsersFour = filteredArray;
                    }
                };
                if (criteria.includes("Tradicionales")) {

                    const tempArray = this.hoodUsers.filter(criterio => criterio.tipo <= this.filterPrecision);
                    this.tempHoodFilterArray = tempArray;


                    const filteredArray = this.hoodUsers.filter(criterio => criterio.cafe > this.filterPrecision);
                    if (position == 0) {
                        this.filteredUsersOne = filteredArray;
                    } else if (position == 1) {
                        this.filteredUsersTwo = filteredArray;
                    } else if (position == 2) {
                        this.filteredUsersThree = filteredArray;
                    } else if (position == 3) {
                        this.filteredUsersFour = filteredArray;
                    }
                };
                if (criteria.includes("Extravagantes")) {

                    const tempArray = this.hoodUsers.filter(criterio => criterio.tipo >= this.filterPrecision);
                    this.tempHoodFilterArray = tempArray;


                    const filteredArray = this.hoodUsers.filter(criterio => criterio.cafe < this.filterPrecision);
                    if (position == 0) {
                        this.filteredUsersOne = filteredArray;
                    } else if (position == 1) {
                        this.filteredUsersTwo = filteredArray;
                    } else if (position == 2) {
                        this.filteredUsersThree = filteredArray;
                    } else if (position == 3) {
                        this.filteredUsersFour = filteredArray;
                    }
                };
                if (criteria.includes("poca")) {

                    const tempArray = this.hoodUsers.filter(criterio => criterio.espacio <= this.filterPrecision);
                    this.tempHoodFilterArray = tempArray;
                    this.setCriteria("Poca");

                    const filteredArray = this.hoodUsers.filter(criterio => criterio.espacio > this.filterPrecision);
                    if (position == 0) {
                        this.filteredUsersOne = filteredArray;
                    } else if (position == 1) {
                        this.filteredUsersTwo = filteredArray;
                    } else if (position == 2) {
                        this.filteredUsersThree = filteredArray;
                    } else if (position == 3) {
                        this.filteredUsersFour = filteredArray;
                    }
                };
                if (criteria.includes("mucha")) {

                    const tempArray = this.hoodUsers.filter(criterio => criterio.espacio >= this.filterPrecision);
                    this.tempHoodFilterArray = tempArray;
                    this.setCriteria("Mucha");

                    const filteredArray = this.hoodUsers.filter(criterio => criterio.espacio < this.filterPrecision);
                    if (position == 0) {
                        this.filteredUsersOne = filteredArray;
                    } else if (position == 1) {
                        this.filteredUsersTwo = filteredArray;
                    } else if (position == 2) {
                        this.filteredUsersThree = filteredArray;
                    } else if (position == 3) {
                        this.filteredUsersFour = filteredArray;
                    }
                };
            });
            this.hoodUsers = this.tempHoodFilterArray;
        }
    }

    @observable similarity:number = 0.7;
    @action setSimilarity(value:number){
        this.similarity = value;
    }
    @action cosineSimilarity(selectedUser: any) {
        let selectedUserArray = [
            selectedUser.temperatura, selectedUser.frutas, selectedUser.tipo, selectedUser.espacio, selectedUser.cafe,
        ]
        this.hoodUsers = [];

        this.users.forEach(comparedUser => {
            let comparedUserArray = [
                comparedUser.temperatura, comparedUser.frutas, comparedUser.tipo, comparedUser.espacio, comparedUser.cafe,
            ]

            let multAB = 0;
            let powerA = 0;
            let powerB = 0;


            for (let index = 0; index < comparedUserArray.length; index++) {
                multAB = multAB + comparedUserArray[index] * selectedUserArray[index];
                powerA = powerA + comparedUserArray[index] * comparedUserArray[index]
                powerB = powerB + selectedUserArray[index] * selectedUserArray[index]
            }

            let similarity = multAB / Math.sqrt(powerA * powerB);

            
            if (similarity >= this.similarity && comparedUser != selectedUser) {
                comparedUser.similarity = similarity;
                this.hoodUsers.push(comparedUser);
            }
        });
    }

    @observable selectedUser: any = {
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
    @action setUser(user: any) {
        this.selectedUser = user;
    }
    @observable selectedHoodUser: any = {
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
    @action setHoodUser(user: any) {
        this.selectedHoodUser = user;
    }


    @observable criteria: string[] = [];
    @action setCriteria(criteria: string) {
        this.criteria.push(criteria);
    }
    @observable placesCriteria: any[] = [
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

    ]
    @observable places: any[] = []
    @action setPlaces() {
        this.placesCriteria.forEach(place => {
            this.places.push(place.place);
            this.criteria.forEach(criteria => {
                if (place.key1 == "No" && criteria == "No") {
                    this.places.push(place.place);
                }
                if (place.key2 == "Helado" && criteria == "Helado") {
                    this.places.push(place.place);
                }
                if (place.key3 == "Torta" && criteria == "Torta") {
                    this.places.push(place.place);
                }
                if (place.key4 == "Mucha" && criteria == "Mucha") {
                    this.places.push(place.place);
                }
                if (place.key4 == "Poca" && criteria == "Poca") {
                    this.places.push(place.place);
                }
                if (place.key3 == "No" && criteria == "No") {
                    this.places.push(place.place);
                }
                if (place.key4 == "Mucha" && criteria == "Mucha") {
                    this.places.push(place.place);
                }
                if (place.key4 == "Poca" && criteria == "Poca") {
                    this.places.push(place.place);
                }
                if (place.key2 == "No" && criteria == "No") {
                    this.places.push(place.place);
                }
                if (place.key3 == "Torta" && criteria == "Torta") {
                    this.places.push(place.place);
                }
                if (place.key4 == "Mucha" && criteria == "Mucha") {
                    this.places.push(place.place);
                }
                if (place.key4 == "Poca" && criteria == "Poca") {
                    this.places.push(place.place);
                }
                if (place.key3 == "No" && criteria == "No") {
                    this.places.push(place.place);
                }
                if (place.key4 == "Mucha" && criteria == "Mucha") {
                    this.places.push(place.place);
                }
                if (place.key4 == "Poca" && criteria == "Poca") {
                    this.places.push(place.place);
                }
                if (place.key1 == "Cafe" && criteria == "Cafe") {
                    this.places.push(place.place);
                }
                if (place.key2 == "Helado" && criteria == "Helado") {
                    this.places.push(place.place);
                }
                if (place.key3 == "Torta" && criteria == "Torta") {
                    this.places.push(place.place);
                }
                if (place.key4 == "Mucha" && criteria == "Mucha") {
                    this.places.push(place.place);
                }
                if (place.key4 == "Poca" && criteria == "Poca") {
                    this.places.push(place.place);
                }
                if (place.key3 == "No" && criteria == "No") {
                    this.places.push(place.place);
                }
                if (place.key4 == "Mucha" && criteria == "Mucha") {
                    this.places.push(place.place);
                }
                if (place.key4 == "Poca" && criteria == "Poca") {
                    this.places.push(place.place);
                }
                if (place.key2 == "No" && criteria == "No") {
                    this.places.push(place.place);
                }
                if (place.key3 == "Torta" && criteria == "Torta") {
                    this.places.push(place.place);
                }
                if (place.key4 == "Mucha" && criteria == "Mucha") {
                    this.places.push(place.place);
                }
                if (place.key4 == "Poca" && criteria == "Poca") {
                    this.places.push(place.place);
                }
                if (place.key3 == "No" && criteria == "No") {
                    this.places.push(place.place);
                }
                if (place.key4 == "Mucha" && criteria == "Mucha") {
                    this.places.push(place.place);
                }
                if (place.key4 == "Poca" && criteria == "Poca") {
                    this.places.push(place.place);
                }
            });
        });

    }
    @action clearPlaces() {
        this.places = [];
    }
    @action getPlace() {
        return this.places[Math.floor(Math.random() * this.places.length)];
    }

    //==== Clear Everething to be able to reestart =====
    @action clearAllArrays() {
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
    }
}

export const store = new Store();