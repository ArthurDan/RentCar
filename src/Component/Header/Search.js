import React from 'react';
import { Container, Button, Modal, ModalBody, Row, Col, Input, Fa, Card, CardBody,FormInline, ModalHeader} from 'mdbreact';
import TextField from '@material-ui/core/TextField';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal14: false,
      ville:'',
      adresse:'',
      date_debut:'',
      date_fin:''

    };

    this.toggle14 = this.toggle14.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

}

handleSubmit(event) {
  event.preventDefault()
  
  var data = {
      ville: this.state.ville,
      adresse: this.state.adresse,
      dateD: this.state.date_debut,
      dateF: this.state.date_fin
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
                          <form onSubmit={this.handleSubmit}>
                            <FormInline className="md-form mr-auto mb-4 mt-0">
                                <Input containerClass="active-pink-2  mx-auto" icon="" className="form-control" type="text" hint="Ville" aria-label="Search" name ="ville" onChange={this.logChange}  />
                                <Input hint="Adresse" type="text" icon="" containerClass="active-pink-2  mx-auto " className="form-control" aria-label="Search" name="adresse" onChange={this.logChange} />
                            </FormInline>
                            <FormInline className="mx-auto md-form mr-auto mb-4 mt-0">
                         
                                <TextField 
                                  name="date_debut"
                                  onChange={this.logChange}
                                  id="date_debut"
                                  label="Début de location"
                                  type="date"
                                  defaultValue="2017-05-24"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                />                           
                              
                                <TextField style={{width : '181px'}} className="mx-auto"
                                  name="date_fin"
                                  onChange={this.logChange}
                                  id="date_fin"
                                  label="Fin de location"
                                  type="date"
                                  defaultValue="2017-05-24"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                />
                              
                            </FormInline>
                            <div className="text-center mb-3">
                            <Button type="button" gradient="pink" rounded className="btn-block z-depth-1a">Louer</Button>
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

export default Search;