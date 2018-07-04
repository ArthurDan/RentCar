import React, {Component} from 'react';
import {Button} from 'mdbreact';

class Profil extends Component{
    render(){
        return(
            <div style={{margin:'100px 0'}}>
                <div className="row text-center pt-3 ">
                    <div className="col-md-8 mx-auto ">
                        <h1 className="font-weight-bold">Mon Profil</h1>
                        <div className="row mt-5 ">
                            <div className="col-md-6 mx-auto"> <strong class="pink-text font-weight-bold">Ma voiture :</strong><strong> Clio IV</strong></div>
                            <div className="row mt-5 border-pink border mx-auto">
                                <div className="col-md-6 p-0">
                                    <img src="Img/Car/clio.jpg" class="img-fluid mx-auto" alt="Responsive" width="600px" height="auto"/>
                                </div>
                                <div className="col-md-6">
                                    <div className="row"><strong class="pink-text font-weight-bold ml-2">Année :</strong><strong> 2015</strong></div>
                                    <div className="row"><strong class="pink-text font-weight-bold ml-2">Kilomètres :</strong><strong> 150 000km</strong></div>
                                    <div className="row"><strong class="pink-text font-weight-bold ml-2">Carburant :</strong><strong> Diesel</strong></div>
                                    <div className="text-center mb-3  mx-auto mt-3 row align-items-end">
                                        <div class="col align-self-end"><Button type="button" gradient="pink" rounded className="btn-block z-depth-1a">Modifier</Button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-6 mx-auto"> <strong class="pink-text font-weight-bold">Mon annonce</strong></div>
                            <div className="row mt-5 border-pink border mx-auto">
                                <div className="col-md-6 p-0">
                                    <img src="Img/Car/clio.jpg" class="img-fluid mx-auto" alt="Responsive" width="600px" height="auto"/>
                                </div>
                                <div className="col-md-6">
                                    <div className="row"><strong class="pink-text font-weight-bold ml-2">Marque :</strong><strong> Renault</strong></div>
                                    <div className="row"><strong class="pink-text font-weight-bold ml-2">Modèle :</strong><strong> Clio</strong></div>
                                    <div className="row"><strong class="pink-text font-weight-bold ml-2">Année :</strong><strong> 2015</strong></div>
                                    <div className="row"><strong class="pink-text font-weight-bold ml-2">Kilomètres :</strong><strong> 150 000km</strong></div>
                                    <div className="row"><strong class="pink-text font-weight-bold ml-2">Carburant :</strong><strong> Diesel</strong></div>
                                    <div className="row"><strong class="pink-text font-weight-bold ml-2">Prix :</strong><strong> 40€ / jour</strong></div>
                                    <div className="text-center mb-3  mx-auto mt-3 row align-items-end">
                                        <div class="col align-self-end"><Button type="button" gradient="pink" rounded className="btn-block z-depth-1a">Modifier</Button></div>
                                        <div class="col align-self-end"><Button type="button" gradient="pink" rounded className="btn-block z-depth-1a">Supprimer</Button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profil;