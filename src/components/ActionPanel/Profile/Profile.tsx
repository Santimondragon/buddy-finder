import * as React from 'react';
import { observer } from 'mobx-react';
import { store } from '../../../stores/Store';
import { withRouter } from 'react-router';

import './Profile.scss';

interface profileProps {
    persona: any;
}

const Profile = observer(({ persona }: profileProps) => {
    return (
        <article id="profile" className="notActive" >
            <div>
                <img src="./assets/img/profileSlot.png" alt="Profile Slot" className="slot"
                    onClick={() => {
                        document.getElementById("profile").className === "notActive" ? document.getElementById("profile").className = "active" : document.getElementById("profile").className = "notActive";
                        store.clearAllArrays();
                    }} />
                <img src={store.selectedUser.foto} alt={store.selectedUser.nombreCompleto} className="thumbnail"
                    onClick={() => {
                        document.getElementById("profile").className === "notActive" ? document.getElementById("profile").className = "active" : document.getElementById("profile").className = "notActive";
                        store.clearAllArrays();
                    }} />
            </div>
            <h1>{store.selectedUser.nombreCompleto}</h1>
        </article>
    )
});

export default Profile;