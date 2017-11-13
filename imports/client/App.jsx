import React from 'react';
import Header from '/imports/client/layout/header/Header';
import Footer from '/imports/client/layout/footer/Footer';

export default ({main, routeProps}) => {
    // main represents the component to render passed from the router
    // route props represent the properties that it receives from the router

    // where we do createElement, that's where your components will get rendered.
    return (
        <div id="app">
            <Header/>
            {React.createElement(main, routeProps)}
            <Footer/>
        </div>
    )
}