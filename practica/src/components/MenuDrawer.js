import React from 'react';
import { Link } from 'react-router-dom';

class MenuDrawer extends React.Component {
    render() {
        return (
            <div className="menu-drawer">
                <div className="text-center logo-container">
                    <img
                        alt="Venatdos FC"
                        src="https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/10732/10732.png"
                        className="img-fluid"
                    />
                </div>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            to="/"
                            onClick={this.props.onSwitch}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            to="/estadistics"
                            onClick={this.props.onSwitch}
                        >
                            Estadisticas
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            to="/players"
                            onClick={this.props.onSwitch}
                        >
                            Jugadores
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default MenuDrawer;
