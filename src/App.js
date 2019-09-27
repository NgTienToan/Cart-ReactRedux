import React, { Component } from 'react';
import Header from '../src/components/Header/Header'
import ProductsContainer from '../src/containers/ProductsContainer';
import MessageContainer from '../src/containers/MessageContainer';
import Footer from '../src/components/Footer/Footer'
import CartContainer from './containers/CartContainer';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        <ProductsContainer />
                        <MessageContainer />
                        <CartContainer />
                        
                        
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;