import Drawer from 'rc-drawer';
import React from 'react';
import MenuDrawer from './MenuDrawer';

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
            <div className="main">
                <Drawer
                    onChange={this.onChange}
                    open={this.state.open}
                    onMaskClick={this.onTouchEnd}
                    handler={false}
                    level={null}
                    width="20vw"
                >
                    <MenuDrawer />
                </Drawer>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <button onClick={this.onSwitch} className="btn">
                        <i className="fas fa-bars" />
                    </button>
                </nav>
            </div>
        );
    }
}

export default App;
