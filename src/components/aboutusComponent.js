import React ,{Component} from 'react';
import {Card,CardBody,CardHeader,CardImg,CardText,CardTitle,Media,UncontrolledCollapse,Button} from 'reactstrap';
import {Carousel} from 'react-bootstrap';
import {Card as ACard} from 'antd';
// import 'antd/dist/antd.css';
import {NavLink} from 'react-router-dom';
const { Meta } = ACard;

function RenderClients(){
    let temp = [{
                name: "Haryana Cooperative bank",
                img:"images/banklogo.png"
                },
                {
                    name: "Haryana Cooperative bank",
                    img:"images/banklogo.png"
                },
                {
                    name: "Haryana Cooperative bank",
                    img:"images/banklogo.png"
                },
                {
                    name: "Haryana Cooperative bank",
                    img:"images/banklogo.png"
                },
                {
                    name: "Haryana Cooperative bank",
                    img:"images/banklogo.png"
                },
                {
                    name: "Haryana Cooperative bank",
                    img:"images/banklogo.png"
                }
                ];

    let ans = temp.map((item)=>{

        return(
            <div className="col-md-3">
                <div className="clientItem">
                    <div className="clientImg text-center">
                        <img src = {item.img} width="50%" height="50%"/>
                    </div>
                    <div className="clientName text-center">
                        <h6>{item.name}</h6>
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
                    <CardImg src = {`${temp[i].img}`}/>
                    <CardBody>
                        {`${temp[i].desc}`}
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

        this.state = {
            customers: 0
        }

        this.incCounter = this.incCounter.bind(this);
        this.checkLocation = this.checkLocation.bind(this);
    }

    incCounter(maxVal = 100){

        setInterval(()=>{

            if(maxVal == this.state.customers)
            {
                return;
            }
            this.setState({
                customers : this.state.customers+1
            });
        },100);
    }

    checkLocation(){
        console.log(window.scrollY);
        if(window.scrollY>=300)
        {
            this.incCounter();
        }
    }
    render(){

        window.addEventListener('scroll',this.checkLocation)
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
            
        <section className="overview">
            <div className = "container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Overview</h2>
                        <p>
                        Infosys is a global leader in next-generation
                        digital services and consulting. We enable
                        clients in more than 50 countries to navigate
                        their digital transformation.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <p>
                        With nearly four decades of experience in managing the systems and
                        workings of global enterprises, we expertly steer our clients through their
                        digital journey. We do it by enabling the enterprise with an AI-powered
                        core that helps prioritize the execution of change. We also empower the
                        business with agile digital at scale to deliver unprecedented levels of
                        performance and customer delight. Our always-on learning agenda drives
                        their continuous improvement through building and transferring digital
                        skills, expertise, and ideas from our innovation ecosystem.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 text-center">
                        <h1>{this.state.customers}+</h1>
                        <p>Custormers</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h1>{this.state.customers}+</h1>
                        <p>Good Feebacks</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h1>{this.state.customers}+</h1>
                        <p>Cities</p>
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
                            <cite>Hover over the logos</cite>
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