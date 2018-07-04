import React, {Component} from 'react';
import {CardGroup} from 'mdbreact';
import Cards from '../Annonce/Card';

class Grid extends Component{
    render(){
        return (
            <div>
                <main style={{margin: '100px 0px'}}>
                <CardGroup style={{margin: '10px 0px'}} className="w-75 mx-auto" deck>                    
                    <Cards image ="Img/Car/clio.jpg" name="Renault Clio IV 1.5 DCI" city="Paris" year="2015" price="30"/>
                    <Cards image ="Img/Car/mercedes.jpg" name="Mercedes classe A" city="Toulouse" year="2017" price="85"/>
                    <Cards image ="Img/Car/peugeot.jpg" name="Peugot 208 Gti" city="Marseille" year="2016" price="45"/>
                </CardGroup>
                <CardGroup style={{margin: '10px 0px'}} className="w-75 mx-auto" deck>
                    <Cards image ="Img/Car/volvo.jpg" name="Volvo xc40" city="Nantes" year="2018" price="50"/>
                    <Cards image ="Img/Car/audi.jpg" name="Audi A8" city="Caen" year="2017" price="80"/>
                    <Cards image ="Img/Car/2cv.jpg" name="Citroën 2CV" city="Bordeaux" year="1982" price="20"/>                  
                </CardGroup>
                <CardGroup style={{margin: '10px 0px'}} className="w-75 mx-auto"deck>
                    <Cards image ="Img/Car/chrysler.jpg" name="Chrysler 300C Touring" city="Saint-Jean de Luz" year="2013" price="55"/>
                    <Cards image ="Img/Car/bmw.jpg" name="BMW Série 5 f10" city="Pau" year="2016" price="70"/>
                    <Cards image ="Img/Car/golf.jpg" name="Volkswagen Golf" city="Toulouse" year="2018" price="50"/>
                </CardGroup>
                </main>
            </div>
        );
    }
}

export default Grid;