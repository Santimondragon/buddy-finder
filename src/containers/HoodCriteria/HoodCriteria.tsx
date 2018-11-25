import * as React from 'react';
import { observer } from 'mobx-react';
import { store } from '../../stores/Store';
import { withRouter } from 'react-router';

import './HoodCriteria.scss';
import CriteriaItem from '../../components/CriteriaItem/CriteriaItem';

interface criteriaProps {

}

const HoodCriteria = observer(withRouter((criteriaProps) => {
    return (
        <article id="hoodCriteria" className="notActive">
            <div id="criteriaActivator"
                onClick={() => {
                    document.getElementById("hoodCriteria").className === "notActive" ? document.getElementById("hoodCriteria").className = "active"  : document.getElementById("hoodCriteria").className = "notActive";
                    document.getElementById("hoodCriteria").className === "notActive" ? document.getElementById("criteriaActivator").innerHTML = "<span>Hood ▲</span>" :  document.getElementById("criteriaActivator").innerHTML = "<span>Hood ▼</span>";
                }}>
                <span>Hood ▲</span>
            </div>
                <ul>
                {store.hoodCriterios.map((elem: any, index: number) =>
                    <CriteriaItem content={elem} tipo={1}/>
                )}
                </ul>
        </article>
    )
}));

export default HoodCriteria;