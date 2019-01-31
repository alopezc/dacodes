import React from 'react';

/**
 * Componente que pinta la información basica del jugador
 */
class Player extends React.Component {
    playerName = this.props.player.name + ' ' + this.props.player.first_surname;

    render() {
        return (
            <div className="player">
                <div className="player-picture">
                    <img
                        src={this.props.player.image}
                        alt={this.playerName}
                        className="img-fluid"
                    />
                </div>
                <div>{this.props.player.position}</div>
                <div>{this.playerName}</div>
            </div>
        );
    }
}

export default Player;
