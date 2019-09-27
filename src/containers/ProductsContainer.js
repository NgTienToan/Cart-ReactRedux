import React, { Component } from 'react';
import {connect} from 'react-redux';
import Products from '../components/Products/Products';
import Product from '../components/Product/Product';
import {actAddToCart, actChangeMessage} from '../actions/index';

class ProductsContainer extends Component {
    render() {
        var {products} = this.props;
        return (
            <Products>
                {this.showProducts(products)}
            </Products> // lay du lieu o store truyen cho products o components
        );
    }
    showProducts(products) {
        var result = null;
        var {onAddToCart, onChangeMessage} = this.props;
        if(products.length > 0){
            result = products.map((product, index) => {
                return <Product 
                key ={index} 
                product ={product} 
                onAddToCart ={ onAddToCart}
                onChangeMessage = {onChangeMessage}


                />
            })
        }
        return result;
    }
    

}

const mapStateToProps =  state => { //chuyen state o store thanh props
    return {
        products : state.products
    }
}
const mapDispatchToProps =(dispatch, props) =>{
    return {
        onAddToCart : (product) => {
            dispatch(actAddToCart(product, 1));
        },
        onChangeMessage : (message) =>{
            dispatch(actChangeMessage(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);