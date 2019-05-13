import React, { Component } from 'react';
import Header from './header';
import Container from './container';

class Layout extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <Header/>
            <Container/>
            </>
         );
    }
}
 
export default Layout;