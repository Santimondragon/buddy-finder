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
                store.setPlaces();
                if (store.selectedUser == {} || store.selectedUser.nombreCompleto != "") {
                    document.getElementById("match").style.zIndex = "9999";
                    document.getElementById("match").style.opacity = "1";
                }
            }}
        >
            <img src={person.foto} alt="" />
            <div className="info">
                <div className="content">
                    <h1>{person.nombreCompleto}</h1>
                    <ul className="gustos">
                        <li>
                            <span>{person.temperatura}</span>
                            <img src="./assets/img/snowflake.png" alt="" />
                        </li>
                        <li>
                            <span>{person.tipo}</span>
                            <img src="./assets/img/new.png" alt="" />
                        </li>
                        <li>
                            <span>{person.espacio}</span>
                            <img src="./assets/img/team.png" alt="" />
                        </li>
                        <li>
                            <span>{person.cafe}</span>
                            <img src="./assets/img/coffee-cup.png" alt="" />
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