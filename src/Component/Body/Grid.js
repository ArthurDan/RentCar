import React, { Component } from 'react';
import {CardGroup} from 'mdbreact';
import Cards from './Card';

class Grid extends Component {

    render() {
        return (
            <div>
                <main style={{margin: '100px 0px'}}>
                <CardGroup style={{margin: '10px 0px'}} className="w-75 mx-auto" deck>
                    <Cards image ="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" name="Renault Clio IV 1.5 DCI" city="Paris" year="2015" price="40"/>
                    <Cards image ="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" name="Renault Clio IV 1.5 DCI" city="Toulouse" year="2015" price="40"/>
                    <Cards image ="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" name="Renault Clio IV 1.5 DCI" city="Toulouse" year="2015" price="40"/>
                </CardGroup>
                <CardGroup style={{margin: '10px 0px'}} className="w-75 mx-auto" deck>
                    <Cards image ="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" name="Renault Clio IV 1.5 DCI" city="Toulouse" year="2015" price="40"/>
                    <Cards image ="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" name="Renault Clio IV 1.5 DCI" city="Toulouse" year="2015" price="40"/>
                    <Cards image ="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" name="Renault Clio IV 1.5 DCI" city="Toulouse" year="2015" price="40"/>                  
                </CardGroup>
                <CardGroup style={{margin: '10px 0px'}} className="w-75 mx-auto"deck>
                    <Cards image ="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" name="Renault Clio IV 1.5 DCI" city="Toulouse" year="2015" price="40"/>
                    <Cards image ="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" name="Renault Clio IV 1.5 DCI" city="Toulouse" year="2015" price="40"/>
                    <Cards image ="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" name="Renault Clio IV 1.5 DCI" city="Toulouse" year="2015" price="40"/>
                </CardGroup>
                </main>
            </div>
        );
    }
}

export default Grid;