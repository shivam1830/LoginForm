import React, { useState, useEffect } from "react";
// import axios from "axios";
import { useHistory, useParams, Redirect } from "react-router-dom";
import { Avatar, Button, Grid, Paper } from "@material-ui/core";
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

import EditIcon from '@material-ui/icons/Edit';
import Snackbar from '@material-ui/core/Snackbar';
// import PostData from '../Data/posts.json'


const getLocalItems = () => {
    let details = localStorage.getItem('Details');
    if(details)
    {
        return JSON.parse(localStorage.getItem('Details'))
    }
    else if (details === null)
    {
        return [];
    }
}
const EditRoles = () => {

    let history = useHistory();
    const { id } = useParams();
    
    const [item, setItem] = useState(getLocalItems());
    const [user,setUser] = useState({
        id : "",
        name :"",
        description : "",
        permission : ""
    })
    // const { name, description, permission } = user;
    
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const [notification, setNotification] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    
    const handleSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotification(false);
        setSuccess(false)
    }
   
// const data = getLocalItems();
    useEffect(() => {
        const doc = JSON.parse(localStorage.getItem('Details'));
        const editData = doc.find(e => e.id === {id}.id);
        console.log(editData);
        setUser(editData);
// const data = {...doc}

// Object.keys(data).find((elem,key) => {
//     if(data[key].id === {id}.id)
//     {   
//     setUser({
//         id : data[elem].id,
//         name :data[elem].name,
//         description : data[elem].description,
//         permission : data[elem].permission

//     })
//     }
    
// })

// const newEdit = doc.find((elem) => {
//     console.log({id}.id)
//     console.log(elem.id)
//     if(elem.id === {id}.id)
//     {
//         return elem.id === {id}
//     }
//     else{
//         return elem.id === {id}
//     } 
// })

// console.log(newEdit)


// console.log(newEdit)

  // console.log(user)
        
    }, [id]);

    

    const onSubmit = async e => {
        e.preventDefault();
            // {
            //     PostData.map((elem,index)=>{
            //         // if(elem.id === {id})
            //             {
            //                 elem.id = index+1;
            //                 // user.name = elem.name;
            //                 // user.description = elem.description ;
            //                 // user.permission= elem.permission 
            //                 elem.name = user.name;
            //                 elem.description = user.description;
            //                 elem.permission = user.permission
            //             }
                    
            //     });
            // }

            

            const doc = JSON.parse(localStorage.getItem('Details'));
            // const data = {...doc}

            const updateUsers = item.find((elem) => {
               return elem.id === {id}.id;
            });
            
             
            console.log(updateUsers)
            setUser(updateUsers);

            const index = item.findIndex((elem) => elem.id === {id}.id);

             doc.splice(index,1,user)

            
               
                

            
 
            
            
            // item.find((elem,index) => 
            //     if((elem.id) === {id}.id)
            //     {
            //         setUser(updateUsers)
            //         doc.splice(index,1,user)
            //     }
            // ));
            
        //    console.log(doc)
                
            
            
          

            localStorage.setItem('Details',JSON.stringify(doc))
            
            // const data = {...doc}
            // Object.keys(data).find((elem,key) => {
            //     console.log(elem)
            //     if(data[key].id === {id}.id)
            //     {   
            //         setUser(data)
            //         console.log(user)
            //         // localStorage.setItem('Details',JSON.stringify())
                    
            //     }
            // })
            
            
            setSuccess(true);
            setTimeout(() => {
                history.push("/Roles");
            }, 1000)
            
            
            
            // const docData = JSON.parse(localStorage.getItem('Details'))

          
            // localStorage.setItem('Details', JSON.stringify(oldData))
            // setUser({
            //     name : docData.name,
            //     description : docData.description,
            //     permission : docData.permission
            // })
            
            
                    
          
        
    };

    // const loadUser = async () => {
        

        // const newEditItem = PostData.find((elem) => {
        //     return elem.id === {id};
        // });
        // setUser(newEditItem)
        // getLocalItems()
        // if(localStorage.getItem('Details'))
        //     PostData.map((elem)=>{
        //         if(elem.id === {id})
        //         elem.id = user.id
        //         elem.name = user.name;
        //         elem.description = user.description;
        //         elem.permission = user.permission
        //       })
        //     const docData = JSON.parse(localStorage.getItem('Details'))
        // if({id})
        // {
        //     setUser({
        //         name : docData.name,
        //         description : docData.description,
        //         permission : docData.permission
        //     })
        // }
        
       
        
    // };

    const token = localStorage.getItem("token");

    var loggedIn = true;

    if (token == null) {
        loggedIn = false
    }

    if (loggedIn === false) {
        return <Redirect to="/" />
    }

    const btnCancel = () => {
        history.push("/Roles")
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
                        <h2 className="text">EDIT ROLES</h2>
                        <ValidatorForm onSubmit={e => onSubmit(e)} noValidate={true}>
                            <div className="form">
                            <TextValidator
                  fullWidth
                  label="Role Name"
                  type="text"
                  validators={['required']}
                  errorMessages={['Required']}
                  className="form"
                  placeholder="Enter Your Role"
                  name="name"
                  value={user.name}
                  onChange={e => onInputChange(e)}
                />

              </div>
              <br />
              <div className="form">

              <TextValidator
                  fullWidth
                  id="standard-multiline-static"
                  label="Role Description"
                  multiline
                  rows={4}
                  type="text"
                  validators={['required']}
                  errorMessages={['Required']}
                  className="form"
                  placeholder="Enter Role Description"
                  name="description"
                  value={user.description}
                  onChange={e => onInputChange(e)}
                />

              </div>
              <br />
              <div className="form">
                <TextValidator
                  fullWidth
                  id="standard-multiline-static"
                  label="Role Permission"
                  multiline
                  rows={4}
                  type="text"
                  validators={['required']}
                  errorMessages={['Required']}
                  className="form"
                  placeholder="Enter Role Permission"
                  name="permission"
                  value={user.permission}
                  onChange={e => onInputChange(e)}
                />
                            </div>
                            <br />
                            <Button color='primary' variant="contained" type="submit" className="btn " >Update</Button>
                            <Snackbar
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center'
                                    }}
                                    open={notification}
                                    autoHideDuration={5000}
                                    onClose={handleSnackbar}
                                    message='Error'
                                    action={
                                        <React.Fragment>
                                            <Button onClick={handleSnackbar}>Close</Button>
                                        </React.Fragment>
                                    } />
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
                            <Button onClick={btnCancel} style={btnButton} >Cancel</Button>

                        </ValidatorForm>
                    </Paper>
                </Grid>
            </div>
        </div>
    );
};

export default EditRoles;
