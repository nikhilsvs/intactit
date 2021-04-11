import React ,{Component} from 'react';
import {Card,CardBody,CardHeader,CardImg,CardText,CardTitle,Media,UncontrolledCollapse,Button} from 'reactstrap';
import {Carousel} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

function RenderClients(){
    let temp = [{
                name: "Software Development",
                img:"images/sdeaboutus.jpg"
                },
                {
                    name: "Services",
                    img:"images/services.jpg"
                },
                {
                    name: "Staffing",
                    img:"images/stafing.jpg"
                },
                {
                    name: "Software Development",
                    desc:'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
                    img:"images/staffing2.png"
                },
                {
                    name: "Services",
                    desc:'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
                    img:"images/sde2.png"
                },
                {
                    name: "Staffing",
                    desc:'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
                    img:"images/logo.png"
                }
                ];

    let ans = temp.map((item)=>{

        return(
            <div className="col-md-3">
                <div className="clientItem">
                    <div className="clientImg">
                        <img src = {item.img} width="100%" height="100%"/>
                    </div>
                    <div className="clientName">
                        <h2>{item.name}</h2>
                    </div>
                </div>
            </div>
        )
        
    });

    return ans;
}

function RenderServices(){
    let temp = [{
                    name: "Software Development",
                    desc:'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
                    img:"images/sdeaboutus.jpg"
                },
                {
                    name: "Services",
                    desc:'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
                    img:"images/services.jpg"
                },
                {
                    name: "Staffing",
                    desc:'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
                    img:"images/stafing.jpg"
                }
            ];
    let n = temp.length;

    let a = [];
    for(let i = 0;i<n;i++){
        a.push(
            <div className="col-md-4">
                <Card>
           
                    <CardImg  src={temp[i].img} width="100%" height="200px"/>
                        <CardBody>
                            <div className="row">
                                <div className="col-md-12">
                                    <CardTitle><strong>{temp[i].name}</strong></CardTitle>
                                    <CardText>{temp[i].desc}</CardText>
                                </div>
                                
                            </div>
                            
                        </CardBody>
                </Card>
            </div>
            
        )
    }

    return a;;

}

class About extends Component{
    constructor(props){
        super(props);

    }


    render(){

        return(
            <>
            <section className="aboutusHeader">
               <div className="overlay ">
                   
                       <div className="headerRow">
                          
                               <h1>About Us</h1>
                      
                       </div>
                   
               </div>
                   
                
            </section>
          
          <section className="aboutusHeader2">
              <div className="container">
                <div className="row sectionRow">
                   
                    <div className="col-md-12">
                        <h1><img src="images/logo.png" width="15%"/> Welcome To Intact IT Solutions Pvt. Ltd.</h1>
                    </div>
                </div>
              </div>
        
          </section>
            
      
        <div className="container">
                <div className="row">
                    
                    <div className="col-md-6 align-self-center">
                    <div className="aboutusHeaderLeft mt-10">
                    <h2 className="aboutusHeading">What we Do ?</h2>
                        <Card>
                            <CardBody>
                            pppppppppppppppppppppppppppppppppppp
                            qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
                            wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
                            cccccccccccccccccccccccccccccccccccc
                            ddddddddddddddddddddddddddddddddddddd
                            fffffffffffffffffffffffffffffffffffff
                            pppppppppppppppppppppppppppppppppppp
                            qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
                            wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
                            cccccccccccccccccccccccccccccccccccc
                            ddddddddddddddddddddddddddddddddddddd
                            fffffffffffffffffffffffffffffffffffff
                            </CardBody>
                        </Card>
                    </div>
                    </div>
                    <div className="col-md-6">
                        <img src="images/pic1.png" width="100%"/>
                    </div>
                </div>
               
            </div>
            <section className="whoWeAre">
                <div className="container whoWeAreInner">
                    <div className="row">
                        <div className="col-md-12 text-center align-self-center">
                            <h1>Who We Are <i className="fa fa-question"/></h1>
                        </div>
                    </div>
                    <div className="row ">
                    
                        <div className="col-md-6 text-center">
                            <img src="images/aboutus2.png" width="100%" />
                        </div>
                        <div className="col-md-6 align-self-center">
                            <Card className="mt-2">
                                <CardHeader className="whoWeAreCard">
                                    <div className="row">
                                        <div className="col-md-10">
                                            <CardTitle>
                                                Our Motto
                                            </CardTitle>
                                        </div>
                                        <div className="col-md-2">
                                        <btn className="m-1 btn btn-outline whoWeAreTbtn" id="ourMoto"  ><span className="fa fa-bars"></span></btn>
                                        </div>
                                    </div>
                                
                                    
                                </CardHeader>
                                <UncontrolledCollapse toggler="#ourMoto">
                                    <CardBody>
                                        <p>rrrrrrrrrrrrrrrrrrrrr
                                            rrrrrrrrrrrrrrrrrrrrrr
                                            rrrrrrrrrrrrrrrrrrrrrr
                                            rrrrrrrrrrrrrrrrrrrrr
                                        </p>
                                    </CardBody>
                                </UncontrolledCollapse>
                                
                            </Card >
                            <Card className="mt-2">
                                <CardHeader className="whoWeAreCard">
                                    <div className="row ">
                                        <div className="col-md-10">
                                            <CardTitle>
                                                Our Vision
                                            </CardTitle>
                                        </div>
                                        <div className="col-md-2">
                                        <btn className="m-1 btn btn-outline whoWeAreTbtn" id="ourVision"  ><span className="fa fa-bars"></span></btn>
                                        </div>
                                    </div>
                                
                                    
                                </CardHeader>
                                <UncontrolledCollapse toggler="#ourVision">
                                    <CardBody>
                                        <p>rrrrrrrrrrrrrrrrrrrrr
                                            rrrrrrrrrrrrrrrrrrrrrr
                                            rrrrrrrrrrrrrrrrrrrrrr
                                            rrrrrrrrrrrrrrrrrrrrr
                                        </p>
                                    </CardBody>
                                </UncontrolledCollapse>
                                
                            </Card>
                            <Card className="mt-2">
                                <CardHeader className="whoWeAreCard">
                                    <div className="row">
                                        <div className="col-md-10">
                                            <CardTitle>
                                                Our Mission
                                            </CardTitle>
                                        </div>
                                        <div className="col-md-2">
                                            <btn className="m-1 btn btn-outline whoWeAreTbtn" id="ourMission"  ><span className="fa fa-bars"></span></btn>
                                        </div>
                                    </div>
                                
                                    
                                </CardHeader>
                                <UncontrolledCollapse toggler="#ourMission">
                                    <CardBody>
                                        <p>rrrrrrrrrrrrrrrrrrrrr
                                            rrrrrrrrrrrrrrrrrrrrrr
                                            rrrrrrrrrrrrrrrrrrrrrr
                                            rrrrrrrrrrrrrrrrrrrrr
                                        </p>
                                    </CardBody>
                                </UncontrolledCollapse>
                                
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

             <section className="ourservices">
             <div className="container">
                 <div className="row">
                     <div className="col-md-12 text-center">
                         <h2>Our Services</h2>
                     </div>
                 </div>
                 <div className="row">
                     <RenderServices/>
                 </div>
             </div>
         </section>
         <div className="aboutusClients">
             <div className="lowerOverlay">
                <div className="container">
                    <div className="row clientsTitle">
                        <div className="col-md-12 text-center align-self-center">
                            <h2>Clients</h2>
                        </div>
                    </div>
                    <div className="row sectionRow">
                        <RenderClients/>
                    </div>
                </div>
             </div>
             
         </div>
         <section className="feedback">
             <div className="container">
                 <div className="row">
                     <div className="col-md-12 text-center">
                         <h2>Our FeedBack From Clients</h2>
                     </div>
                 </div>
                 </div>
                 <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <Carousel>
                            
                                <Carousel.Item >
                                    <div className="aboutusFeedback">
                                        <Media className="align-self-center">
                                            <Media left>
                                                <Media src = "images/stafing.jpeg" width = "500px"/>
                                            </Media>
                                            <Media body>
                                                <Media heading className="text-center">
                                                    Client 1
                                                </Media>
                                                <div className="container">
                                                        <div className="row">
                                                            <div className="col-md-8 offset-md-2">
                                                                <quote><h3>Feedback From Cliet</h3></quote>
                                                                <cite>abc</cite>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </Media>
                                        </Media>
                                    </div>
                                        
                                </Carousel.Item>
                                <Carousel.Item >
                                    <div className="aboutusFeedback">
                                        <Media className="align-self-center">
                                                <Media left>
                                                    <Media src = "images/stafing.jpeg" width = "500px"/>
                                                </Media>
                                                <Media body>
                                                    <Media heading className="text-center">
                                                        Client 1
                                                    </Media>
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-md-8 offset-md-2">
                                                                <quote><h3>Feedback From Cliet</h3></quote>
                                                                <cite>abc</cite>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Media>
                                            </Media>
                                    </div>
                                        
                                </Carousel.Item>
                                <Carousel.Item >
                                    <div className="aboutusFeedback">
                                        <Media className="align-self-center">
                                                <Media left>
                                                    <Media src = "images/stafing.jpeg" width = "500px"/>
                                                </Media>
                                                <Media body>
                                                    <Media heading className="text-center">
                                                        Client 1
                                                    </Media>
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-md-8 offset-md-2">
                                                                <quote><h3>Feedback From Cliet</h3></quote>
                                                                <cite>abc</cite>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Media>
                                            </Media>
                                    </div>
                                        
                                </Carousel.Item>
                        </Carousel>
                        </div>
                    </div>
                 </div>

             
         </section>
   
           
        
         </>
        );
    }
}

export default About;