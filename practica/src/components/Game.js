import React from 'react';
import { days, imageVenados } from './Cons';

const Game = ({ game }) => {
    let date = new Date(Date.parse(game.datetime));

    return (
        <div key={game.datetime} className="game-container">
            <div className="row align-items-center">
                <div className="col">
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
                <div className="col team-info">
                    <img
                        alt=""
                        src={game.local ? imageVenados : game.opponent_image}
                        className="team-logo"
                    />
                    <div>{game.local ? 'Venados F.C.' : game.opponent}</div>
                </div>
                <div className="col">
                    {Math.abs(game.home_score)} - {Math.abs(game.away_score)}
                </div>
                <div className="col team-info">
                    <img
                        alt=""
                        src={!game.local ? imageVenados : game.opponent_image}
                        className="team-logo"
                    />
                    <div>{!game.local ? 'Venados F.C.' : game.opponent}</div>
                </div>
            </div>
        </div>
    );
};

export default Game;
