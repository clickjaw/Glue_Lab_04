import React, {Component} from "react"
import {Toast, ToastContainer} from "react-bootstrap"
import "./component.css"

export default class Toasty extends Component {
    constructor(props){
        super(props)
        this.state ={show:false}
    }

    handleClose = () => {
        this.setState({show:false});
        this.props.falseState();
    }

  render() {
    return (

        <ToastContainer position='middle-center' style = {{width: "300px"}}>
            <Toast show={this.props.isSubmitted} onClose={this.handleClose}>
            <Toast.Header className = "headerToast"></Toast.Header>
            <Toast.Body className = "headerBody">Form Submitted</Toast.Body>
            </Toast>
        </ToastContainer>   
         )
  }
}
