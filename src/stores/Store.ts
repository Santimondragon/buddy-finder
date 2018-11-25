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

                    const tempArray = this.hoodUsers.filter(criterio => criterio.temperatura >= 5);
                    this.tempHoodFilterArray = tempArray;

                    
                    const filteredArray = this.hoodUsers.filter(criterio => criterio.temperatura < 5);
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

                    const tempArray = this.hoodUsers.filter(criterio => criterio.cafe >= 5);
                    this.tempHoodFilterArray = tempArray;

                    
                    const filteredArray = this.hoodUsers.filter(criterio => criterio.cafe < 5);
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

                    const tempArray = this.hoodUsers.filter(criterio => criterio.tipo <= 5);
                    this.tempHoodFilterArray = tempArray;

                    
                    const filteredArray = this.hoodUsers.filter(criterio => criterio.cafe > 5);
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

                    const tempArray = this.hoodUsers.filter(criterio => criterio.tipo >= 5);
                    this.tempHoodFilterArray = tempArray;

                    
                    const filteredArray = this.hoodUsers.filter(criterio => criterio.cafe < 5);
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

                    const tempArray = this.hoodUsers.filter(criterio => criterio.espacio <= 5);
                    this.tempHoodFilterArray = tempArray;

                    
                    const filteredArray = this.hoodUsers.filter(criterio => criterio.espacio > 5);
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

                    const tempArray = this.hoodUsers.filter(criterio => criterio.espacio >= 5);
                    this.tempHoodFilterArray = tempArray;

                    
                    const filteredArray = this.hoodUsers.filter(criterio => criterio.espacio < 5);
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

            if (similarity >= .7 && comparedUser != selectedUser) {
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
}

export const store = new Store();