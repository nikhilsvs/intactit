import React ,{Component} from 'react';
import Header from './headerComponent';
import {Card,CardBody,UncontrolledCarousel} from 'reactstrap';
import {Carousel} from 'react-bootstrap';
import {Navbar,NavbarBrand,Jumbotron,Nav,NavbarToggler,Collapse,NavItem,Modal,ModalHeader
    ,Form, FormGroup,Label,Input,Button,ModalBody,Media} from 'reactstrap';
import AliceCarousel from 'react-alice-carousel';
import {NavLink} from 'react-router-dom';

function RenderClients(){
    let a = ["ABC","XVX","YYYYYYYY","IIIIIIIIII","OOOOOOOOO","PPPPPPPPPP"];

    let ans = a.map((item)=>{
        return(
            <div className="col-md-3">
                <Card className="mt-2 ">
                    <CardBody className="cardContent">
                        <h2>{item}</h2>
                    </CardBody>
                </Card>
            </div>
        )
       
    });

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1 >Our Clients</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-12">
                            <Card className="m-4">
                                <CardBody className="cardContent">
                                    <h2>"ABC"</h2>
                                    <cite>ssssssssssssssssddddddddddddddddddddddddddd
                                           
                                        </cite>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Card className="m-4">
                                <CardBody className="cardContent">
                                    <h2>xyz</h2>
                                    <cite>ssssssssssssssssddddddddddddddddddddddddddd
                                            
                                        </cite>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                   
                </div>

                <div className="col-md-4">
                    <div className="row heartrow">
                        <img src="images/client1.png"/>
                    </div>
                    
                </div>
                <div className="col-md-4">
                    <div className="row">
                            <div className="col-md-12">
                                <Card className="m-4">
                                    <CardBody className="cardContent">
                                        <h2>rst</h2>
                                        <cite>ssssssssssssssssddddddddddddddddddddddddddd
                                            
                                        </cite>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <Card className="m-4">
                                    <CardBody className="cardContent">
                                        <h2>uvq</h2>
                                        <cite>ssssssssssssssssddddddddddddddddddddddddddd
                                           
                                        </cite>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                       
                    </div>
                
            </div>
        </div>
    )
}

class Home extends Component{
    constructor(props){
        super(props);

    }

 
    render(){

        return(
            <>
            <section className="home">
                <header>
            
                    <div className="overlay ">
                    <div className="container customalign">
                        <div className="row">
                            <div className="col-12 col-md-6 align-self-center">
                                <div className="temp1">
                                    <h3>Welcome to</h3>
                                    <div className="row">
                                        <div classname="col-12 col-md-6">
                                            <img src="images/logo.png" width="100%"/>
                                        </div>
                                        <div classname="col-12 col-md-6">
                                            <h2>Intact IT</h2>
                                            <cite>Solution Pvt. Ltd</cite>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                               
                            </div>
                            <div className="col-12 col-md-6 align-self-center text-center d-none d-md-block">
                                <div className="rightQuote">
                                    <h1>We Make Things Easy</h1>
                                    <h3>The Final Stop For Your IT Solution</h3>
                                </div>
                                
                               
                                <Button className="btn btn-outline btn-contact">Contact US</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            </section>
            
            <section className="info">
                <div className="container">
                    <div className="row sectionRow">
                        <div className="col-md-12 text-center align-self-center">
                            <h1>Leading Service Provider</h1>
                        </div>
                    </div>
                    <div className="row sectionRow">
                        <div className= "col-md-6 align-self-center">
                            <img src = "images/homepic1.png" width="100%"/>
                        </div>
                        <div className="col-md-6 align-slef-center">
                            
                            <div className="row">
                                <div className="col-md-12">
                                <div className="homeSec2Content">
                                        <h3> <i className="fa fa-sun-o"/> We Are the Best</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                <div className="homeSec2Content ">
                                   
                                        <h3><i className="fa fa-flash"/> Highly Specialised in Banking Domain</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                <div className="homeSec2Content">
                              
                                        <h3><i className="fa fa-globe"/> Working with More than 10 clients</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="sec2Home">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 align-self-center">
                            <h2>Experienced And Trusted Service Provider in the Market</h2>
                        </div>
                        <div className="col-md-6 text-center align-self-center">
                            <img src = "images/services2.png" width="100%"/>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="whatwedo">
            
           
            <div className="overlay">
                <div className="container">
                <div className="row carouselHeading">
                        <div className="col-md-12 text-center">
                            <h2 >Our Services</h2>
                        </div>
                    </div>
                    <Carousel>
                        <Carousel.Item>
                        
                        <div className="homeServices">
                            <div className="row">
                                <div className="col-md-4 d-none d-md-block">
                                    <img className="carouselimg"
                                        src="images/homepic2.png"
                                        alt="First slide" width="500px"/> 
                                </div>
                                <div className="col-md-8 align-self-center text-center">
                                    <div className="homeServicesContent mr-auto">
                                        <h1><cite>Services</cite></h1>
                                        <h3>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                            
                          
                        </Carousel.Item>
                        <Carousel.Item>
                        
                            <div className="homeServices">
                                <div className="row">
                                    <div className="col-md-4 d-none d-md-block">
                                        <img className="carouselimg"
                                            src="images/sde2.png"
                                            alt="First slide" width="400px"/> 
                                    </div>
                                    <div className="col-md-8 align-self-center text-center">
                                        <div className="homeServicesContent">
                                            <h1><cite>Software Development</cite></h1>
                                            <h3>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                          
                            </Carousel.Item>
                            <Carousel.Item>
                        
                            <div className="homeServices">
                                <div className="row">
                                    <div className="col-md-4 d-none d-md-block">
                                        <img className="carouselimg"
                                            src="images/staffing2.png"
                                            alt="First slide" width="400px"/> 
                                    </div>
                                    <div className="col-md-8 align-self-center text-center">
                                        <div className="homeServicesContent">
                                            <h1><cite>Staffing</cite></h1>
                                            <h3>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                          
                            </Carousel.Item>
                           
                    </Carousel>
                </div>
             
                </div>
            </div>
        <div className="clients">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 ">
                        <RenderClients/>
                    </div>
                </div>
            </div>
         
           
        </div>
       

           

            </>
        );
    }
}

export default Home;