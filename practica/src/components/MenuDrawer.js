import React from 'react';

const MenuDrawer = () => {
    return (
        <div className="menu-drawer">
            <div className="text-center logo-container">
                <img
                    alt="Venatdos FC"
                    src="https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/10732/10732.png"
                    className="img-fluid"
                />
            </div>
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link" href="/">
                        Home
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/estadisticas">
                        Estadisticas
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/jugadores">
                        Jugadores
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default MenuDrawer;
