import React from 'react';
<<<<<<< HEAD
import { Container, Button, Modal, ModalBody, Row, Col, Input, Fa, Card, CardBody, ModalFooter, ModalHeader } from 'mdbreact';
=======
import { Container, Button, Modal, ModalBody, Row, Col, Input, Fa, Card, CardBody, ModalFooter, ModalHeader} from 'mdbreact';
>>>>>>> f9e1d51631b11bdc41d6caa4866aadbb417b2ce0


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal14: false,
<<<<<<< HEAD
      displayConfirmModal: true,

=======
>>>>>>> f9e1d51631b11bdc41d6caa4866aadbb417b2ce0
    };

    this.toggle14 = this.toggle14.bind(this);
  }

<<<<<<< HEAD



=======
  
>>>>>>> f9e1d51631b11bdc41d6caa4866aadbb417b2ce0

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
<<<<<<< HEAD
            <section className="form-elegant">
              <Row>
                <Col className="center no-padding">
                  <Card>
                    <ModalHeader className="text-center mx-5 pt-3 mb-1" style={{ display: 'inline' }}>
                      <strong>Créer un comp</strong><strong className="pink-text font-weight-bold">te</strong>
                      <Button type="button" gradient="pink" style={{ top: '10px' }} className="close" onClick={this.toggle14}><span aria-hidden="true">x</span></Button>
                    </ModalHeader>
                    <CardBody className="mx-4 grey-text">
                      <form onSubmit={this.onSubmit}>
                        <Input label="Votre nom" group type="text" icon="user" validate error="wrong" success="right" ref="name" />
                        <Input label="Votre email" group type="email" icon="envelope" id="defaultFormRegisterEmailEx" ref="email" />
                        <Input label="Confirmer votre email" group type="email" icon="exclamation-triangle" id="defaultFormRegisterEmailExConf" ref="emailConf" />
                        <Input label="Votre mot de passe" group type="password" icon="lock" validate containerClass="mb-0" ref="password" />
                        <div className="text-center mb-3">
                          <Button type="submit" gradient="pink" rounded className="btn-block z-depth-1a mt-4">S'inscrire</Button>
                        </div>
                      </form>
                    </CardBody>
                    <ModalFooter className="mx-5 pt-3 mb-1">
                      <p className="font-small grey-text d-flex justify-content-end">Vous êtes déjà membre? <a
                        onClick={() => { this.setState({ displayConfirmModal: false }); }}
                        ref="#"
                        className="pink-text ml-1"
                      > Connexion
                      </a>
                      </p>
                    </ModalFooter>
                  </Card>
                </Col>
              </Row>
            </section>

=======
              <section className="form-elegant">
                <Row> 
                  <Col className="center no-padding">
                    <Card>
                      <ModalHeader className="text-center mx-5 pt-3 mb-1" style={{display : 'inline'}}>
                            <strong>Créer un comp</strong><strong class="pink-text font-weight-bold">te</strong>
                            <Button type="button" gradient="pink" style={{top:'10px'}} className="close" onClick={this.toggle14}><span aria-hidden="true">x</span></Button>                     
                      </ModalHeader>
                      <CardBody className="mx-4 grey-text">
                        <form onSubmit={this.onSubmit}>
                          <Input label="Votre nom" group type="text" icon="user" validate error="wrong" success="right" ref="name"/>
                          <Input label="Votre email" group type="email" icon="envelope" id="defaultFormRegisterEmailEx" ref="email"/>
                          <Input label="Confirmer votre email" group type="email" icon="exclamation-triangle" id="defaultFormRegisterEmailEx"/>
                          <Input label="Votre mot de passe" group type="password" icon="lock" validate containerClass="mb-0" ref="password"/>
                          <div className="text-center mb-3">
                            <Button type="submit" gradient="pink" rounded className="btn-block z-depth-1a mt-4">S'inscrire</Button>
                          </div>
                        </form>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </section>
>>>>>>> f9e1d51631b11bdc41d6caa4866aadbb417b2ce0
          </ModalBody>
        </Modal>
      </Container>
    );
  }
}

export default Register;
