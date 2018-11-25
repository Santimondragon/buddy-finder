import * as React from 'react';
import { observer } from 'mobx-react';
import { store } from '../../stores/Store';
import { withRouter } from 'react-router';

import './User.scss';

interface userProps {
    person: any;
    picture: string;
    genre: string;
}

const User = observer(({ person, picture, genre }: userProps) => {
    return (
        <article
            draggable
            className="user"
            onClick={() => {
                store.setUser(person);
                store.cosineSimilarity(store.selectedUser);
                document.getElementById("profile").className = "active";
            }}
        >
            <img src={person.foto} alt="" />
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
                            store.setUser(person);
                            store.cosineSimilarity(person);
                            document.getElementById("profile").className = "active";
                        }}
                    >Select</button>
                </div>
            </div>
        </article>
    )
});

export default User;