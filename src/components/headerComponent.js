import React ,{Component} from 'react';
import {Navbar,NavbarBrand,Jumbotron,Nav,NavbarToggler,Collapse,NavItem,Modal,ModalHeader
    ,Form, FormGroup,Label,Input,Button,ModalBody} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);

        this.state={
            isNavOpen:false,
            isModalOpen:false,
            isScrolled:false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal=this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.changeBackground = this.changeBackground.bind(this);
    }

    
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal(){
        this.setState({
            isModalOpen:!this.state.isModalOpen
        });
    }
    handleLogin(event){
        this.toggleModal();
        alert("Username : " + this.username.value + "Password :" + this.password.value + "Remember: " + this.remember.checked);
        event.preventDefault();
    }
    changeBackground(){
        console.log(window.scrollY);
        if(window.scrollY>=100){
            this.setState({
                isScrolled:true
            });
        }
        else{
            this.setState({
                isScrolled:false
            });
        }
    }
    render(){
        /*const changeBackground = ()=>{
            if(window.scrollY>=80){
                this.setState({
                    setNavbar:true
                });
            }
            else{
                this.setState({
                    navbar:true
                });
            }
        }*/
        window.addEventListener('scroll',this.changeBackground);
        return(
            
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Navbar expand="sm" className={this.state.isScrolled?'navbar-dark scrolled fixed-top':'navbar-dark fixed-top'}>
                            <div className="container">
                                <NavbarToggler onClick={this.toggleNav} />

                                <NavbarBrand className="mr-auto ml-4" href="/">
                                    Intact IT
                                </NavbarBrand>
                                <Collapse isOpen={this.state.isNavOpen} navbar >
                                    <Nav navbar className="mr-auto">
                                        <NavItem>
                                            <NavLink className="nav-link" to="/home">
                                                Home
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/aboutus">
                                                About Us
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/services">
                                                services
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/contactus">
                                                Contact Us
                                            </NavLink>
                                        </NavItem>
                                    
                                    </Nav>
                                </Collapse>
                                
                                
                            </div>
                        </Navbar>
                    </div>
                </div>
               
            </div>
        );
    }
}

export default Header