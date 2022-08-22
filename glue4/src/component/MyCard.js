import React, { Component } from 'react'
import {Card, Form, Button} from 'react-bootstrap'

export default class MyCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            card: this.props.data
        }
    }

    handleChange = (e) =>{
        e.preventDefault()
        
        const filteredArr = this.props.data.filter((obj) => {
            
            if(e.target.value === ''){
                return obj
            }else if(obj.name.toLowerCase().startsWith(e.target.value.toLowerCase())){
                return obj
            }
        })
        this.setState({card: filteredArr})
       
    }

    render() {
    return (
        <>
        <Form>
            <Form.Group style = {{width: "200px", marginLeft: "20px"}}>
            <Form.Label>Search by Name </Form.Label>
            <Form.Control type='text' placeholder='&#x1F50D;Search...' onChange={this.handleChange}></Form.Control>
            </Form.Group>
            <Button style = {{position: "relative", bottom: "38px", left: "230px"}}variant='danger' type='submit'>Submit</Button>
        </Form>

        {this.state.card.map((obj) => {

            return(
            <Card style = {{ width: '18rem', backgroundColor: "white", border: "none"}}>
            <Card.Body>
                <Card.Title style = {{color: "blue"}}>{obj.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Username: {obj.username}</Card.Subtitle>
                <Card.Text>Email: {obj.email}<br/> City: {obj.address.city}
                </Card.Text>
            </Card.Body>
        </Card>
        )
        })}
        </>
    )
    }
}
