import React,{Component} from 'react';
import Header from './headerComponent';
import {Card,CardBody,UncontrolledCarousel} from 'reactstrap';
import {Carousel} from 'react-bootstrap';
import {Switch,Route,Redirect} from 'react-router-dom';
import Footer from './footer';
import Home from './homeComponent';
import About from './aboutusComponent';
import Services from './servicesComponent';
import Contact from './contactusComponent';



class Main extends Component{
    constructor(props){
        super(props);
    }

    render(){


        return(
            <>
                <Header/>
                    <Switch>
                        <Route path = "/home" component={Home}/>
                        <Route path = "/aboutus" component={About}/>
                        <Route path = "/services" component = {Services}/>
                        <Route path = "/contactus" component = {Contact}/>
                        <Redirect to ="/home"/>
                    </Switch>
                <Footer/>
            </>
        
        )
    }
}

export default Main;