import React from 'react';
import { Container, Button, Modal, ModalBody, Row, Col, Input, Fa, Card, CardBody, ModalFooter, ModalHeader} from 'mdbreact';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal14: false
    };

    this.toggle14 = this.toggle14.bind(this);
  }

  toggle14() {
    this.setState({
      modal14: !this.state.modal14
    });
  }

  render() {
    return (
      <Container>
        <Button style={{padding: '10px 20px'}} color="pink" onClick={this.toggle14}><Fa icon="user"/> Se Connecter</Button>
        <Modal isOpen={this.state.modal14} toggle={this.toggle14} centered>
          <ModalBody>
              <section className="form-elegant">
                <Row> 
                  <Col className="center no-padding">
                    <Card>
                      <ModalHeader className="text-center mx-5 pt-3 mb-1" style={{display : 'inline'}}>
                            <strong>Se connect</strong><strong class="pink-text font-weight-bold">er</strong>
                            <Button type="button" gradient="pink" style={{top:'10px'}} className="close" onClick={this.toggle14}><span aria-hidden="true">x</span></Button>                     
                      </ModalHeader> 
                      <CardBody className="mx-4 grey-text">
                        <Input label="Votre Email" group type="email" icon="user" validate error="wrong" success="right"/>
                        <Input label="Votre mot de passe" group type="password" icon="lock" validate containerClass="mb-0"/>
                        <p className="font-small pink-text d-flex justify-content-end pb-3">Mot de passe <a href="#" className="pink-text ml-1"> oublié?</a></p>
                        <div className="text-center mb-3">
                          <Button type="button" gradient="pink" rounded className="btn-block z-depth-1a">Connexion</Button>
                        </div>
                      </CardBody>
                      <ModalFooter className="mx-5 pt-3 mb-1">
                        <p className="font-small grey-text d-flex justify-content-end">Vous n'est pas membre? <a href="#" className="pink-text ml-1"> S'enregistrer</a></p>
                      </ModalFooter>
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

export default Login;