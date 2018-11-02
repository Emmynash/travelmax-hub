import React, { Component } from 'react';
import AppBar from '../UI/AppBar/AppBar';
import Image from '../UI/Image/Image';
import FullwidthGrid from '../UI/Grid/FullwidthGrid';
import classes from './Hotel.css';
// import Search from '../UI/Search/Search'
import Footer from '../UI/Footer/Footer';
import Aux from '../../HOC/Aux/Aux';
// import LoginModal from '../UI/Modal/loginModal';




class Hotel extends Component{
 
 render(){
    
    return(
        <Aux>
        <AppBar>
           
        </AppBar>
        <Image>
             
        </Image>
        <div className={classes.body}>
            <FullwidthGrid />
        </div>
        <Footer />
        </Aux>
        );
    
    }
    
}

    
export default Hotel;



