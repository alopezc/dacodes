import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchPlayers } from '../actions';
import { Modal } from 'react-bootstrap';
import Player from './Player';

class Players extends React.Component {
    state = { selectPlayer: null, show: false };

    componentDidMount() {
        this.props.fetchPlayers();
    }

    handleClickPlayer(player) {
        this.setState({ selectPlayer: player });
        this.handleShow();
    }

    handleClose = () => {
        this.setState({ show: false });
    };

    handleShow = () => {
        this.setState({ show: true });
    };

    renderList(positions) {
        return _.map(positions[0], (players, key) => {
            return (
                <div key={key}>
                    <div className="text-center">
                        <h3 className="players-position text-center">{key}</h3>
                    </div>
                    <div className="row justify-content-center">
                        {_.map(players, player => {
                            return (
                                <div
                                    className="col-6 col-sm-4 text-center"
                                    onClick={() => {
                                        this.handleClickPlayer(player);
                                    }}
                                    key={player.image}
                                >
                                    <Player player={player} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        });
    }

    renderModal() {
        if (!this.state.selectPlayer) {
            return null;
        }

        let player = this.state.selectPlayer;
        let date = new Date(Date.parse(player.birthday));

        return (
            <>
                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    aria-labelledby="contained-modal-title-vcenter"
                    dialogClassName="modal-player"
                    centered
                >
                    <Modal.Body>
                        <div className="text-center">
                            <div className="modal-player-top-container">
                                <h2>FICHA TÉCNICA</h2>
                                <Player player={player} />
                            </div>
                            <div className="modal-player-bottom-container">
                                <h4>FECHA DE NACIMIENTO</h4>
                                <p>
                                    {date.getDay()}/{date.getMonth()}/
                                    {date.getFullYear()}
                                </p>
                                <h4>LUGAR DE NACIMIENTO</h4>
                                <p>{player.birth_place}</p>
                                <h4>PESO</h4>
                                <p>{player.weight} kg</p>
                                <h4>ALTURA</h4>
                                <p>{player.height} m</p>
                                <h4>EQUIPO ANTERIOR</h4>
                                <p>{player.last_team}</p>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </>
        );
    }

    render() {
        if (!this.props.players.length) {
            return null;
        }

        return (
            <div className="players">
                <h2 className="text-center">Jugadores</h2>

                {this.renderList(this.props.players)}

                {this.renderModal()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { players: state.players };
};

export default connect(
    mapStateToProps,
    { fetchPlayers }
)(Players);
