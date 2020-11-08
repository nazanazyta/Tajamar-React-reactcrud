import React, { Component } from 'react';
import axios from 'axios';
import Global from './../../Global';
import { Redirect, NavLink } from 'react-router-dom';

export default class DeleteHospital extends Component {

    state = { status: false };

    eliminarHospital = () => {
        var request = "webresources/hospitales/delete/" + this.props.id;
        var url = Global.urlhospitales + request;
        axios.delete(url).then(res => {
            this.setState({ status: true });
        });
    }

    render() {
        if(this.state.status === true){
            return <Redirect to="/" />
        }
        return (
            <div>
                <br />
                <h1 style={{color: "red"}}>¿Desea eliminar el hospital {this.props.id}?</h1><br />
                <NavLink to="/" className="btn btn-light">Cancelar</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.eliminarHospital} className="btn btn-danger">Eliminar</button>
            </div>
        )
    }
}
