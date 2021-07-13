import React , {Component} from 'react';
import ReactCardCarousel from 'react-card-carousel';
import {Modal,ModalHeader,ModalBody} from 'reactstrap';

class Services extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            CARD_STYLE: {
                            height: '500px',
                            width: '500px',
                            paddingTop: '80px',
                            textAlign: 'center',
                            background: '#52C0F5',
                            color: '#FFF',
                            fontSize: '12px',
                            textTransform: 'uppercase',
                            borderRadius: '10px',
                        },
            isSoftModalOpen : false,
            isStaffingModalOpen : false,
            isServicesModalOpen : false

        };

        this.toggleSoftModal = this.toggleSoftModal.bind(this);
        this.toggleServicesModal = this.toggleServicesModal.bind(this);
        this.toggleStaffingModal = this.toggleStaffingModal.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleSoftModal(){
        this.setState({
            isSoftModalOpen:!this.state.isSoftModalOpen
        });
    }
    toggleStaffingModal(){
        this.setState({
            isStaffingModalOpen:!this.state.isStaffingModalOpen
        });
    }
    toggleServicesModal(){
        this.setState({
            isServicesModalOpen:!this.state.isServicesModalOpen
        });
    }

    toggleModal(){
        this.setState({
            isServicesModalOpen:false,
            isSoftModalOpen:false,
            isStaffingModalOpen:false
        });
    }

    render(){

        let a = [
            {
                name:"Services",
                img:"images/services.jpg",
                desc:`dddddddddddddddddddddddd
                ddddddddddddddddddddd
                        nnnnnnnnnnnnnnnnnnnnn
                        nnnnnnnnnnnnnnnnnnn
                        dddddddddddddddddddd
                        dddddddddddddddddddddd
                        ddddddddddddddddddddddd
                        dddddddddddddd`
            },
            {
                name:"Software Development",
                img:"images/sde.jpg",
                desc:`dddddddddddddddddddddddd
                ddddddddddddddddddddd
                        nnnnnnnnnnnnnnnnnnnnn
                        nnnnnnnnnnnnnnnnnnn
                        dddddddddddddddddddd
                        dddddddddddddddddddddd
                        ddddddddddddddddddddddd
                        dddddddddddddd`
            },
            {
                name:"Staffing",
                img:"images/stafing.jpg",
                desc:`dddddddddddddddddddddddd
                ddddddddddddddddddddd
                        nnnnnnnnnnnnnnnnnnnnn
                        nnnnnnnnnnnnnnnnnnn
                        dddddddddddddddddddd
                        dddddddddddddddddddddd
                        ddddddddddddddddddddddd
                        dddddddddddddd`
            }
        ];
    
        let ans = a.map((item)=>{

            let btn = null;

            if(item.name == "Services")
            {
                btn = this.toggleServicesModal;
            }
            else if(item.name == "Software Development")
            {
                btn = this.toggleSoftModal;
            }
            else if(item.name == "Staffing")
            {
                btn = this.toggleStaffingModal;
            }
            return(
                <div className="cardCarousel-Item">
                   
                   <img src = {item.img} width="100%" height="40%"/>
                        <h5>{item.name}</h5>
                        
                        <p>
                            <div className="container">
                                {item.desc}
                            </div>
                            
                        </p>

                        <button className="btn btn-dark " onClick={btn}>Know More</button>
                    
                   
                </div>
            )
           
        });
        return(
            <>
            <section className="servicesSection">
                <div className="servicesHeader">
                    <div className="overlay">
                    <div className="headerRow">
                        <div className="container">
                            <div className="row">
                                <div className ="col-12 col-md-12 text-center align-self-center">
                                    <h1>Our Services</h1>
                                </div>
                                {/* <div className="col-12 col-md-6 d-none d-md-block">
                                    <img src="images/pic1.jpg" width="300px"/>
                                </div> */}
                            </div>
                        </div>
                           
                        </div>
                    </div>
                </div>
                    
               
                 <div className="container">
                    <div className="row " style={{height:"20vh"}}>
                        <div className="col-md-12 text-center mt-auto">
                            <h1 style = {{color:"#d9381e"}}>One of the Leading services provider</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card-carousel-style">
                                    <ReactCardCarousel autoplay={ true } autoplay_speed={ 2500 } >
                                        {ans}
                                    </ReactCardCarousel>
                            </div>
                       
                        </div>
                        <div className="col-md-6 text-center align-self-center">
                            <img src="images/pic1.jpg" width="400px"/>
                        </div>
                    </div>
                </div>
            </section>
            <Modal isOpen={this.state.isSoftModalOpen}>
                <ModalHeader toggle={this.toggleModal}>
                    <h2 style = {{color:"#d9381e"}}>
                        Software Development
                    </h2>
                </ModalHeader>
                <ModalBody>
                    ppppppppppppppppppppppppppppppppppppppppppppppppp
                    pppppppppppppppppppppppppppppppppppppppppppppppppp
                    pppppppppppppppppppppppppppppppppppppppppppppppppp
                    ppppppppppppppppppppppppppppppppppppppppppppppp
                </ModalBody>
            </Modal>
            <Modal isOpen={this.state.isStaffingModalOpen}>
                <ModalHeader toggle={this.toggleModal}>
                    <h2 style = {{color:"#d9381e"}}>
                        Staffing
                    </h2>
                </ModalHeader>
                <ModalBody>
                    ppppppppppppppppppppppppppppppppppppppppppppppppp
                    pppppppppppppppppppppppppppppppppppppppppppppppppp
                    pppppppppppppppppppppppppppppppppppppppppppppppppp
                    ppppppppppppppppppppppppppppppppppppppppppppppp
                </ModalBody>
            </Modal>
            <Modal isOpen={this.state.isServicesModalOpen}>
                <ModalHeader toggle={this.toggleModal}>
                    <h2 style = {{color:"#d9381e"}}>
                        Services
                    </h2>
                </ModalHeader>
                <ModalBody>
                    ppppppppppppppppppppppppppppppppppppppppppppppppp
                    pppppppppppppppppppppppppppppppppppppppppppppppppp
                    pppppppppppppppppppppppppppppppppppppppppppppppppp
                    ppppppppppppppppppppppppppppppppppppppppppppppp
                </ModalBody>
            </Modal>
           </>
        )
    }

}

export default Services;