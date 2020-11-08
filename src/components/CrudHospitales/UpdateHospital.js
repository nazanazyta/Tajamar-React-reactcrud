import React, { Component } from 'react';
import axios from 'axios';
import Global from './../../Global';
import { Redirect, NavLink } from 'react-router-dom';

export default class UpdateHospital extends Component {

    cajaNumRef = React.createRef();
    cajaNomRef = React.createRef();
    cajaDirRef = React.createRef();
    cajaTelRef = React.createRef();
    cajaCamRef = React.createRef();

    state = { status: false }

    modificarHospital = (e) => {
        e.preventDefault();
        var num = parseInt(this.cajaNumRef.current.value);
        var nom = this.cajaNomRef.current.value;
        var dir = this.cajaDirRef.current.value;
        var tel = this.cajaTelRef.current.value;
        var cam = this.cajaCamRef.current.value;
        var hospital = {
            idhospital: num
            , nombre: nom
            , direccion: dir
            , telefono: tel
            , camas: cam
        };
        var request = "webresources/hospitales/put";
        var url = Global.urlhospitales + request;
        axios.put(url, hospital).then(res => {
            this.setState({status: true});
        });
    }

    render() {
        if(this.state.status === true){
            return <Redirect to="/" />
        }
        return (
            <div>
                <h1>Modificar hospital {this.props.id}</h1>
                <NavLink to={'/detalles/' + this.props.id} className="btn btn-sm  btn-dark">Detalles</NavLink>&nbsp;
                <NavLink to={'/'} className="btn btn-sm  btn-dark">Lista</NavLink>
                <form onSubmit={this.modificarHospital} style={{width: "50%", margin: "auto"}}>
                <label>Número: </label>
                    <input type="number" name="cajanum" className="form-control" ref={this.cajaNumRef}
                        value={this.props.id} readOnly />
                    <label>Nombre: </label>
                    <input type="text" name="cajanom" className="form-control" ref={this.cajaNomRef} />
                    <label>Dirección: </label>
                    <input type="text" name="cajadir" className="form-control" ref={this.cajaDirRef} />
                    <label>Teléfono: </label>
                    <input type="text" name="cajatel" className="form-control" ref={this.cajaTelRef} />
                    <label>Camas: </label>
                    <input type="number" name="cajacam" className="form-control" ref={this.cajaCamRef} /><br />
                    <button className="btn btn-success">Modificar</button>
                </form>
            </div>
        )
    }
}
