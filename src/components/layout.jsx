import React, { Component } from 'react';
import Header from './header';
import Container from './container';
import Footer from './footer';
import Infobox from './infobox';
export let zmienna = 1;


class Layout extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <Header/>
            <Infobox/>
            <Container/>
            <Footer/>
            </>
         );
    }
}
 
export default Layout;