import React, {Component} from 'react';
import {Button} from 'mdbreact';

class Profil extends Component{
    render(){
        return(
            <div style={{margin:'100px 0'}}>
                <div className="row text-center pt-3 ">
                    <div className="col-md-8 mx-auto border-dark">
                        <h1 className="font-weight-bold">Mon Profil</h1>
                        <div className="row mt-5">
                            <div className="col-md-6 mx-auto"> <strong class="pink-text font-weight-bold">Ma voiture :</strong><strong> Clio IV</strong></div>
                            <div className="row mt-5">
                                <div className="col-md-6">
                                    <img src="Img/Car/clio.jpg" class="img-fluid mx-auto" alt="Responsive" width="600px" height="auto"/>
                                </div>
                                <div className="col-md-6">
                                    <div className="row"><strong class="pink-text font-weight-bold">Année :</strong><strong> 2015</strong></div>
                                    <div className="row"><strong class="pink-text font-weight-bold">Kilomètres :</strong><strong> 150 000km</strong></div>
                                    <div className="row"><strong class="pink-text font-weight-bold">Carburant :</strong><strong> Diesel</strong></div>
                                </div>
                            </div>
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

export default Profil;