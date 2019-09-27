import React, { Component } from 'react';
import {connect} from 'react-redux';
import Cart from '../components/Cart/Cart';
import CartItem from '../components/CartItem/CartItem';
import CartResult from '../components/CartResult/CartResult';
import * as Message from '../constants/Message';
import {actDeleteProductInCart, actChangeMessage, actUpdateProductInCart} from '../actions/index';



class CartContainer extends Component {
    render() {
        var {cart} = this.props;
        // console.log(cart);
        
        return (
            <div>
                <Cart>
                    {this.showCartItem(cart)}
                    {this.showTotalAmount(cart)}
                </Cart>
            </div>
        );
    }
    showCartItem = (cart) => {
        var {onDeleteProductInCart, onChangeMessage,onUpdateProductInCart} = this.props;
        
        var result = Message.MSG_CART_EMPTY;
        if(cart.length >0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem 
                        key={index}
                        item={item}
                        index={index}
                        onDeleteProductInCart={onDeleteProductInCart}
                        onChangeMessage = {onChangeMessage}
                        onUpdateProductInCart = {onUpdateProductInCart}
                    />
                );
            });
        }

        return result;
    }
    showTotalAmount = (cart) => {
        var result = null;
        if(cart.length > 0){
            result = <CartResult cart={cart}/>
        }
        return result;
    } 
    
    

}

const mapStateToProps =  state => { //chuyen state o store thanh props
    return {
        cart : state.cart
    }
}
const mapDispatchToProps =(dispatch, props) => {
    return {
        onDeleteProductInCart :(product) => {
            dispatch(actDeleteProductInCart(product));
        },
        onChangeMessage : (message) => {
            dispatch(actChangeMessage(message));
        },
        onUpdateProductInCart : (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);