import React from 'react';
import { Container, Button, Modal, ModalBody, Row, Col, Input, Fa, Card, CardBody, ModalHeader} from 'mdbreact';


class Contact extends React.Component {
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
        <Button style={{padding: '10px 20px'}} color="pink" onClick={this.toggle14}><Fa icon="envelope"/> Nous contacter</Button>
        <Modal isOpen={this.state.modal14} toggle={this.toggle14} centered>
          <ModalBody>
            <section className="form-elegant">
                <Row> 
                    <Col className="center no-padding">
                        <Card>
                            <ModalHeader className="text-center mx-5 pt-3 mb-1" style={{display : 'inline'}}>
                                <strong>Ecrivez no</strong><strong class="pink-text font-weight-bold">us</strong>
                                <Button type="button" gradient="pink" style={{top:'10px'}} className="close" onClick={this.toggle14}><span aria-hidden="true">x</span></Button>                     
                            </ModalHeader>
                            <CardBody className="mx-4 grey-text">
                                <Input label="Votre nom" group type="text" icon="user" validate error="wrong" success="right"/>
                                <Input label="Votre email" group type="email" icon="envelope"/>
                                <Input label="Sujet" group type="text" icon="tag" validate error="wrong" success="right"/>
                                <Input type="textarea" rows="2" label="Votre message" icon="pencil"/>
                                <div className="text-center mb-3">
                                    <Button  type="button" gradient="pink" rounded className="btn-block z-depth-1a">Envoyer <Fa icon="paper-plane-o" className="ml-1"/></Button>
                                </div>
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

export default Contact;