// import { Grid, Paper, Typography, Avatar, Button, TextField } from '@material-ui/core';
// import React from 'react';
// import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import { Link, useHistory, Redirect } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
// import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
// import Backdrop from '@material-ui/core/Backdrop';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import Snackbar from '@material-ui/core/Snackbar';
// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';


// const useStyles = makeStyles((theme) => ({
//     root: {
//         width: '100%',
//     },
//     backButton: {
//         marginRight: theme.spacing(1),
//     },
//     instructions: {
//         marginTop: theme.spacing(1),
//         marginBottom: theme.spacing(1),
//     },
//     backdrop: {
//         zIndex: theme.zIndex.drawer + 1,
//         color: '#fff',
//     },
// }));

// function getSteps() {
//     return ['', 'BasicInfo', ''];
// }




// export const SignUp = () => {

//     const classes = useStyles();
//     const [activeStep, setActiveStep] = React.useState(0);
//     const steps = getSteps();

//     const handleNext = () => {
//         setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     };

//     const handleBack = () => {
//         setActiveStep((prevActiveStep) => prevActiveStep - 1);
//     };

//     const handleReset = () => {
//         setActiveStep(0);
//     };



//     const paperStyle = { padding: '30px 20px ', width: 300, margin: "20px auto" }
//     const headerStyle = { margin: 0 }
//     const avatarStyle = { backgroundColor: 'green' }
//     const marginTop = { marginTop: 5 }
//     const [formObj, setFormObj] = React.useState({
//         formData: {
//             name: '',
//             email: '',
//             password: '',
//             confirmpassword: '',
//             phone: '',
//             checkedA: false,
//             gender: '',

//         },
//         submitted: false,
//         filterOptions: [],
//     });


//     const [notification, setNotification] = React.useState(false);

//     const [success, setSuccess] = React.useState(false);

//     const handleSnackbar = (event, reason) => {
//         if (reason === 'clickaway') {
//             return;
//         }

//         setNotification(false);
//         setSuccess(false)
//     }

//     const onCheckChange = (e) => {
//         const { formData } = formObj;
//         formData[e.target.name] = e.target.checked;
//         setFormObj({ formData: formData });
//     }

//     const [btn, setBtn] = React.useState(true);

//     const handleChange = (event) => {
//         // console.log("event", event.target.value);
//         const { formData } = formObj;
//         formData[event.target.name] = event.target.value;
//         setFormObj({ formData: formData });
//         if (formData.name !== '' && formData.email !== '' && formData.phone !== '' && formData.password !== '' && formData.confirmpassword !== '') {
//             setBtn(false)
//         }
//         else {
//             setBtn(true)
//         }

//         ValidatorForm.addValidationRule('isPasswordMatch', (value) => {

//             if (value !== formData.password) {
//                 return false;
//             }
//             return true;
//         });


//     }


//     // const useStyless = makeStyles((theme) => ({
//     //     backdrop: {
//     //         zIndex: theme.zIndex.drawer + 1,
//     //         color: '#fff',
//     //     },
//     // }));

//     // const classes = useStyless();
//     const [open, setOpen] = React.useState(false);

//     const handleClose = () => {
//         setOpen(false);
//     };

//     const history = useHistory();

//     const handleSubmit = () => {


//         // debugger;
//         const newFormObj = { ...formObj, submitted: true };
//         setFormObj(newFormObj);
//         // , () => {
//         //     setTimeout(() => {
//         //         this.setFormObj({ submitted: false });
//         //         console.log(formData, formObj);
//         //     }, 5000);

//         // });
//         console.log(formObj, newFormObj)

//         if ((formData.gender === 'male' || formData.gender === 'female') && (formData.checkedA === true)) {
//             setTimeout(() => {
//                 setOpen(!open)
//             }, 1000)

//             setTimeout(() => {
//                 setSuccess(true)
//             }, 3000)

//             setTimeout(() => {
//                 history.push("/LoginForm")
//             }, 4000)
//         }
//         else {
//             setNotification(true)
//         }






//         // console.log(newFormObj, open, formData, formObj);
//         // debugger;
//     }


//     // const useStyles = makeStyles((theme) => ({
//     //     root: {
//     //         '& .MuiTextField-root': {
//     //             margin: theme.spacing(1),
//     //             width: 200,
//     //         },
//     //     },
//     // }));



//     // const handleError = (e) => {
//     //     console.log(formObj.formData.name, e);
//     //     return false;
//     // }


//     const { formData } = formObj;

//     const token = localStorage.getItem("token");

//     var loggedIn = true;

//     if (token == null) {
//         loggedIn = false
//     }


//     if (loggedIn !== false) {
//         return <Redirect to="/HomePage" />
//     }

    

// function getStepContent(stepIndex) {
//     switch (stepIndex) {
//         case 0:
//             return (
//                 <>
//                 <ValidatorForm
//                     onSubmit={handleSubmit}
//                     noValidate={true}
//                 >

//                     <TextValidator fullWidth name="name" type="text"
//                         id="name"
//                         label="Name"
//                         placeholder="Enter Name"
//                         onChange={handleChange}
//                         value={formData.name}
//                         validators={['required']}
//                         errorMessages={['Required']}
//                         // defaultValue=""
//                         helperText="Enter Name"
//                         variant="outlined"
//                     // inputProps={{
//                     //     // minLength: 2
//                     // }}
//                     />
//                     <TextValidator fullWidth name="email" type="text"
//                         id="email"
//                         label="Email"
//                         placeholder="Enter Email"
//                         onChange={handleChange}
//                         value={formData.email}
//                         validators={['required', 'isEmail']}
//                         errorMessages={['Required', 'Enter Valid Email']}
//                         helperText="Enter Email"
//                         variant="outlined"

//                     />

//                     <FormControl component="fieldset" style={marginTop}>
//                         <FormLabel component="legend">Gender</FormLabel>
//                         <RadioGroup aria-label="gender" name="gender" onChange={handleChange} style={{ display: 'initial' }}>
//                             <FormControlLabel value="female" control={<Radio />} label="Female" />
//                             <FormControlLabel value="male" control={<Radio />} label="Male" />
//                         </RadioGroup>
//                     </FormControl>

//                     <TextValidator fullWidth name="phone" type="number"
//                         id="phone"
//                         label="Phone Number"
//                         placeholder="Enter Phone Number"
//                         onChange={handleChange}
//                         value={formData.phone}
//                         validators={['required', 'matchRegexp:^[0-9]{10}$']}
//                         errorMessages={['Required', 'Enter 10 digit Phone number']}
//                         helperText="Enter Phone Number"
//                         variant="outlined"

//                     />

//                     <TextValidator fullWidth name="password" type="password"
//                         id="password"
//                         label="Password"
//                         placeholder="Enter Password"
//                         onChange={handleChange}
//                         value={formData.password}
//                         validators={['required']}
//                         errorMessages={['Required']}
//                         helperText="Enter Password"
//                         variant="outlined"

//                     />

//                     <TextValidator fullWidth name="confirmpassword" type="password"
//                         id="confirmpassword"
//                         label="Confirm Password"
//                         placeholder="Enter Confirm Password"
//                         onChange={handleChange}
//                         value={formData.confirmpassword}
//                         validators={['required', 'isPasswordMatch',]}
//                         errorMessages={['Required', 'Password Mismatch',]}
//                         helperText="Enter Confirm Password"
//                         variant="outlined"

//                     />



//                     <FormControlLabel
//                         name="remember"
//                         onChange={onCheckChange}
//                         checked={formData.checkedA}
//                         control={<Checkbox name="checkedA"
//                         />}

//                         label="I accept the terms and conditions" />

//                     <Button type="Submit" variant="contained" color='primary'
//                         onChange={handleChange}
//                         disabled={btn}>Sign Up
//                     </Button>
//                     </ValidatorForm>
                
//                 </>
//             );
//         case 1:
//             return ;
//         case 2:
//             return '';
//         default:
//             return '';
//     }
// }



//     return (
//         <Grid >
//             <Paper elevation={20} style={paperStyle}>
//                 <Grid align='center'>
//                     <Avatar style={avatarStyle}>
//                         <AddCircleOutlineOutlinedIcon />
//                     </Avatar>
//                     <h2 style={headerStyle} >Sign Up</h2>
//                     <Typography variant='caption' gutterBottom> Please fill this Form! </Typography>
//                     <div className={classes.root}>
//                     <Stepper activeStep={activeStep} alternativeLabel>
//                         {steps.map((label) => (
//                             <Step key={label}>
//                                 <StepLabel>{label}</StepLabel>
//                             </Step>
//                         ))}
//                     </Stepper>
//                     </div>
//                 </Grid>
//                 {console.log(formData)}

//                 {/* <ValidatorForm
//                     onSubmit={handleSubmit}
//                     noValidate={true}
//                 >

//                     <TextValidator fullWidth name="name" type="text"
//                         id="name"
//                         label="Name"
//                         placeholder="Enter Name"
//                         onChange={handleChange}
//                         value={formData.name}
//                         validators={['required']}
//                         errorMessages={['Required']}
//                         // defaultValue=""
//                         helperText="Enter Name"
//                         variant="outlined"
//                     // inputProps={{
//                     //     // minLength: 2
//                     // }}
//                     />
//                     <TextValidator fullWidth name="email" type="text"
//                         id="email"
//                         label="Email"
//                         placeholder="Enter Email"
//                         onChange={handleChange}
//                         value={formData.email}
//                         validators={['required', 'isEmail']}
//                         errorMessages={['Required', 'Enter Valid Email']}
//                         helperText="Enter Email"
//                         variant="outlined"

//                     />

//                     <FormControl component="fieldset" style={marginTop}>
//                         <FormLabel component="legend">Gender</FormLabel>
//                         <RadioGroup aria-label="gender" name="gender" onChange={handleChange} style={{ display: 'initial' }}>
//                             <FormControlLabel value="female" control={<Radio />} label="Female" />
//                             <FormControlLabel value="male" control={<Radio />} label="Male" />
//                         </RadioGroup>
//                     </FormControl>

//                     <TextValidator fullWidth name="phone" type="number"
//                         id="phone"
//                         label="Phone Number"
//                         placeholder="Enter Phone Number"
//                         onChange={handleChange}
//                         value={formData.phone}
//                         validators={['required', 'matchRegexp:^[0-9]{10}$']}
//                         errorMessages={['Required', 'Enter 10 digit Phone number']}
//                         helperText="Enter Phone Number"
//                         variant="outlined"

//                     />

//                     <TextValidator fullWidth name="password" type="password"
//                         id="password"
//                         label="Password"
//                         placeholder="Enter Password"
//                         onChange={handleChange}
//                         value={formData.password}
//                         validators={['required']}
//                         errorMessages={['Required']}
//                         helperText="Enter Password"
//                         variant="outlined"

//                     />

//                     <TextValidator fullWidth name="confirmpassword" type="password"
//                         id="confirmpassword"
//                         label="Confirm Password"
//                         placeholder="Enter Confirm Password"
//                         onChange={handleChange}
//                         value={formData.confirmpassword}
//                         validators={['required', 'isPasswordMatch',]}
//                         errorMessages={['Required', 'Password Mismatch',]}
//                         helperText="Enter Confirm Password"
//                         variant="outlined"

//                     />



//                     <FormControlLabel
//                         name="remember"
//                         onChange={onCheckChange}
//                         checked={formData.checkedA}
//                         control={<Checkbox name="checkedA"
//                         />}

//                         label="I accept the terms and conditions" />

//                     <Button type="Submit" variant="contained" color='primary'
//                         onChange={handleChange}
//                         disabled={btn}>Sign Up
//                     </Button> */}

//                     <Snackbar
//                         anchorOrigin={{
//                             vertical: 'top',
//                             horizontal: 'center'
//                         }}
//                         open={notification}
//                         autoHideDuration={1000}
//                         onClose={handleSnackbar}
//                         message='Error'
//                         action={
//                             <React.Fragment>
//                                 <Button onClick={handleSnackbar}>Close</Button>
//                             </React.Fragment>
//                         } />
//                     <Snackbar
//                         anchorOrigin={{
//                             vertical: 'top',
//                             horizontal: 'center'
//                         }}
//                         open={success}
//                         autoHideDuration={3000}
//                         onClose={handleSnackbar}
//                         message='Success'
//                         action={
//                             <React.Fragment>
//                                 <Button onClick={handleSnackbar}>Close</Button>
//                             </React.Fragment>
//                         } />

//                     <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
//                         <CircularProgress color="inherit" />
//                     </Backdrop>
//                 {/* </ValidatorForm> */}
                

//                 <br />

//                 <div className={classes.root}>
//                     {/* <Stepper activeStep={activeStep} alternativeLabel>
//                         {steps.map((label) => (
//                             <Step key={label}>
//                                 <StepLabel>{label}</StepLabel>
//                             </Step>
//                         ))}
//                     </Stepper> */}
//                     <div>
//                         {activeStep === steps.length ? (
//                             <div>
//                                 <Typography className={classes.instructions}>All steps completed</Typography>
//                                 <Button onClick={handleReset}>Reset</Button>
//                             </div>
//                         ) : (
//                             <div>
//                                 <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
//                                 <div>
//                                     <Button
//                                         disabled={activeStep === 0}
//                                         onClick={handleBack}
//                                         className={classes.backButton}
//                                     >
//                                         Back
//                                     </Button>
//                                     <Button variant="contained" color="primary" onClick={handleNext}>
//                                         {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//                                     </Button>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>

//                 <br />

//                 <Link to="/LoginForm" ><span>Already Have a Account?...</span> Log In</Link>

//             </Paper>
//         </Grid>

//     );

// }


// export default SignUp;
