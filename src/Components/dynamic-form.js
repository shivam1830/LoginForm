import React from 'react';
import { useState, useEffect } from 'react';
import { Avatar, Button, Grid, Paper, TextField } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link, Redirect, withRouter } from 'react-router-dom';


import { useHistory } from 'react-router-dom';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Dynamic from '../DynamicData/Dynamic.json';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';



const DynamicForm = () => {

    const paperStyle = { backgroundColor: 'white', padding: 20, height: '70vh', width: 280, margin: "20px auto" };
    const [data, setData] = useState(null)
    const [error, setError] = useState(false)
    const [formObj, setFormObj] = useState(
        {
                text: '',
                number: ''
        }
    )
    // const { formData } = formObj
    useEffect(() => {
        
        setData(Dynamic)


        console.log(data)
    });

    const history = useHistory();

    const handleSubmit = () => {
     
        
    
       
       
           
         history.push('/LoginForm')
    }
   

    const handleChange = (event) => {
      
        // formObj[event.target.name] = event.target.value;
        setFormObj({...formObj, [event.target.name] : event.target.value} )
         console.log(formObj)

        //   debugger
         Dynamic.map(form => {
             return(
                ValidatorForm.addValidationRule('minLength', () => {
                    if ((form.type === 'text' ? formObj.text.length.toString() < form.validation.minLength : '' )) {
                        return false;
                    }
                    return true;
                })
                // ValidatorForm.addValidationRule('requiredField', () => {
                //     if ((formObj.text !== form.validation.isRequired )) {
                //         return false;
                //     }
                //     return true;
                // })
 


             )
         })
        


       
    }

    const handleCancel = () => {
        history.push("/LoginForm")
    }
    return (
        <>
            <Grid>
                <Paper elevation={10} style={paperStyle}>

                    <Grid align='center'>
                        <Avatar style={{
                            background: 'green'
                        }}><LockOpenIcon /></Avatar>
                        <h2> Form </h2>
                    </Grid>

                    

                    <ValidatorForm
                        onSubmit={handleSubmit}
                        noValidate={true}
                    >
                        {Dynamic.map(form => {
                            return (
                                
                                <>
                                
                                    <TextValidator
                                    
                                    name={form.type}
                                    onChange={handleChange}
                                    value = {form.type ==='text' ? formObj.text : formObj.number}
                                        label={form.labelName}
                                        placeholder={form.placeholder}
                                        // required={form.validation.isRequired}
                                        validators={['requiredField','minLength']}
                                        errorMessages={['Required', 'Minimum length is 3']}
                                        type={form.type}
                                        
                                        fullWidth />
                                    <br />

                                </>

                            )
                        })}

                        <br />
                        <Button onClick={handleCancel} color='Red' variant="outlined" >
                            Cancel
                        </Button>
                        &nbsp;
                        <Button type='submit' color='primary' variant="contained" >
                            Submit
                        </Button>



                    </ValidatorForm>

                    {/* <ValidatorForm
                        onSubmit={handleSubmit}
                        noValidate={true}
                    >
                                  <TextValidator
                                  id="name"
                                
                                    onChange={handleChange}
                                    // value ={formData.name}
                                        type={data ? data[0].type : '' }
                                        label={data ? data[0].labelName : ''}
                                        placeholder={data ? data[0].placeholder : ''}
                                        required={data ? data[0].validation.isRequired :''}
                                        // validators={['requiredField']}
                                        // errorMessages={['Required']}
                                     fullWidth
                                    />
                                    <br/>
                                     <TextValidator
                                     id="phone"
                                    //  value ={formData ? formData.phone : ''}
                                    // onChange={handleChange}
                                        type={data ? data[1].type : '' }
                                        label={data ? data[1].labelName : ''}
                                        placeholder={data ? data[1].placeholder : ''}
                                       //validators={[data[1].validation.isRequired === true ? '' : 'required','matchRegexp:^[0-9]{10}$']}
                                        errorMessages={['Required','Minimum Length 3']}
                                     fullWidth
                                    />
                            <br /> */}
                    {/* <br/>
                            <Button onClick={handleCancel}  color='Red' variant="outlined" >
                                Cancel
                            </Button>
                            &nbsp;
                            <Button type='submit'  color='primary' variant="contained" >
                                Submit
                            </Button>
                            </form>

                        
                    </ValidatorForm> */}




                </Paper>
            </Grid>
        </>
    )
}
export default (DynamicForm)