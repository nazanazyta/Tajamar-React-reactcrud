import React, { Component } from 'react';
import axios from 'axios';
import Global from './../../Global';
import { NavLink } from 'react-router-dom';

export default class DetallesHospital extends Component {
    constructor(props){
        super(props);
        this.setState({
            idhospi: props.idhosp
            , nombre: props.nombre
        });
    }

    state = {
        idhospi: 0
        , nombre: ""
        , hospitales: []
        , status: false
    }

    mostrarHospital = () => {
        var request = "webresources/hospitales/" + this.props.idhosp;
        var url = Global.urlhospitales + request;
        axios.get(url).then(res => {
            this.setState({
                hospital: res.data
                ,status: true
            });
        });
    }

    componentDidMount = () => {
        this.mostrarHospital();
    }

    render() {
        return (
            <div>
                <br /><br />
                <h1><u>Detalles del hospital número {this.props.idhosp}</u></h1>
                {this.state.status === true &&
                (
                    <React.Fragment>
                        <br />
                        <NavLink to="/" className="btn btn-sm btn-dark">Listado</NavLink>
                        <br /><br />
                        <h3>Nombre: <span style={{color: "green", fontWeight: "bold"}}>{this.state.hospital.nombre} ({this.state.hospital.idhospital})</span></h3>
                        <h3>Dirección: <span style={{color: "green", fontWeight: "bold"}}>{this.state.hospital.direccion}</span></h3>
                        <h3>Teléfono: <span style={{color: "green", fontWeight: "bold"}}>{this.state.hospital.telefono} </span></h3>
                        <h3>Camas: <span style={{color: "green", fontWeight: "bold"}}>{this.state.hospital.camas} </span></h3><br />
                        <NavLink to={"/update/" + this.state.hospital.idhospital} className="btn btn-primary">Modificar</NavLink> &nbsp;&nbsp;
                        <NavLink to={"/delete/" + this.state.hospital.idhospital} className="btn btn-danger">Borrar</NavLink>
                    </React.Fragment>
                )}
            </div>
        )
    }
}
