import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams, Redirect } from "react-router-dom";
import { Avatar, Button, Grid, Paper } from "@material-ui/core";
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

import EditIcon from '@material-ui/icons/Edit';
const EditUser = () => {


    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        phone: "",
        address: ""
    });

    const { name, address, phone } = user;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    
    useEffect(() => {
        loadUser();
    },[]);



    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`, user);
        history.push("/Homepage");
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    };

    const token = localStorage.getItem("token");

    var loggedIn = true;

    if (token == null) {
        loggedIn = false
    }

    if (loggedIn === false) {
        return <Redirect to="/" />
    }

    const btnCancel = () => {
        history.push("/HomePage")
    }

    const btnButton = {
        color: "red",
    }

    const paperStyle = { backgroundColor: '#f6f6f6', padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: 'green' }

    return (
        <div className="container" align="center">
            <div className="auto ">
                <Grid>
                    <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><EditIcon /></Avatar>
                    </Grid>
                        <h2 className="text">EDIT USER</h2>
                        <ValidatorForm onSubmit={e => onSubmit(e)} noValidate={true}>
                            <div className="form">
                                <TextValidator
                                    fullWidth
                                    type="text"
                                    className="control"
                                    placeholder="Enter Your Name"
                                    name="name"
                                    validators={['required']}
                                    errorMessages={['Required']}
                                    label="Name"
                                    value={name}
                                    onChange={e => onInputChange(e)}
                                />
                            </div>
                            <br />
                            <div className="form">
                                <TextValidator
                                    fullWidth
                                    className="form"
                                    placeholder="Enter Your Phone Number"
                                    name="phone"
                                    validators={['required', 'matchRegexp:^[0-9]{10}$']}
                                    errorMessages={['Required', 'Enter 10 digit Phone number']}
                                    label="Phone Number"
                                    type="number"
                                    value={phone}
                                    onChange={e => onInputChange(e)}
                                />
                            </div>
                            <br />
                            <div className="form1">
                                <TextValidator
                                    fullWidth
                                    id="standard-multiline-static"
                                    label="Address"
                                    multiline
                                    rows={4}
                                    validators={['required']}
                                    errorMessages={['Required']}
                                    type="text"
                                    className="form"
                                    placeholder="Enter Address"
                                    name="address"
                                    value={address}
                                    onChange={e => onInputChange(e)}
                                />
                            </div>
                            <br />
                            <Button color='primary' variant="contained" type="submit" className="btn " >Update</Button>
                            <Button onClick={btnCancel} style={btnButton} >Cancel</Button>

                        </ValidatorForm>
                    </Paper>
                </Grid>
            </div>
        </div>
    );
};

export default EditUser;
