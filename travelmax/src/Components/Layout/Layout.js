import React, { Component } from 'react';
// import Aux from '../../HOC/Aux/Aux';

class Layout extends Component{
    
    render(){
        return(
            <main>{this.props.children}</main>
            );
        // (<Aux>
        
        //     </Aux>);
    }
}

export default Layout;