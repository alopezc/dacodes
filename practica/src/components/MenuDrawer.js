import React from 'react';
import { Link } from 'react-router-dom';
import { imageVenados } from './Cons';

/**
 * Componente que pinta el menu lateral
 *
 * Se utilizá Link par poder realizar la navegación entre los componente
 * sin que el navegador recargue y vuelva a cargar assets de manera innecesaria
 */
class MenuDrawer extends React.Component {
    render() {
        return (
            <div className="menu-drawer">
                <div className="text-center logo-container">
                    <img
                        alt="Venatdos FC"
                        src={imageVenados}
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
                            to="/statistics"
                            onClick={this.props.onSwitch}
                        >
                            Estadísticas
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
