import React, { Component } from "react";

import Container from '@material-ui/core/Container';
import { TextField } from "@material-ui/core";
import  Button  from "@material-ui/core/Button";
import { connect } from 'react-redux';


export default class Register extends Component {


    constructor(props){
        super(props);
        this.state={
            email: '',
            first_name: '',
            last_name: '',
            password: ''
        }
    }



    handleSubmit = (e) => {
        e.preventDefault();
    }


    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }
    

    render(){
        return (
            <Container maxWidth="sm">
                <h1>Register Here</h1>
                <form validate autoComplete="off" onSubmit={this.handleSubmit}>
                    <TextField
                        id="first_name"
                        label="First Name"
                        style={{ margin: 8, maxWidth: 1000 }}
                        placeholder="Enter First Name"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        required={true}
                        onChange={this.handleChange}
                    />

                    <TextField
                        id="last_name"
                        label="Last Name"
                        style={{ margin: 8, maxWidth: 1000 }}
                        placeholder="Enter Last Name"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        required={true}
                        onChange={this.handleChange}
                    />

                    <TextField
                        id="email"
                        label="Email"
                        style={{ margin: 8, maxWidth: 1000 }}
                        placeholder="Enter Email"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        required={true}
                        type="email"
                        onChange={this.handleChange}
                    />

                    <TextField
                        id="password"
                        label="Password"
                        style={{ margin: 8, maxWidth: 1000 }}
                        placeholder="Enter Password"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        required={true}
                        onChange={this.handleChange}
                    />

                    <Button variant="contained" type="submit" color="primary">Login</Button>
                </form>
            </Container>
        );
    }
}