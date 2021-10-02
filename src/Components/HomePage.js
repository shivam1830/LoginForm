import { React, useState, useEffect } from 'react'

import { Button,Grid,Paper } from '@material-ui/core';

import axios from 'axios';

import { useHistory, withRouter, Redirect, Link } from 'react-router-dom';


import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { render } from 'react-dom'
import Highcharts, { seriesType } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
const oldData = JSON.parse(localStorage.getItem('Details'))
const options = {
    chart:{
        type : 'column',
        zoomType : 'xy'
    },
    xAxis:{
        
        categories : ['Apple','Banana','Orange'],
    },
    tooltip:{
        pointFormat : 'value : {point.y:.2f} <b>mm</b>',
    },
    title: {
      text: 'Data'
    },
    yAxis:{
        categories:['TV','Fridge']
    },
    series: [{
        name : 'My only Books',
        data : [3,4,7,1,2,1]
    },
    {
      name : 'My Cars',
      data: [1,2,1,9,7,3]
    }
]
  }

function HomePage() {

    const [users, setUsers] = useState([]);
   
    useEffect(() => {
        loadUsers();
    },[]);
    const [noData,setNoData] = useState(false);
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        if(!result)
        {
            setNoData(true)
        }
        setUsers(result.data);
    };

    

    const adminUser = {
        name: "Shivam",
        email: "shivam@gmail.com",
        password: "shivam"
    };

    const history = useHistory()

    // const Logout = () => {
    //     localStorage.removeItem("token");
    //     history.push("/LoginForm");
    //     // <Redirect to="/LoginForm"/>
    //     // window.location.reload();

    // }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    }

    // const paperStyle = { backgroundColor: '#f6f6f6', padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    // const avatarStyle = { backgroundColor: 'red' }

    const token = localStorage.getItem("token");

    var loggedIn = true;

    if (token == null) {
        loggedIn = false
    }

    if (loggedIn === false) {
        return <Redirect to="/" />
    }

    const btnAdd= () => {
      history.push("/users/AddUser");
        
    }

    const btnDelete = {
        textDecoration: "none",
        color: "red",
    }

    const btnEdit = {
        textDecoration: "none",
        color: "green",
    }

   
    const paperStyle = { backgroundColor: '#f6f6f6', padding: '50px 50px', width: 800, margin: "20px auto" }

    return (
               <>
        <h2>Hi, <span>{adminUser.name}</span> </h2>
                <Grid align="center">
                
                
        <Paper elevation={20} style={paperStyle}>
            {/* <Grid align="left" >
            <Link to ={'Roles'}  ><span >Go To Roles</span></Link>
            </Grid>
         */}
                    
                    {/* <Button color="primary" variant="contained" className="btnAdd" align="right" onClick={btnAdd} >Add User</Button> */}
                    <br/>

                    <TableContainer className="table border shadow">
                    
                     <h3>USER DETAILS</h3>
            
                        <TableHead className="thread-dark">
                        
                            <TableRow>
                                
                                <TableCell align="center">S.No.</TableCell>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Phone</TableCell>
                                <TableCell align="center">Address</TableCell>
                                <TableCell align="center">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {(noData !== false) ? <p>No Data Found</p> : noData === false}
                            {
                                users.map((user, index) => (
                                    <TableRow key={user.id}>
                                        <TableCell align="center" scope="row">{index + 1}</TableCell>
                                        <TableCell align="center">{user.name}</TableCell>
                                        <TableCell align="center">{user.phone}</TableCell>
                                        <TableCell align="center">{user.address}</TableCell>
                                        <TableCell align="center">
                                            <Link className="btnEdit" to={`users/EditUser/${user.id}`} style={btnEdit} ><EditIcon/></Link>
                                            <br />
                                            <Button className="btnDelete" onClick={() => deleteUser(user.id)} style={btnDelete} ><DeleteForeverIcon/></Button>
                                        </TableCell>

                                    </TableRow>
                                ))
                            }

                        </TableBody>
                        <Button color="primary" variant="contained" className="btnAdd" align="right" onClick={btnAdd} >Add User</Button>
                        {/* <Button color='primary' variant="contained" onClick={Logout}>Logout</Button> */}
                    </TableContainer>

                    <div>
  <HighchartsReact
    highcharts={Highcharts}
    options={options}
  />
</div>

                    </Paper>
            </Grid>

                   

         
            
        </>
        

    )
}

export default withRouter(HomePage);