import React, { Component } from "react";

import Container from '@material-ui/core/Container';
import { TextField } from "@material-ui/core";
import  Button  from "@material-ui/core/Button";

export default class Login extends Component {
    render(){
        return (
            <Container maxWidth="sm">
                <h1>Login Here</h1>
                <form noValidate autoComplete="off">
                    <TextField
                        label="Email"
                        style={{ margin: 8, maxWidth: 1000 }}
                        placeholder="Enter Email"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                    />

                    <TextField
                        label="Password"
                        style={{ margin: 8, maxWidth: 1000 }}
                        placeholder="Enter Password"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                    />

                    <Button variant="contained" color="primary">Login</Button>
                </form>
            </Container>
        );
    }
}