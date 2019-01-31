import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchGames } from '../actions';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import Game from './Game';

class Home extends React.Component {
    months = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ];

    componentDidMount() {
        this.props.fetchGames();
    }

    renderList(games) {
        if (!games.length) {
            return (
                <div className="no-results">No se encontrarón resultados</div>
            );
        }

        let groupGames = _.groupBy(games, game => {
            return game.datetime.substring(0, 7);
        });

        return _.map(groupGames, (group, key) => {
            let yearMonth = key.split('-');

            return (
                <div key={key}>
                    <h2 className="month-separator">
                        {this.months[parseInt(yearMonth[1]) - 1]}
                    </h2>

                    {_.map(group, game => {
                        return <Game key={game.datetime} game={game} />;
                    })}
                </div>
            );
        });
    }

    render() {
        if (!this.props.games.length) {
            return null;
        }

        const gamesCopaMX = this.props.games.filter(game => {
            return game.league === 'COPA MX';
        });

        const ascensoMX = this.props.games.filter(game => {
            return game.league === 'Ascenso MX';
        });

        return (
            <div className="text-center">
                <div className="text-center logo-container-home">
                    <img
                        alt="Venatdos FC"
                        src="https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/10732/10732.png"
                        className="img-fluid"
                    />
                </div>
                <Tab.Container defaultActiveKey="first">
                    <Row>
                        <Col>
                            <Nav variant="pills">
                                <Nav.Item bsPrefix="col tab-league pr-0 pl-0">
                                    <Nav.Link eventKey="first">
                                        COPA MX
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item bsPrefix="col tab-league pl-0 pr-0">
                                    <Nav.Link eventKey="second">
                                        ASCENSO MX
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={12}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    {this.renderList(ascensoMX)}
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    {this.renderList(gamesCopaMX)}
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { games: state.games };
};

export default connect(
    mapStateToProps,
    { fetchGames }
)(Home);
