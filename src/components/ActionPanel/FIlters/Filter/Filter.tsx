import * as React from 'react';
import { observer } from 'mobx-react';
import { store } from '../../../../stores/Store';
import { withRouter } from 'react-router';

import { dragAndDropStore } from '../../../../stores/DragAndDropStore';

interface filterProps {
    background: string;
    content: string;
    used: boolean;
    value: string;
    position: number;
}

const Filter = observer(({ content, background, used, value, position }: filterProps) => {
    background = "white";
    console.log("loading")
    return (
        <article
            style={{
                backgroundColor: background
            }}
            onDragOver={(e: any) => {
                e.target.style.cursor = "hand"
                if (!used && dragAndDropStore.draggedInfo != "") {
                    value = dragAndDropStore.draggedInfo;
                    e.target.innerHTML = "<span>" + value + "</span>";
                    e.target.style.backgroundColor = dragAndDropStore.draggedBackground;
                    store.setHoodUsers(dragAndDropStore.draggedInfo, position);
                    used = true;
                }
                if(e.target.innerHTML == "<span></span>"){
                    used = false;
                }
            }}
            onDoubleClick={(e: any) => {
                store.setHoodUsers(value + "clear", position);
                console.log(value);
                value = "";
                e.target.innerHTML = "<span></span>";
                e.target.style.backgroundColor = "white";
                used = false;
            }}
            id={"filter"+position}>
            <span>{content}</span>
        </article>
    )
});

export default Filter;