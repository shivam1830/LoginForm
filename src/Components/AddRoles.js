import React, { useState } from 'react'
// import axios from 'axios';
import { useHistory, Redirect } from 'react-router-dom';

import { Avatar, Button, Grid, Paper } from "@material-ui/core";
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Snackbar from '@material-ui/core/Snackbar';
// import PostData from '../Data/posts.json'




// const getLocalItems = () => {
//   let details = localStorage.getItem('Details');
//   if (details ) {
//       return JSON.parse(localStorage.getItem('Details'))
//   }
//   else if (details === null)  {
//       return [];
//   }
// }

const AddRoles = () => {

  let history = useHistory();
  // const [inputData,setInputData] =  useState({
  //   id : "",
  //   name : "",
  //   description : "",
  //   permission : ""
  // })

  const [notification, setNotification] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  
  const handleSnackbar = (event, reason) => {
      if (reason === 'clickaway') {
          return;
      }
      setNotification(false);
      setSuccess(false)
  }

  const [user, setUser] = useState({
    id : new Date().getTime().toString(),
    name : "",
    description : "",
    permission : ""
  }
  );

  // useEffect(() => {
    
  //   //  console.log(JSON.parse(localStorage.getItem('Details')))
  //   // console.log(localStorage.getItem('Details'))
  //   // localStorage.setItem('Details', JSON.stringify(user))

  //   // const doc = JSON.parse(localStorage.getItem('Details'))
  //   // if(localStorage.getItem('Details'))
  //   // {
  //   //   setUser({
  //   //     id : doc.id,
  //   //     name : doc.name,
  //   //     description : doc.description,
  //   //     permission : doc.permission
  //   //   })
  //   // }
  //   // const data = localStorage.getItem('Details')
  //   //  if(user)
  //   //     {
  //   //         setUser({
  //   //           id : data.id,
  //   //             name : data.name,
  //   //             description : data.description,
  //   //             permission : data.permission
  //   //         })
  //   //     }
  //   // const docData = localStorage.getItem('Details')
  //   // localStorage.getItem('Details')
  //   // loadUser()
  // }, [user]);

  // const { name, description, permission } = user;

  const onInputChange = e => {
    setUser({...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    
    // console.log(user1)
    // const newData = getLocalItems();
    const oldData = JSON.parse(localStorage.getItem('Details'))
    oldData.push(user)
    
    // if(user.id === null)
    // {
    //   setUser({
    //     id : getLocalItems().length + 1
    //   })
    // }
    
    // PostData.push(user)
    // localStorage.setItem('Details',JSON.stringify(PostData))
    // console.log(PostData)
    // const data = JSON.parse(localStorage.getItem('Details'))
        
        
    // localStorage.setItem('Details',JSON.stringify(oldData))
    
    

    localStorage.setItem('Details', JSON.stringify(oldData))
    // localStorage.setItem('Details',JSON.stringify(user))
    // const doc= JSON.parse(localStorage.getItem('Details'))
    
    // console.log(localStorage.getItem('Details'))

    // PostData.map((elem,index) => {
    //   elem.id =index+1
    //   elem.name = user.name ;
    //   elem.description  =user.description ;
    //    elem.permission = user.permission
       
    //   //  localStorage.getItem('Details')
    //   // elem.id =index+1
    //   // user.name = elem.name;
    //   //                       user.description = elem.description ;
    //   //                       user.permission= elem.permission 
    // })

    
    setSuccess(true);
    setTimeout(() => {
        history.push("/Roles");
    }, 1000)
    
    
    
    
  };


//   const loadUser = (e) => {

//     // getLocalItems()
//         // PostData.map((elem)=>{
//         //   elem.id = user.id
//         //     elem.name = user.name;
//         //     elem.description = user.description;
//         //     elem.permission = user.permission
//         //   })
//         //   const docData = JSON.parse(localStorage.getItem('Details'))
//         // if(localStorage.getItem('Details'))
//         // {
//         //     setUser({
//         //         name : docData.name,
//         //         description : docData.description,
//         //         permission : docData.permission
//         //     })
//         // }
//         // else
//         // {
//         //     setUser({
//         //         name: "",
//         //         description : "",
//         //         permission : ""
//         //     })
//         // }
        
       
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
    history.push("/Roles");
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
            <h2 className="text">ADD ROLES</h2>
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
              <Button type='submit' color='primary' variant="contained" className="btn" >Save</Button>
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
              <Button onClick={btnCancel} style={btnButton}>Cancel</Button>

            </ValidatorForm>

          </Paper>
        </Grid>
      </div>
    </div>
  )
}

export default AddRoles;