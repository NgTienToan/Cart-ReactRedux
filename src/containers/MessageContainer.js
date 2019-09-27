import React, { Component } from 'react';
import {connect} from 'react-redux';
import Message from '../components/Message/Message';


class MessageContainer extends Component {
    render() {
        var {message} = this.props
        
        return (
           <Message message={message}/>
        );
    }
     
    
    

}

const mapStateToProps =  state => { //chuyen state o store thanh props
    return {
        message : state.message
    }
}

export default connect(mapStateToProps, null)(MessageContainer);