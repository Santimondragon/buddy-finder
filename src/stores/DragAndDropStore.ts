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


class DragAndDropStore {
    @observable filters: any[] = [
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

    @observable draggedInfo: string;
    @action setDraggedInfo(info: string) {
        this.draggedInfo = info;
    }

    @observable draggedBackground: string;
    @action setDraggedBackground(backgroung: string) {
        this.draggedBackground = backgroung;
    }

}

export const dragAndDropStore = new DragAndDropStore();