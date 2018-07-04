import React, { Component } from 'react';
import { Card, CardBody, CardImage, CardTitle, CardText} from 'mdbreact';
import {Link} from 'react-router-dom';


class Cards extends Component{
   
    render(){
        return(    
            <Card>
                    <CardImage src={this.props.image} alt="Card image cap" top hover overlay="white-slight"/>                        
                    <CardBody>
                        <div className="d-flex flex-row">
                            <CardTitle tag="h5">{this.props.name}</CardTitle>
                        </div>
                        <div className="d-flex flex-row"><CardText className="mr-auto p-2">{this.props.city} - {this.props.year}</CardText>
                            <CardText className="p-2"><strong className="price">{this.props.price}€</strong> /Jour</CardText>
                        </div>
                    </CardBody>                  
            </Card>            
        );
    }
}

export default Cards;
 
