import React from 'react';
import { imageVenados } from './Cons';

/**
 * Componente que pinta la información de un equipo
 *
 * @param object team Objecto con la información del equipo
 *
 */
const Team = ({ team, local }) => {
    return (
        <div>
            <div className="team-logo-container">
                <img
                    alt=""
                    src={local ? imageVenados : team.opponent_image}
                    className="team-logo img-fluid"
                />
            </div>
            <div>{local ? 'Venados F.C.' : team.opponent}</div>
        </div>
    );
};

export default Team;
