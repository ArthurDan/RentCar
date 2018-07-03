import React from 'react';
import { Container, Button, Modal, ModalBody, Row, Col, Input, Fa, Card, CardBody, ModalFooter, FormInline, ModalHeader} from 'mdbreact';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class Rent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal14: false
    };

    this.toggle14 = this.toggle14.bind(this);
  }
   
  state = {
    age: ''
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  toggle14() {
    this.setState({
      modal14: !this.state.modal14
    });
  }

  /*componentDidMount() {
    let datePickerHr = document.querySelector('.datepicker-wrapper').getElementsByTagName('hr')[0];
    datePickerHr.style.border = "none";
  }*/
  
  
  
  
    

  render() {

    return (
      <Container>
        <Button style={{padding: '10px 20px'}} color="pink" onClick={this.toggle14}><Fa icon="car"/> Louer sa voiture</Button>
        <Modal isOpen={this.state.modal14} toggle={this.toggle14} centered size='lg'>
          <ModalBody>
              <section className="form-elegant">
                <Row> 
                  <Col className="center no-padding">
                    <Card>
                        <ModalHeader className="text-center mx-5 pt-3 mb-1" style={{display : 'inline'}}>
                            <strong>Louer sa voitu</strong><strong class="pink-text font-weight-bold">re</strong>
                            <Button type="button" gradient="pink" style={{top:'10px'}} className="close" onClick={this.toggle14}><span aria-hidden="true">x</span></Button>                     
                        </ModalHeader>
                        <CardBody className="mx-4 grey-text">
                            <FormInline className="md-form mr-auto mb-4 mt-0">
                                <Input containerClass="active-pink-2  mx-auto" icon="" className="form-control" type="text" hint="Ville" aria-label="Search" />
                                <Fa icon="map-marked-alt"/>
                                <Input hint="Adresse" type="text" containerClass="active-pink-2  mx-auto " className="form-control" aria-label="Search"/>
                            </FormInline>
                            <FormInline className="md-form mr-auto mb-4 mt-0">
                                <Fa icon="city"/>
                                <Input containerClass="active-pink-2  mx-auto" className="form-control" type="text" hint="Marque" aria-label="Search" />
                                <Fa icon="position"/>
                                <Input hint="Modèle" type="text" containerClass="active-pink-2  mx-auto " className="form-control" aria-label="Search"/>
                            </FormInline>
                            <FormInline className=" mr-auto mb-4 mt-0">
                              <FormControl className="mx-auto">
                                <InputLabel htmlFor="age-native-simple">Année</InputLabel>
                                <Select style={{width:'180px'}}
                                  native
                                  value={this.state.age}
                                  onChange={this.handleChange('age')}
                                  inputProps={{
                                    name: 'age',
                                    id: 'age-native-simple',
                                  }}
                                >
                                  <option value="" />
                                  <option value={2018}>2018</option>
                                  <option value={2017}>2017</option>
                                  <option value={2016}>2016</option>
                                  <option value={2015}>2015</option>
                                  <option value={2014}>2014</option>
                                  <option value={2013}>2013</option>
                                  <option value={2012}>2012</option>
                                  <option value={2011}>2011</option>
                                  <option value={2010}>2010</option>
                                </Select>
                              </FormControl>
                              <FormControl className="mx-auto">
                                <InputLabel htmlFor="age-native-simple">Kilométrage</InputLabel>
                                <Select style={{width:'180px'}}
                                  native
                                  value={this.state.age}
                                  onChange={this.handleChange('age')}
                                  inputProps={{
                                    name: 'age',
                                    id: 'age-native-simple',
                                  }}
                                >
                                  <option value="" />
                                  <option value={0}>0 - 50 000</option>
                                  <option value={50000}>50 - 100 000</option>
                                  <option value={100000}>100 - 150 000</option>
                                  <option value={150000}>150 - 200 000</option>
                                  <option value={200000}>200 - 250 000</option>
                                  <option value={250000}>250 - 300 000</option>
                                  <option value={300000}>+ 300 000</option>
                                </Select>
                              </FormControl>
                            </FormInline>  
                                  
                            <div className="text-center mb-3">
                            <Button type="button" gradient="pink" rounded className="btn-block z-depth-1a">Louer sa voiture</Button>
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


export default Rent;