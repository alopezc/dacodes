import Drawer from 'rc-drawer';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import MenuDrawer from './MenuDrawer';
import Statistics from './Statistics';
import Players from './Players';
import 'rc-drawer/assets/index.css';

/**
 * Punto de entrada a la aplicación
 *
 * BrowserRouter habilita la navegación entre componentes especificados en las etiquetas Route
 * Drawer permite emular el efecto drawer para el menú establecido en el componente MenuDrawer
 *
 */
class App extends React.Component {
    state = {
        open: false
    };

    onTouchEnd = () => {
        this.setState({
            open: false
        });
    };

    onSwitch = () => {
        this.setState({
            open: !this.state.open
        });
    };

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Drawer
                            onChange={this.onChange}
                            open={this.state.open}
                            onMaskClick={this.onTouchEnd}
                            handler={false}
                            level={null}
                            width="300px"
                        >
                            <MenuDrawer onSwitch={this.onSwitch} />
                        </Drawer>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container">
                                <button onClick={this.onSwitch} className="btn">
                                    <i className="fas fa-bars" />
                                </button>
                            </div>
                        </nav>
                        <div role="main">
                            <div className="container">
                                <div>
                                    <Route path="/" exact component={Home} />
                                    <Route
                                        path="/statistics"
                                        component={Statistics}
                                    />
                                    <Route
                                        path="/players"
                                        component={Players}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
