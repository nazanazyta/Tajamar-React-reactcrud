import React, { Component } from 'react';
import axios from 'axios';
import Global from './../../Global';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default class Hospitales extends Component {

    state = {
        hospitales: []
        , status: false
    }

    cargarHospitales = () => {
        var request = "webresources/hospitales";
        var url = Global.urlhospitales + request;
        axios.get(url).then(res => {
            this.setState({
                hospitales: res.data
                , status: true
            });
        });
    }

    componentDidMount = () => {
        this.cargarHospitales();
    }

    render() {
        return (
            <div>
                <h1>Hospitales</h1>
                <table className="table table-info">
                    <thead className="thead-dark">
                        <tr>
                            <th>Id Hospital</th>
                            <th>Nombre</th>
                            <th>Dirección</th>
                            <th>Teléfono</th>
                            <th>Camas</th>
                            <th>Detalles</th>
                            <th>Modificar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.status === true &&
                        (
                            this.state.hospitales.map((hospi, i) => {
                                return(
                                    <tr key={i}>
                                        <td>{hospi.idhospital}</td>
                                        <td style={{fontWeight: "bold"}}>{hospi.nombre}</td>
                                        <td>{hospi.direccion}</td>
                                        <td>{hospi.telefono}</td>
                                        <td>{hospi.camas}</td>
                                        <td>
                                            <NavLink to={"/detalles/" + hospi.idhospital}>Detalles</NavLink>
                                        </td>
                                        <td>
                                            <NavLink to={"/update/" + hospi.idhospital}><FontAwesomeIcon icon={faPenSquare} /></NavLink>
                                        </td>
                                        <td>
                                            <NavLink to={"/delete/" + hospi.idhospital}><FontAwesomeIcon icon={faTrashAlt} /></NavLink>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}