import * as React from 'react';
import { observer } from 'mobx-react';
import { store } from '../../stores/Store';
import { withRouter } from 'react-router';

import './ContextCriteria.scss';
import CriteriaItem from '../../components/CriteriaItem/CriteriaItem';

interface criteriaProps {

}

const ContextCriteria = observer(withRouter((criteriaProps) => {
    return (
        <article id="contextCriteria" className="notActive">
            <div id="contextCriteriaActivator"
                onClick={() => {
                    document.getElementById("contextCriteria").className === "notActive" ? document.getElementById("contextCriteria").className = "active"  : document.getElementById("contextCriteria").className = "notActive";
                    document.getElementById("contextCriteria").className === "notActive" ? document.getElementById("contextCriteriaActivator").innerHTML = "<span>Contexto ▲</span>" :  document.getElementById("contextCriteriaActivator").innerHTML = "<span>Contexto ▼</span>";
                }}>
                <span>Contexto ▲</span>
            </div>
                <ul>
                {store.contextCriterios.map((elem: any, index: number) =>
                    <CriteriaItem content={elem.display} tipo={2}/>
                )}
                </ul>
        </article>
    )
}));

export default ContextCriteria;