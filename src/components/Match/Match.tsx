import * as React from 'react';
import { observer } from 'mobx-react';
import { store } from '../../stores/Store';
import { withRouter } from 'react-router';

import './Match.scss';

interface matchProps {
}

const Match = observer(({ }: matchProps) => {
    return (
        <article id="match" >
            <section className="modal">
                <div onClick={() => {
                    document.getElementById("match").style.zIndex = "-999";
                    document.getElementById("match").style.opacity = "0";
                    store.setHoodUser({});
                    store.setUser({});
                    document.getElementById("profile").className = "notActive";
                    
                }} id="close"></div>
                <section className="profiles">
                    <article>
                        <img src="./assets/img/profileSlot.png" alt="Profile Slot" />
                        <img src={store.selectedUser.foto} alt={store.selectedUser.nombreCompleto} className="selected" />
                        <h1>{store.selectedUser.nombreCompleto}</h1>
                    </article>
                    <h2>♥</h2>
                    <article>
                        <img src="./assets/img/profileSlot.png" alt="Profile Slot" />
                        <img src={store.selectedHoodUser.foto} alt={store.selectedHoodUser.nombreCompleto} className="finded" />
                        <h1>{store.selectedHoodUser.nombreCompleto}</h1>
                    </article>
                </section>
                <section className="recomendation">
                    <h1>¡Te Recomendamos...!</h1>
                    <h1 id="place">STORIA D'AMORE</h1>
                </section>
            </section>
        </article>
    )
});

export default Match;