import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {Button} from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom';

function Nav () {

  const link={
    color : 'white',
    textDecoration : 'none'
    
  }



const token = localStorage.getItem("token");


var loggedIn = true;

if (token == null) {
    loggedIn = false
}

const history = useHistory();
const Logout = () => {
  localStorage.removeItem("token");
  history.push("/LoginForm");
   window.location.reload();
 
  // <Redirect to="/LoginForm"/>
  // window.location.reload();

}

    return(
      <Box sx={{ flexGrow: 1 }}>
<AppBar position="static" style={{
  width=800
}}>
  <Toolbar>
    {/* <Typography variant="h6" >
      Welcome &nbsp;
    </Typography>
    <Link to="/LoginForm" style={link}>Login &nbsp;</Link>
    <h2>&nbsp;</h2>
    <Link to="/SignUp" style={link}>Sign Up &nbsp;</Link> */}
{

loggedIn ? <>
  <Link to="/HomePage" style={link}>Homepage &nbsp;</Link>
  <Link to="/Roles" style={link}>Roles &nbsp;</Link>
  

  <Button color="secondary" style={{position : 'absolute', right : 1}} onClick={Logout}>Logout</Button>

  
  </>
  :
  <>
  <Link to="/LoginForm" style={link}>Login &nbsp;</Link>
  {/* <Link to="/SignUp" style={link}>Sign Up &nbsp;</Link> */}
  <Link to="/Register" style={link}>Register&nbsp;</Link>
  <Link to="/dynamic-form" style={link}>Form &nbsp;</Link>
  </> 
}


  </Toolbar>
</AppBar>
</Box>

    );
}




export default Nav;