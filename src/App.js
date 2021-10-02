import React from 'react';
import LoginForm from './Components/LoginForm'
import SignUp from './Components/SignUp';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Nav from './Components/Nav';
import ErrorPage from './Components/ErrorPage';
import HomePage  from './Components/HomePage';
import ProtectedRoute from './Components/ProtectedRoute';
import AddUser from './Components/users/AddUser';
import EditUser from './Components/users/EditUser';
import Roles from './Components/Roles';
import AddRoles from './Components/AddRoles';
import EditRoles from './Components/EditRoles';
import NewData from './Components/NewData';
import Register from './Components/Register';
import DynamicForm from './Components/dynamic-form';






function App() {

  // const adminUser = {
  //   name : "Shivam",
  //   email : "shivam@gmail.com",
  //   password : "shivam"
  // };

  // const [user, setUser] = useState({name: "", email:""});
  // const [error, setError] = useState("");

  // const Login = details => {
  //   console.log(details);

  //   if(details.email === adminUser.email && details.password === adminUser.password)
  //   {
  //     console.log("Logged In");
  //     setUser({
  //       name : details.name,
  //       email : details.email
  //     });
  //   }
  //   else
  //   {
  //     setError("Details do no match!");
  //   }
  // }

  // const Logout = () => {
    
  //   setUser({email: "", password:""})
  //   window.location.reload();
    
  // }

  // const paperStyle = {backgroundColor: '#f6f6f6', padding : 20, height : '70vh', width: 280, margin:"20px auto"}
  // const avatarStyle ={backgroundColor : 'green'}
 
   
  return (
    
    <>
    <Router>
      <Nav/>
      <Switch> 
      <Route exact path="/" component={LoginForm}/>
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/LoginForm" component={LoginForm}/>
      
      <Route exact path="/users/AddUser" component={AddUser}></Route>
      <Route exact path="/AddRoles" component={AddRoles}></Route>
      <Route exact path="/Register" component={Register}></Route>
      <Route exact path="/NewData" component={NewData}></Route>
      <Route exact path="/dynamic-form" component={DynamicForm}></Route>
      
      
      
      
      

      
      <Route exact path="/EditRoles/:id" component={EditRoles}></Route>
      <Route exact path="/users/EditUser/:id" component={EditUser}></Route>
      <ProtectedRoute exact path="/HomePage" component={HomePage} />

      <Route exact path="/Roles" component={Roles}/>
      
      
      <Route component={ErrorPage}/>

      </Switch>
    
  
    {/* <div className="App">
   {(user.email !== "") ? (
     <div className="welcome">
       <Grid align='center'>
         <Paper elevation={10} style={paperStyle}>
         <Avatar style={avatarStyle}><LockOpenOutlinedIcon/></Avatar>
         <h3>Logged In </h3>
       <h2>Hi, <span>{adminUser.name}</span> </h2>
       <Button color='primary' variant="contained"  onClick={Logout}>Logout</Button>
       </Paper>
       </Grid>
     </div>
     

   ) : (
    <LoginForm Login={Login} error={error}/>
    
    
   )}
    </div> */}
    </Router>
    </>
  );
}

export default App;
