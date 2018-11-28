import * as React from 'react';
import { observer } from 'mobx-react';
import { store } from '../../../stores/Store';
import { withRouter } from 'react-router';

import './Settings.scss';

interface iSettingsProps {
}

const Settings = observer(({ }: iSettingsProps) => {
    return (
        <article

            id="settings"
            className="notActive" >
            <div
                onClick={() => {
                    document.getElementById("settings").className === "notActive" ? document.getElementById("settings").className = "active" : document.getElementById("settings").className = "notActive";
                }}>
                <img src="./assets/img/settings.png" alt="" />
                <h4>Configuración</h4>
            </div>
            <ul>
                <article
                    onClick={() => {
                        document.getElementById("settings").className === "notActive" ? document.getElementById("settings").className = "active" : document.getElementById("settings").className = "notActive";
                    }}
                    id="close">
                    ×
                </article>
                <li>
                    <span>Nivel de Afinidad: <b>{Math.floor(store.similarity * 100)}%</b></span>
                    <article>
                        <label htmlFor="sAfinidad">0%</label>
                        <input
                            onChange={(e: any) => {
                                store.setSimilarity(e.target.value);
                                if (store.selectedUser.nombreCompleto != "") {
                                    if (store.filteredUsersOne.length >= 1) {
                                        alert("Una vez aplicado un filtro no puedes cambiar el nivel de afinidad")
                                        store.setSimilarity(store.similarity);
                                    } else {
                                        store.cosineSimilarity(store.selectedUser);
                                    }
                                }
                            }}
                            id="sAfinidad"
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={store.similarity} />
                        <label htmlFor="sAfinidad">100%</label>
                    </article>
                </li>
                <li>
                    <span>Precisión del Filtro: <b>{Math.floor(store.filterPrecision * 10)}%</b></span>
                    <article>
                        <label htmlFor="sFiltro">0%</label>
                        <input
                            onChange={(e: any) => {
                                store.setFilterPresicion(e.target.value);
                                
                            }}
                            id="sFiltro"
                            type="range"
                            min="0"
                            max="10"
                            step="1"
                            value={store.filterPrecision} />
                        <label htmlFor="sFiltro">100%</label>
                    </article>
                </li>
            </ul>
        </article>
    )
});

export default Settings;