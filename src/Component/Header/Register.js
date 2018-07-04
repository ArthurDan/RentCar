import React from 'react';
import { Container, Button, Modal, ModalBody, Row, Col, Input, Fa, Card, CardBody,  ModalHeader} from 'mdbreact';


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal14: false,
      name: '',
      email: '',
      mdp: '',
      msg:''
    };  

    this.toggle14 = this.toggle14.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault()
    var data = {
        name: this.state.name,
        email: this.state.email,
        mdp: this.state.mdp
    }
    console.log(data)
    fetch("/", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function(data) {
        console.log(data)    
        if(data == "success"){
           this.setState({msg: "Thanks for registering"});  
        }
    }).catch(function(err) {
        console.log(err)
    });
}

logChange = (e) => {
  this.setState({[e.target.name]: e.target.value});  
}

  toggle14() {
    this.setState({
      modal14: !this.state.modal14,
    });
  }

  render() {
    return (
      <Container>
        <Button style={{ padding: '10px 20px' }} color="pink" onClick={this.toggle14}><Fa icon="pencil" /> S'inscrire</Button>
        <Modal isOpen={this.state.modal14} toggle={this.toggle14} centered>
          <ModalBody>
              <section className="form-elegant">
                <Row> 
                  <Col className="center no-padding">
                    <Card>
                      <ModalHeader className="text-center mx-5 pt-3 mb-1" style={{display : 'inline'}}>
                            <strong>Créer un comp</strong><strong class="pink-text font-weight-bold">te</strong>
                            <Button type="button" gradient="pink" style={{top:'10px'}} className="close" onClick={this.toggle14}><span aria-hidden="true">x</span></Button>                     
                      </ModalHeader>
                      <CardBody className="mx-4 grey-text">
                        <form onSubmit={this.handleSubmit} method="POST">
                          <Input label="Votre nom" group type="text" icon="user" validate error="wrong" success="right" onChange={this.logChange} name="name" />
                          <Input label="Votre email" group type="email" icon="envelope" id="defaultFormRegisterEmai2lEx" onChange={this.logChange} name="email"/>
                          <Input label="Confirmer votre email" group type="email" icon="exclamation-triangle" id="defaultFormRegisterEmailEx" />
                          <Input label="Votre mot de passe" group type="password" icon="lock" validate containerClass="mb-0"  onChange={this.logChange} name="mdp" />
                          <div className="text-center mb-3">
                            <Button type="submit" gradient="pink" rounded className="btn-block z-depth-1a mt-4">S'inscrire</Button>
                          </div>
                        </form>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </section>
          </ModalBody>
        </Modal>
      </Container>
    );
  }
}

export default Register;
