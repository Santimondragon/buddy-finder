import * as React from 'react';
import { observer } from 'mobx-react';
import { store } from '../../stores/Store';
import { withRouter } from 'react-router';

import './hoodUser.scss';

interface hoodUserProps {
    person: any;
    picture: string;
    genre: string;
}

const HoodUser = observer(({ person, picture, genre }: hoodUserProps) => {
    return (
        <article
            draggable
            className="hoodUser"
            onClick={() => {
                store.setHoodUser(person);
                document.getElementById("match").style.zIndex = "9999";
                document.getElementById("match").style.opacity = "1";
            }} 
        >
            <img src={person.foto} alt=""/>
            <div className="info">
                <div className="content">
                    <h1>{person.nombreCompleto}</h1>
                    <ul className="gustos">
                        <li>
                            <img src="./assets/img/snowflake.png" alt="" />
                            <span>{person.temperatura}</span>
                        </li>
                        <li>
                            <img src="./assets/img/harvest.png" alt="" />
                            <span>{person.frutas}</span>
                        </li>
                        <li>
                            <img src="./assets/img/new.png" alt="" />
                            <span>{person.tipo}</span>
                        </li>
                        <li>
                            <img src="./assets/img/team.png" alt="" />
                            <span>{person.espacio}</span>
                        </li>
                        <li>
                            <img src="./assets/img/coffee-cup.png" alt="" />
                            <span>{person.cafe}</span>
                        </li>
                    </ul>
                    <button
                        onClick={() => {
                            store.setHoodUser(person);
                            document.getElementById("match").style.zIndex = "9999";
                            document.getElementById("match").style.opacity = "1";
                        }}
                    >Select</button>
                </div>
            </div>
        </article>
    )
});

export default HoodUser;