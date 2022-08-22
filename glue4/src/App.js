import React, { Component } from 'react';
import MyForm from "./component/MyForm";
import Toast from "./component/Toasty";
import data from "./data.json";
import MyCard from "./component/MyCard";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
    };
  }

  updateState = () => {
    this.setState({ isSubmitted: true });
    console.log("isSubmitted is TRUE");
  };

  falseState = () => {
    this.setState({ isSubmitted: false });
    console.log("isSubmitted is FALSE");
  };

  render() {
    return (
      <>

        <MyForm updateState={this.updateState} />
        <Toast isSubmitted={this.state.isSubmitted} falseState = {this.falseState}></Toast>
        <MyCard data = {data}/>
      </>
    );
  }
}
