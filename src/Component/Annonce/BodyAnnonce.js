import React, {Component} from 'react';
import {Fa, TextField, Button} from 'mdbreact';
import Card from './Card'

class BodyAnnonce extends Component{
    render(){
        return(
            <div className="test">
                <div className="row elegant-color-dark">
                    <div class="mx-auto">
                        <img src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" class="img-fluid mx-auto" alt="Responsive"/>                                             
                    </div>        
                </div>
                <div className="row text-center pt-3 ">
                    <div className="col-md-8 mx-auto">
                        <h1 className="font-weight-bold">Renault Clio IV 1.5 DCI</h1>
                        <div className="row">
                            <div className="col-md-6"><Fa className='fa fa-car'/> 2015 - 150 000km -diesel</div>
                            <div className="col-md-6"><Fa className='fa fa-map-marker'/> Toulouse</div>
                        </div>
                        <div className="row mt-5 grey lighten-1">
                            <form noValidate className="mx-auto">
                                <TextField 
                                id="date"
                                label="Début"
                                type="date"
                                defaultValue="2017-05-24"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                />
                            </form>
                            <form noValidate className="mx-auto">
                                <TextField style={{width : '181px'}}
                                id="date"
                                label="Fin"
                                type="date"
                                defaultValue="2017-05-24"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                />
                            </form>
                        </div> 
                        <div className="row">
                            <div className="text-center mb-3  mx-auto mt-3">
                                <Button type="button" gradient="pink" rounded className="btn-block z-depth-1a">Réserver</Button>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
}

export default BodyAnnonce;