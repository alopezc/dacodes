import React from 'react';
import { Table } from 'react-bootstrap';
import { imageVenados } from './Cons';

class Statistics extends React.Component {
    render() {
        return (
            <div className="statistics">
                <h2 className="text-center">Estadísticas</h2>
                <Table hover size="sm" bsPrefix="table table-statistics">
                    <thead className="">
                        <tr>
                            <th colSpan="2">Tabla General</th>
                            <th className="text-center">JJ</th>
                            <th className="text-center">DG</th>
                            <th className="text-center">PTS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center">1</td>
                            <td>
                                <img
                                    src={imageVenados}
                                    alt=""
                                    className="team-logo"
                                />
                                <span className="team-name">Venados F.C.</span>
                            </td>
                            <td className="text-center">2</td>
                            <td className="text-center">5</td>
                            <td className="text-center">6</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Statistics;
