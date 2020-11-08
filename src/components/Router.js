import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MenuHospitales from './CrudHospitales/MenuHospitales';
import Hospitales from './CrudHospitales/Hospitales';
import DetallesHospital from './CrudHospitales/DetallesHospital';
import InsertarHospital from './CrudHospitales/InsertarHospital';
import UpdateHospital from './CrudHospitales/UpdateHospital';
import DeleteHospital from './CrudHospitales/DeleteHospital';

export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <MenuHospitales />
                    <Switch>
                        <Route exact path="/" component={Hospitales} />
                        <Route exact path="/create" component={InsertarHospital} />
                        <Route exact path="/detalles/:id" render={props => {
                            var id = props.match.params.id;
                            return <DetallesHospital idhosp={id} />
                        }} />
                        <Route exact path="/update/:id" render={props => {
                            var id = props.match.params.id;
                            return <UpdateHospital id={id} />
                        }} />
                        <Route exact path="/delete/:id" render={props => {
                            var id = props.match.params.id;
                            return <DeleteHospital id={id} />
                        }}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
