import React, { Component } from 'react';
import { Card, CardBody, CardImage, CardTitle, CardText, CardFooter} from 'mdbreact';
import {
    BrowserRouter as Router,
    Route,
    Link,
  } from 'react-router-dom';
  import { hot } from 'react-hot-loader';


class Cards extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(    
            <Card>
                <Link to="/bodyAnnonce">
                    <CardImage src={this.props.image} alt="Card image cap" top hover overlay="white-slight"/>                        
                    <CardBody>
                        <div className="d-flex flex-row">
                            <CardTitle tag="h5">{this.props.name}</CardTitle>
                        </div>
                        <div className="d-flex flex-row"><CardText className="mr-auto p-2">{this.props.city} - {this.props.year}</CardText>
                            <CardText className="p-2"><strong className="price">{this.props.price}€</strong> /Jour</CardText>
                        </div>
                    </CardBody>
                </Link>                        
            </Card>            
        );
    }
}

export default Cards;
 
