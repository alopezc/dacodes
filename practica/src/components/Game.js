import React from 'react';
import { days } from './Cons';
import Team from './Team';

/**
 * Componente que pinta la información de un juego
 *
 * @param object game Objecto con la información del juego
 *
 */
const Game = ({ game }) => {
    let date = new Date(Date.parse(game.datetime));

    return (
        <div key={game.datetime} className="game-container">
            <div className="row align-items-start">
                <div className="col-2">
                    <div className="date-container">
                        <div
                            title="Add to Calendar"
                            className="addeventatc"
                            data-styling="none"
                        >
                            <i className="far fa-calendar-alt ico-calendar" />
                            <span className="start">
                                {date.toLocaleString()}
                            </span>
                            <span className="title">
                                Partido de los Venados F.C
                            </span>
                            <span className="timezone">Americas/Mexico</span>
                            <span className="all_day_event">false</span>
                        </div>
                        <div className="date-day">{date.getDate()}</div>
                        <div className="date-dayname">
                            {days[date.getDay()]}
                        </div>
                    </div>
                </div>
                <div className="col-5 team-info col-sm-3">
                    <div className="d-sm-none game-score">
                        {Math.abs(game.home_score)}
                    </div>
                    <Team team={game} local={game.local} />
                </div>
                <div className="col-4 d-none d-sm-block game-score">
                    {Math.abs(game.home_score)} - {Math.abs(game.away_score)}
                </div>
                <div className="col-5 team-info col-sm-3">
                    <div className="d-sm-none game-score">
                        {Math.abs(game.away_score)}
                    </div>
                    <Team team={game} local={!game.local} />
                </div>
            </div>
        </div>
    );
};

export default Game;
