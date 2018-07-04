import React from 'react';
import { Container, Button, Modal, ModalBody, Row, Col, Input, Fa, Card, CardBody,FormInline, ModalHeader} from 'mdbreact';
import TextField from '@material-ui/core/TextField';

class Search extends React.Component {
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
        <Button style={{padding: '10px 20px'}} color="pink" onClick={this.toggle14}><Fa icon="search"/> Louer une voiture</Button>
        <Modal isOpen={this.state.modal14} toggle={this.toggle14} centered size='lg'>
          <ModalBody>
              <section className="form-elegant">
                <Row> 
                  <Col className="center no-padding">
                    <Card>
                        <ModalHeader className="text-center mx-5 pt-3 mb-1" style={{display : 'inline'}}>
                            <strong>Louer une voitu</strong><strong class="pink-text font-weight-bold">re</strong>
                            <Button type="button" gradient="pink" style={{top:'10px'}} className="close" onClick={this.toggle14}><span aria-hidden="true">x</span></Button>                     
                        </ModalHeader>
                        <CardBody className="mx-4 grey-text">
                            <FormInline className="md-form mr-auto mb-4 mt-0">
                                <Input containerClass="active-pink-2  mx-auto" icon="" className="form-control" type="text" hint="Ville" aria-label="Search" />
                                <Input hint="Adresse" type="text" icon="" containerClass="active-pink-2  mx-auto " className="form-control" aria-label="Search"/>
                            </FormInline>
                            <FormInline className="mx-auto md-form mr-auto mb-4 mt-0">
                              <form noValidate className="mx-auto">
                                <TextField 
                                  id="date"
                                  label="Début de location"
                                  type="date"
                                  defaultValue="2017-05-24"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                />
                              </form>
                              <form noValidate className="mx-auto">
                                <TextField style={{width : '181px'}}
                                  id="date"
                                  label="Fin de location"
                                  type="date"
                                  defaultValue="2017-05-24"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                />
                              </form>
                            </FormInline>
                            <div className="text-center mb-3">
                            <Button type="button" gradient="pink" rounded className="btn-block z-depth-1a">Louer</Button>
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

export default Search;