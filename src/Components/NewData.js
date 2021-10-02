// import { React, useState, useEffect } from 'react'

// import { Button, Grid, Paper, TextField } from '@material-ui/core';

// import axios from 'axios';

// import { useHistory, withRouter, Redirect, Link } from 'react-router-dom';


// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
// import EditIcon from '@material-ui/icons/Edit';
// import PostData from '../Data/posts.json'
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
// import { LocalCafe } from '@material-ui/icons';



// const getLocalItems = () => {
//     let details = localStorage.getItem('Details');
//     if (details) {
//         return JSON.parse(localStorage.getItem('Details'))
//     }
//     else {
//         return [];
//     }
// }


// const NewData = () => {



//     const adminUser = {
//         name: "Shivam",
//         email: "shivam@gmail.com",
//         password: "shivam"
//     };

//     const [open, setOpen] = useState(false);
//     const [add, setAdd] = useState(false);
//     const [edit, setEdit] = useState(false);

//     const [inputData, setInputData] = useState([]);

//     const [isEditItem, setIsEditItem] = useState(null);

//     const [users, setUsers] = useState(getLocalItems());

//     useEffect(() => {
//         localStorage.setItem('Details', JSON.stringify(users))
//         // const docData = JSON.parse(localStorage.getItem('Details'))
//         // if(localStorage.getItem('Details'))
//         // {
//         //     setUsers({
//         //         name : docData.name,
//         //         description : docData.description,
//         //         permission : docData.permission
//         //     })
//         // }
//         // else
//         // {
//         //     setUsers({
//         //         name: "",
//         //         description : "",
//         //         permission : ""
//         //     })
//         // }
//         // loadUsers()
//     }, [users]);

//     const paperStyle = { backgroundColor: '#f6f6f6', padding: '50px 50px', width: 800, margin: "20px auto" };

//     const history = useHistory();


//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     const handleClickadd = () => {
//         setAdd(true);
//     };

//     const handleadd = () => {

//         setAdd(false);
//     };

//     const handleClickedit = () => {
//         setEdit(true);
//     };

//     const handleedit = () => {

//         setEdit(false);
//     };


//     // const onInputChange = e => {
//     //     setUsers({...users, [e.target.name]: e.target.value });
//     //   };


//     const onSubmit = async e => {
//         e.preventDefault();
//         if (users) {


//             setUsers(
//                 PostData.map((user) => {
//                     if (user.id === isEditItem) {
//                         {
//                             return { ...user, name: users.name, description: users.description, permission: users.permission };
//                         }

//                     }
//                     return user;
//                 })
//             );

//             setInputData('');

//             setIsEditItem(null);
//         }
//         else {
//             setUsers(
//                 PostData.map((user) => {

//                     {
//                         return { ...user, id: user.id, name: users.name, description: users.description, permission: users.permission };

//                     }
//                     return user;

//                 })
//             );

//             PostData.map((elem) => {
//                 elem.name = users.name;
//                 elem.description = users.description;
//                 elem.permission = users.permission
//             })


//             // setInputData('');
//             // const allInputData = { id: users.id , name:users.name, description : users.description, permission: users.permission}
//             // setUsers([...users, allInputData]);
//             // setUsers('');
//         }




//         // PostData.map((elem,index) => {

//         //         elem.id = index+1
//         //         elem.name = users.name 
//         //         elem.description  =users.description 
//         //          elem.permission = users.permission


//         // })

//         // elem.id =index+1
//         // user.name = elem.name;
//         //                       user.description = elem.description ;
//         //                       user.permission= elem.permission 
//         // })

//         // localStorage.setItem('Details',JSON.stringify(user))
//         // history.push("/Roles");
//     };
//     // const btnAdd = () => {
//     //     history.push("/AddRoles");
//     // }

//     const btnDelete = {
//         textDecoration: "none",
//         color: "red",
//     }




//     const btnEdit = {
//         textDecoration: "none",
//         color: "green",
//     }

//     const loadUsers = async () => {
//         PostData.map((elem) => {
//             elem.name = users.name;
//             elem.description = users.description;
//             elem.permission = users.permission
//         })
//     };


//     const token = localStorage.getItem("token");

//     var loggedIn = true;

//     if (token == null) {
//         loggedIn = false
//     }

//     if (loggedIn === false) {
//         return <Redirect to="/" />
//     }


//     const editItem = (id) => {

//         // let details = localStorage.getItem('Details');
//         // if (details) {
//         //     return JSON.parse(localStorage.getItem('Details'))
//         // }



//         let newEditItem = PostData.find((user) => {
//             return user.id === id;
//         })
//         console.log(inputData);

//         // const allInputData = { id: new Date().getTime().toString() , name:inputData, description : inputData, permission: inputData}
//         // setInputData([...users, allInputData]);

//         setInputData(newEditItem.name);
//         // console.log("my new input name is" + inputData);
//         setIsEditItem(id);

//     }


//     const deleteItem = (id) => {
//         // console.log('deleted');
//         const updatedItems = PostData.filter((user) => {
//             return user.id !== id;
//         })
//         setUsers(updatedItems);
        
//     }





//     // const deleteItem = (id) => {
//     //     // console.log('deleted');
//     //     // const updatedItems = PostData.map((elem) => {
//     //     //     return elem.id !== id ;
//     //     // })
//     //     // setUsers(updatedItems);

//     // }




//     return (

//         <>
//             {/* <div>
//             {PostData.map((postDetail,index) => {
//                 return <h1>{postDetail.name}</h1>
//             })  }
//         </div> */}



//             <Grid align="center">
//                 <Paper elevation={20} style={paperStyle}>
//                     <Grid align="left" >
//                         <Link to={'Homepage'}  ><span >Go To Homepage</span></Link>
//                     </Grid>
//                     <h2>Hi, <span>{adminUser.name}</span> </h2>

//                     <Button color="primary" variant="contained" className="btnAdd" align="right" onClick={handleClickadd} >Add Roles</Button>

//                     <Dialog open={add} onClose={handleadd} aria-labelledby="form-dialog-title">
//                         <DialogTitle id="form-dialog-title" align="center">ADD ROLES</DialogTitle>

//                         <DialogContent>
//                             <ValidatorForm onSubmit={e => onSubmit(e)} noValidate={true}>
//                                 <DialogContentText>
//                                     Please enter your roles!
//                                 </DialogContentText>

//                                 <div className="form">
//                                     <TextValidator
//                                         fullWidth
//                                         label="Role Name"
//                                         type="text"
//                                         validators={['required']}
//                                         errorMessages={['Required ']}
//                                         className="form"
//                                         placeholder="Enter Your Role"
//                                         name="name"
//                                         value={users.name}
//                                         onChange={(e) => setUsers({ ...users, [e.target.name]: e.target.value })}
//                                     />

//                                 </div>
//                                 <br />
//                                 <div className="form">

//                                     <TextValidator
//                                         fullWidth
//                                         id="standard-multiline-static"
//                                         label="Role Description"
//                                         multiline
//                                         rows={4}
//                                         type="text"
//                                         validators={['required']}
//                                         errorMessages={['Required']}
//                                         className="form"
//                                         placeholder="Enter Role Description"
//                                         name="description"
//                                         value={users.description}
//                                         onChange={(e) => setUsers({ ...users, [e.target.name]: e.target.value })}
//                                     />

//                                 </div>
//                                 <br />
//                                 <div className="form">
//                                     <TextValidator
//                                         fullWidth
//                                         id="standard-multiline-static"
//                                         label="Role Permission"
//                                         multiline
//                                         rows={4}
//                                         type="text"
//                                         validators={['required']}
//                                         errorMessages={['Required']}
//                                         className="form"
//                                         placeholder="Enter Role Permission"
//                                         name="permission"
//                                         value={users.permission}
//                                         onChange={(e) => setUsers({ ...users, [e.target.name]: e.target.value })}
//                                     />
//                                 </div>
//                                 <div>
//                                     <DialogActions>
//                                         <Button onClick={handleadd} color="primary">
//                                             Cancel
//                                         </Button>
//                                         <Button type='submit' color="primary">
//                                             Add
//                                         </Button>
//                                     </DialogActions>
//                                 </div>

//                             </ValidatorForm>
//                         </DialogContent>




//                     </Dialog>



//                     <br />

//                     <TableContainer className="table border shadow">

//                         <h3>USER ROLES</h3>

//                         <TableHead className="thread-dark">

//                             <TableRow>

//                                 <TableCell align="center">S.No.</TableCell>
//                                 <TableCell align="center">Role Name</TableCell>
//                                 <TableCell align="center">Role Description</TableCell>
//                                 <TableCell align="center">Role Permission</TableCell>
//                                 <TableCell align="center">Action</TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {
//                                 PostData.map((user) => {
//                                     return (
//                                         <TableRow key={user.id}>
//                                             <TableCell align="center" scope="row">{user.id}</TableCell>
//                                             <TableCell align="center">{user.name}</TableCell>
//                                             <TableCell align="center">{user.description}</TableCell>
//                                             <TableCell align="center">{user.permission}</TableCell>
//                                             <TableCell align="center">
//                                                 <Button className="btnEdit" style={btnEdit}  onClick={handleClickedit}  ><EditIcon /></Button>

//                                                 <Dialog open={edit} onClose={handleedit} aria-labelledby="form-dialog-title">
//                                                     <DialogTitle id="form-dialog-title" align="center">EDIT ROLES</DialogTitle>

//                                                     <DialogContent>
//                                                         <ValidatorForm onSubmit={e => onSubmit(e)} noValidate={true}>
//                                                             <DialogContentText>
//                                                                 Edit your roles!
//                                                             </DialogContentText>

//                                                             <div className="form">
//                                                                 <TextValidator
//                                                                     fullWidth
//                                                                     label="Role Name"
//                                                                     type="text"
//                                                                     validators={['required']}
//                                                                     errorMessages={['Required ']}
//                                                                     className="form"
//                                                                     placeholder="Enter Your Role"
//                                                                     name="name"
//                                                                     value={users.name}
//                                                                     onChange={(e) => setUsers({ ...users, [e.target.name]: e.target.value })}
//                                                                 />

//                                                             </div>
//                                                             <br />
//                                                             <div className="form">

//                                                                 <TextValidator
//                                                                     fullWidth
//                                                                     id="standard-multiline-static"
//                                                                     label="Role Description"
//                                                                     multiline
//                                                                     rows={4}
//                                                                     type="text"
//                                                                     validators={['required']}
//                                                                     errorMessages={['Required']}
//                                                                     className="form"
//                                                                     placeholder="Enter Role Description"
//                                                                     name="description"
//                                                                     value={users.description}
//                                                                     onChange={(e) => setUsers({ ...users, [e.target.name]: e.target.value })}
//                                                                 />

//                                                             </div>
//                                                             <br />
//                                                             <div className="form">
//                                                                 <TextValidator
//                                                                     fullWidth
//                                                                     id="standard-multiline-static"
//                                                                     label="Role Permission"
//                                                                     multiline
//                                                                     rows={4}
//                                                                     type="text"
//                                                                     validators={['required']}
//                                                                     errorMessages={['Required']}
//                                                                     className="form"
//                                                                     placeholder="Enter Role Permission"
//                                                                     name="permission"
//                                                                     value={users.permission}
//                                                                     onChange={(e) => setUsers({ ...users, [e.target.name]: e.target.value })}
//                                                                 />
//                                                             </div>
//                                                             <div>
//                                                                 <DialogActions>
//                                                                     <Button onClick={handleedit} color="primary">
//                                                                         Cancel
//                                                                     </Button>
//                                                                     <Button onClick={e => editItem(e)} color="primary">
//                                                                         Edit
//                                                                     </Button>
//                                                                 </DialogActions>
//                                                             </div>

//                                                         </ValidatorForm>
//                                                     </DialogContent>
//                                                     </Dialog>
//                                                     <br />
//                                                     <Button className="btnDelete" onClick={handleClickOpen} style={btnDelete} ><DeleteForeverIcon /></Button>
//                                                     <Dialog
//                                                         open={open}
//                                                         onClose={handleClose}

//                                                         aria-labelledby="draggable-dialog-title"
//                                                     >
//                                                         <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
//                                                             DELETE
//                                                         </DialogTitle>
//                                                         <DialogContent>
//                                                             <DialogContentText>
//                                                                 Are you sure you want to delete this item?
//                                                             </DialogContentText>
//                                                         </DialogContent>
//                                                         <DialogActions>
//                                                             <Button autoFocus onClick={handleClose} color="primary">
//                                                                 Cancel
//                                                             </Button>
//                                                             <Button onClick={() => deleteItem(user.id)} color="primary">
//                                                                 Yes
//                                                             </Button>
//                                                         </DialogActions>
//                                                     </Dialog>
//                                     </TableCell>

//                                 </TableRow>
//                                             )
                                
//                             })
//                         }

//                     </TableBody>

//                 </TableContainer>

//                 </Paper>
//         </Grid>



//         </>
//             )
// }

//             export default NewData;
