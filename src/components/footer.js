import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component{
    constructor(props){
        super(props);
    }

    render(){

        return (
           <footer>
               <div className="container">
                   <div className="row">
                        <div className="col-md-4">
                            <ul className="list-unstyled list1">
                            <li ><Link to="#">Home</Link></li>
                            <li><Link to="#">About</Link></li>
                            <li><Link to="#">Services</Link></li>
                            <li><Link to="#">Contact</Link></li>
                        </ul>
                        </div>
                        <div className="col-md-4 col-sm-5 address1">
                            <h5>Our Address</h5>
                            <address>
                            aaaaaaaaaaa<br />
                            bbbbbbbbbbbbbbbbbb<br />
                            India<br />
                            
                            </address>
                         </div>
                         <div className="col-md-4">
                            <i className="fa fa-phone fa-lg"></i>: +91-xxxxxxxxx<br />
                            <i className="fa fa-fax fa-lg"></i>: +91-uuuuuuuuuuu<br />
                            <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:nikhilsvs@gmail.com">
                                nikhilsvs@gmail.com</a>
                         </div>
                   </div>
                   <div className="row">
                       <div className="col-md-8 offset-md-4">
                           <ul className="list-unstyled list2">
                               <li className="listitem"><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                               <li className="listitem"><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
                               <li className="listitem"><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                               <li className="listitem"><Link to="#"><i className="fa fa-instagram"></i></Link></li>
                           </ul>
                       </div>
                   </div>
               </div>
           </footer>
          );
    }
}

export default Footer;