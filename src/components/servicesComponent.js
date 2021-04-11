import React , {Component} from 'react';
import ReactCardCarousel from 'react-card-carousel';


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
                        }
        }
     
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
            return(
                <div className="cardCarousel-Item">
                   
                   <img src = {item.img} width="100%" height="40%"/>
                        <h5>{item.name}</h5>
                        
                        <p>
                            <div className="container">
                                {item.desc}
                            </div>
                            
                        </p>
                        <button className="btn btn-dark ">Know More</button>
                    
                   
                </div>
            )
           
        });
        return(
            <section className="servicesSection">
                <div className="servicesHeader">
                    <div className="overlay">
                    <div className="headerRow">
                        <div className="container">
                            <div className="row">
                                <div className ="col-12 col-md-6 text-center align-self-center">
                                    <h1>Our Services</h1>
                                </div>
                                <div className="col-12 col-md-6 d-none d-md-block">
                                    <img src="images/pic1.jpg" width="300px"/>
                                </div>
                            </div>
                        </div>
                           
                        </div>
                    </div>
                </div>
                    
               
                 <div className="container">
                    
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card-carousel-style">
                                    <ReactCardCarousel autoplay={ true } autoplay_speed={ 2500 } >
                                        {ans}
                                    </ReactCardCarousel>
                            </div>
                       
                        </div>
                        <div className="col-md-6 text-center align-self-center">
                            <h2><cite>One of the Leading services provider</cite></h2>
                            <h4>ffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffff
                                ffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffff
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
           
        )
    }

}

export default Services;