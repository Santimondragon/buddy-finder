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
                store.clearAllArrays();
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