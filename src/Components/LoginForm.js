import React from 'react';
import { useState } from 'react';
import { Avatar, Button, Grid, Paper, TextField } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link, Redirect, withRouter } from 'react-router-dom';


import { useHistory } from 'react-router-dom';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}



function LoginForm({ Login }) {

    const [notification, setNotification] = React.useState(false);
    const [detailsNotification, setDetailsNotification] = React.useState(false);

    const [success, setSuccess] = React.useState(false);

    const handleSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotification(false);
        setSuccess(false)
        setDetailsNotification(false)
    }

    const useStyles = makeStyles((theme) => ({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    }));


    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [errorFieldEmail, setErrorFieldEmail] = React.useState(false);
    const [errorFieldPassword, setErrorFieldPassword] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };


    const history = useHistory();

    const adminUser = {
        name: "Shivam",
        email: "shivam@gmail.com",
        password: "shivam"

    };

    const [details, setDetails] = useState({ name: "", email: "", password: "" });


    // const [user, setUser] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState("");

    const paperStyle = { backgroundColor: '#f6f6f6', padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: 'red' }


    Login = details => {

        if (details.email !== "") {
            // setError("Enter Email");
            setError("")
            setErrorFieldEmail(false)
        }

        if (details.password !== "")
        {   setError("")
            setErrorFieldPassword(false)
        }

        if (details.email === adminUser.email && details.password === adminUser.password) {
            console.log("Logged In");
            setDetails({
                name: details.name,
                email: details.email,
                password: details.password
            });

        }
        else if (details.email === "" && details.password === "") {
            setError("Please Enter Mandatory Fields")
            setNotification(true)
            setErrorFieldEmail(false)
            setErrorFieldPassword(false)
        //    setErrorField(true)
        }
        else if (details.email === "") {
            // setError("Enter Email");
            setErrorFieldEmail(true)
        }
       
        else if (details.password === "") {
            // setError("Enter Password")
            setErrorFieldPassword(true)
        }
       
        else {
            setDetailsNotification(true)
            setError("Details do not Match");
        }

      
    }

    // const token = localStorage.getItem("token");

    // var loggedIn = true;

    // if (token == null) {
    //     loggedIn = false
    // }


    const submitHandler = e => {
        e.preventDefault();
        Login(details);

        if (details.email !== adminUser.email || details.password !== adminUser.password) {
            // setNotification(true)
            // console.log(success, open, notification);
        }

        if (details.email === adminUser.email && details.password === adminUser.password) {

            localStorage.setItem("token", "abcd");
            setOpen(!open)
            setTimeout(() => {
                setSuccess(true);
                console.log(success, open, notification);

            }, 2000)
            console.log(success, open, notification);
            // // <Redirect to="/HomePage"/>
            window.location.reload();
                history.push("/HomePage")

          

            
            
            // window.location.reload();


        }
    }


    const token = localStorage.getItem("token");

    var loggedIn = true;

    if (token == null) {
        loggedIn = false
    }


    if (loggedIn !== false) {
        return <Redirect to="/HomePage" />
    }


    return (

        <>


            {/* {(user.name !== "") ? (

                <div className="welcome">
                    <Grid align='center'>
                        <Paper elevation={10} style={paperStyle} >
                            <Avatar style={avatarStyle} ><LockOpenOutlinedIcon /></Avatar>
                            <h3>Logged In </h3>
                            <h2>Hi, <span>{adminUser.name}</span> </h2>
                            <Button color='primary' variant="contained" onClick={Logout}>Logout</Button>
                        </Paper>
                    </Grid>
                </div>

            ) : ( */}
            {/* {(loggedIn !== false ) ? (<Redirect to="/HomePage" />) :} */}
             <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                        <h2> Sign In </h2>
                    </Grid>
                    <form onSubmit={submitHandler} >

                        <div className="form-inner">
                            {/* {(error !== "") ? (<div className="error" style={{
                                color : 'red'
                            }}>{error}</div>) : ""} */}
                            <div className="form-group">
                                <TextField label='Email' placeholder="Enter Email" name="email"

                                    id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} fullWidth
                                    error = {errorFieldEmail}
                                    helperText = {errorFieldEmail === true ? "Please Enter Email" : ""}
                                />
                            </div>
                            <div className="form-group">
                                <TextField label="Password" placeholder="Enter Password" type="password" name="password"
                                    id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} fullWidth
                                    error = {errorFieldPassword}
                                    helperText = {errorFieldPassword === true ? "Please Enter Password" : ""}
                                />
                            </div>
                            <div>
                                <br />
                            </div>
                            <div>
                                <Button type='submit' color='primary' variant="contained" fullWidth

                                > Login </Button>
                                 <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center'
                    }}
                    
                    open={notification}
                    autoHideDuration={3000}
                    onClose={handleSnackbar}
                    message='Error'
                    action={
                        <React.Fragment>
                            <Button onClick={handleSnackbar}>Close</Button>
                        </React.Fragment>
                    } >
                        <Alert onClose={handleSnackbar} severity="error">
                        Please Enter Mandatory Fields 
        </Alert>
                        </Snackbar>
                        <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center'
                    }}
                    open={detailsNotification}
                    autoHideDuration={3000}
                    onClose={handleSnackbar}
                    message='Error'
                    action={
                        <React.Fragment>
                            <Button onClick={handleSnackbar}>Close</Button>
                        </React.Fragment>
                    } >
                        <Alert onClose={handleSnackbar} severity="warning">
                        Details do not Match
        </Alert>
                        </Snackbar>
                                {/* <Snackbar
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center'
                                    }}
                                    open={notification}
                                    autoHideDuration={5000}
                                    onClose={handleSnackbar}
                                    message='Please Enter Mandatory Fields'
                                    action={
                                        <React.Fragment>
                                            <Button onClick={handleSnackbar}>Close</Button>
                                        </React.Fragment>
                                    } /> */}
                                <Snackbar
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center'
                                    }}
                                    open={success}
                                    autoHideDuration={5000}
                                    onClose={handleSnackbar}
                                    message='Success'
                                    action={
                                        <React.Fragment>
                                            <Button onClick={handleSnackbar}
                                            >Close</Button>
                                        </React.Fragment>
                                    } />
                                <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                                    <CircularProgress color="inherit" />
                                </Backdrop>
                            </div>
                        </div>

                    </form>
                    <br />
                    <Link to="/SignUp" ><span >Create an Account?...Sign Up</span></Link>

                </Paper>
            </Grid>
            )







        </>
    )
}

export default withRouter(LoginForm)
