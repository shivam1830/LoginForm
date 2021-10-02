import React, { useState } from 'react'
import axios from 'axios';
import { useHistory, Redirect } from 'react-router-dom';

import { Avatar, Button, Grid, Paper } from "@material-ui/core";
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import AddCircleIcon from '@material-ui/icons/AddCircle';


const AddUser = () => {



  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    phone: "",
    address: ""
  });

  // useEffect(() => {
  //   localStorage.setItem('Details', JSON.stringify(user));
  // }, [user]);

  const { name, address, phone } = user;

  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    localStorage.getItem('Details');
    history.push("/HomePage");
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
    history.push("/HomePage");
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
                        <Avatar style={avatarStyle}><AddCircleIcon /></Avatar>
                    </Grid>
            <h2 className="text">ADD USER</h2>
            <ValidatorForm onSubmit={e => onSubmit(e)} noValidate={true}>
              <div className="form">
                <TextValidator
                  fullWidth
                  label="Name"
                  type="text"
                  validators={['required']}
                  errorMessages={['Required']}
                  className="form"
                  placeholder="Enter Your Name"
                  name="name"
                  value={name}
                  onChange={e => onInputChange(e)}
                />

              </div>
              <br />
              <div className="form">

                <TextValidator
                  fullWidth
                  type="number"
                  label="Phone Number"
                  className="form"
                  validators={['required', 'matchRegexp:^[0-9]{10}$']}
                  errorMessages={['Required', 'Enter 10 digit Phone number']}
                  placeholder="Enter Your Phone Number"
                  name="phone"
                  value={phone}
                  onChange={e => onInputChange(e)}
                />

              </div>
              <br />
              <div className="form">
                <TextValidator
                  fullWidth
                  id="standard-multiline-static"
                  label="Address"
                  multiline
                  rows={4}
                  type="text"
                  validators={['required']}
                  errorMessages={['Required']}
                  className="form"
                  placeholder="Enter Address"
                  name="address"
                  value={address}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <br />
              <Button type='submit' color='primary' variant="contained" className="btn" >Save</Button>
              <Button onClick={btnCancel} style={btnButton}>Cancel</Button>

            </ValidatorForm>

          </Paper>
        </Grid>
      </div>
    </div>
  )
}

export default AddUser;