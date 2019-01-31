import Drawer from 'rc-drawer';
import React from 'react';
import MenuDrawer from './MenuDrawer';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import Estadistics from './Estadistics';
import Players from './Players';

import 'rc-drawer/assets/index.css';

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
                                        path="/estadistics"
                                        component={Estadistics}
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
