import React, {Component} from 'react';
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
                <div >{Card.name.name} bggbg</div> 
            </div>
        );
    }
}

export default BodyAnnonce;