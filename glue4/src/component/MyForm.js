import { Form, Button } from "react-bootstrap";
import React, { Component } from "react";
import "./component.css";

export default class MyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    //below sends the trigger to App.js to update state to true THUS triggering the Toasty to pop
    this.props.updateState();
    this.setState({ firstName: "", lastName: "", email: "", password: "" });
  };

  render() {

    const { firstName, lastName, email, password } = this.state;

    return (
      <>
        <Form onSubmit={this.handleSubmit} 
              style = {{backgroundColor: "lightgray", 
                        width: "400px", 
                        padding: "20px", 
                        borderRadius: "5%",
                        }}>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => this.setState({ firstName: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => this.setState({ lastName: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </Form.Group><br/>
          <Button variant = "danger" type = "submit">Submit</Button>
        </Form>
      </>
    );
  }
}
