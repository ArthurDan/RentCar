import React, {Component} from 'react';
import {Card,CardImage} from 'mdbreact';

class BodyAnnonce extends Component{
    render(){
        return(
            <div className="test">
                <div className="row elegant-color-dark">
                    <div className="row mx-auto">
                        <div className="col-md-4 mx-auto white-text">
                            <Card>
                                <CardImage src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" alt="Card image cap" top hover overlay="white-slight"/>                                
                            </Card>                           
                        </div>
                    </div>                    
                </div>
            </div>
        );
    }
}

export default BodyAnnonce;