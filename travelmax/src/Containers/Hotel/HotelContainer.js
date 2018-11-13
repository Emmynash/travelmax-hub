import React, { Component } from 'react';
import Hotel from '../../Components/Hotel/Hotel';
import Aux from '../../HOC/Aux/Aux';

class HotelContainer extends Component{
    
    render(){
        return (
            <Aux>
                <Hotel />
            </Aux>
            );
    }
}

export default HotelContainer;
