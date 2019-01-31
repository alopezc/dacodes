import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import Script from 'react-load-script';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import { fetchGames } from '../actions';
import Game from './Game';
import { months, imageVenados } from './Cons';

/**
 * Componente que pinta la del home}
 *
 * Se utliza el componente Script para montar el script que permite
 * agregar eventos al caledario, sino se usará al cambiar de componente
 * se pierde esta funcionalidad
 */
class Home extends React.Component {
    componentDidMount() {
        this.props.fetchGames();
    }

    /**
     * Metodo para pintar la lista de juegos
     *
     * @param [object] arreglo de juegos
     *
     */
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
                        {months[parseInt(yearMonth[1]) - 1]}
                    </h2>

                    {_.map(group, game => {
                        return <Game key={game.datetime} game={game} />;
                    })}
                </div>
            );
        });
    }

    handleScriptCreate() {
        this.setState({ scriptLoaded: false });
    }

    handleScriptError() {
        this.setState({ scriptError: true });
    }

    handleScriptLoad() {
        this.setState({ scriptLoaded: true });
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
                        src={imageVenados}
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

                <Script
                    url="//addevent.com/libs/atc/1.6.1/atc.min.js"
                    onCreate={this.handleScriptCreate.bind(this)}
                    onError={this.handleScriptError.bind(this)}
                    onLoad={this.handleScriptLoad.bind(this)}
                />
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
