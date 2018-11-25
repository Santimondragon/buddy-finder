import * as React from 'react';
import { observer } from 'mobx-react';
import { store } from '../../stores/Store';
import { withRouter } from 'react-router';
import { dragAndDropStore } from '../../stores/DragAndDropStore';


interface criteriaItemProps {
    content: any;
    tipo: any;
}

const CriteriaItem = observer(({ content, tipo }: criteriaItemProps) => {
    return (

        <li
            draggable
            onMouseDown={(e: any) => {
                e.target.style.cursor = "grabbing"
            }}
            onMouseUp={(e: any) => {
                e.target.style.cursor = "grab"
            }}
            onDragStart={(e: any) => {
                document.getElementById("hoodCriteria").className === "active" ? document.getElementById("hoodCriteria").style.opacity = "0"  : document;
                document.getElementById("contextCriteria").className === "active" ? document.getElementById("contextCriteria").style.opacity = "0" : document;
                dragAndDropStore.setDraggedInfo(e.target.innerHTML);
                if (tipo == 1) {
                    dragAndDropStore.setDraggedBackground("#2e3192");
                } else {
                    dragAndDropStore.setDraggedBackground("#00a99d");
                }
            }}
            onDragEnd={(e: any) => {
                document.getElementById("hoodCriteria").className === "active" ? document.getElementById("hoodCriteria").style.opacity = "1"  : document;
                document.getElementById("contextCriteria").className === "active" ? document.getElementById("contextCriteria").style.opacity = "1" : document;
                dragAndDropStore.setDraggedInfo("");
                dragAndDropStore.setDraggedBackground("white");
            }}
            className="criteriaItem">
            {content}
        </li>
    )
});

export default CriteriaItem;