import React, { Component } from 'react';
import axios from 'axios';
import Global from './../../Global';
import { Redirect } from 'react-router-dom';

export default class InsertarHospital extends Component {

    cajaNumRef = React.createRef();
    cajaNomRef = React.createRef();
    cajaDirRef = React.createRef();
    cajaTelRef = React.createRef();
    cajaCamRef = React.createRef();

    state = { status: false }

    nuevoHospital = (e) => {
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
        var request = "webresources/hospitales/post";
        var url = Global.urlhospitales + request;
        axios.post(url, hospital).then(res => {
            this.setState({ status: true });
        });
    }

    render() {
        if(this.state.status === true){
            return <Redirect to="/" />
        }
        return (
            <div>
                <h1>Nuevo hospital</h1>
                <form onSubmit={this.nuevoHospital} style={{width: "50%", margin: "auto"}}>
                    <label>Número: </label>
                    <input type="number" name="cajanum" className="form-control" ref={this.cajaNumRef} />
                    <label>Nombre: </label>
                    <input type="text" name="cajanom" className="form-control" ref={this.cajaNomRef} />
                    <label>Dirección: </label>
                    <input type="text" name="cajadir" className="form-control" ref={this.cajaDirRef} />
                    <label>Teléfono: </label>
                    <input type="text" name="cajatel" className="form-control" ref={this.cajaTelRef} />
                    <label>Camas: </label>
                    <input type="number" name="cajacam" className="form-control" ref={this.cajaCamRef} /><br />
                    <button className="btn btn-success">Añadir</button>
                </form>
            </div>
        )
    }
}
