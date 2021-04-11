import React , {Component} from 'react';
import {Card,CardBody,CardHeader,CardTitle,CardText,Form,FormGroup,Input,InputGroup,Label,FormText} from 'reactstrap';
import {Link} from 'react-router-dom';

class Contact extends Component{

    constructor(props){
        super(props);
    }

    render(){

        return(
            <>
            <section className="contactusSection">
                <div className="overlay">
                    <div className="headerRow">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 text-center align-self-center">
                                        <h2><i className="fa fa-phone"/>   Contact Us</h2>
                                    </div>
                                </div>
                            </div>
                      
                    </div>
                </div>
            </section>
            <section className="contactusContent m-10">
                <div className="container">
                    <div className="row sectionRow">
                        <div className="col-12 col-md-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="addressTitle">
                                        <strong>Address <i class="fa fa-address-card"/></strong>
                                    </CardTitle>
                                </CardHeader>
                                <CardBody>
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaa
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-6 text-center align-self-center">
                            <div className="row text-center align-self-center">
                                <div className="col-md-12 text-center align-self-center">
                                    <h4>Phone <i className="fa fa-phone"/> : +91 xxxxxxxxxx</h4>
                                    
                                </div>
                               
                            </div>
                            <div className="row text-center align-self-center">
                                <div className="col-md-12 text-center align-self-center">
                                    <h4>Email <i className="fa fa-envelope"/> : abc@gmail.com</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row sectionRow">
                       <div className="col-md-12 ">
                           <ul className="list-unstyled list2">
                               <li className="listitem"><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                               <li className="listitem"><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
                               <li className="listitem"><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                               <li className="listitem"><Link to="#"><i className="fa fa-instagram"></i></Link></li>
                           </ul>
                       </div>
                   </div>
                   <div className="row sectionRow">
                  
                    <div className="col-md-12 align-self-center">
                        <div className="row">
                            <div className="col-md-12 text-center">
                            <h2 className>Leave a Message</h2>
                            </div>
                        </div>
                        

                        <Form>
                            <div className="row">
                            <div className="col-md-6">
                                <InputGroup row className="formrow">
                                    <div className = "col-md-12">
                                        
                                        <Input type="text" name="firstname" id="firstname" placeholder="First Name"/>
                                    </div>
                                </InputGroup>
                                <InputGroup row className="formrow">
                                    <div className = "col-md-12">
                                       
                                        <Input type="text" name="secondname" id="secondname" placeholder="Second Name"/>
                                    </div>
                                </InputGroup>
                                <InputGroup row m-10 className="formrow">
                                    <div className = "col-md-12">
                                        
                                        <Input type="text" name="mobile" id="mobile" placeholder="mobile"/>
                                    </div>
                                </InputGroup>
                                <InputGroup row className="formrow">
                                    <div className = "col-md-12">
                                       
                                        <Input type="text" name="email" id="email" placeholder="email"/>
                                    </div>
                                </InputGroup>
                            </div>
                            <div className="col-md-6 align-self-center">
                                <InputGroup row className="formrow">
                                   
                                    <textarea  className="form-control" rows = "10" name="message" id="message" placeholder="message"/>
                                </InputGroup>
                            </div>
                            </div>
                            <FormGroup row className="formrow">
                                <div className="col-md-12">
                                    <Input type="submit" className="btn btn-warning btn-block"/>
                                </div>
                            </FormGroup>
                           
                        </Form>
                    </div>
                  </div>
                </div>
            </section>
            </>
        )
    }
}

export default Contact;
