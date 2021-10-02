'use strict'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { Grid, Paper,Avatar } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhoneIcon from '@material-ui/icons/Phone';
import WcIcon from '@material-ui/icons/Wc';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

const useStyles = makeStyles(theme => ({
  TypoBox: {
    padding: '10px 0',
    borderBottom: '1px solid #ccc',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    marginLeft: 0,
    marginRight: 0,
    width: '100%',
  },
  optionlabel: {
    marginBottom: '0',
  },
  expandcontent: {
    backgroundColor: '#f5fcfd',
    boxShadow: 'none !important',
    marginTop: '0 !important',
    '&:before': {
      backgroundColor: '#f5fcfd',
    },
  },
  expandbuttonarea: {
    paddingLeft: '0',
    width: '50%',
    fontSize: '15px',
    minHeight: '48px !important',
  },

  expanddetails: {
    padding: '0',
  },

  removebg: {
    background: '#ffffff',
    display: 'inline-flex',
    alignItems: 'flex-start',
  },
  dividerCom: {
    flex: '1',
    marginLeft: '57px',
    display: 'none'
  },
  listitems: {
    paddingTop: 20,
    // flexWrap: 'wrap'

  }

}));

export default function StepThree() {
  const [checked, setChecked] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [openPolicyModal, setOpenPolicyModal] = React.useState(false);

  let data = JSON.parse(localStorage.getItem("Data"));
  let step1 = JSON.parse(localStorage.getItem("Data"));
  data = data ? data : {
    PCName: "",
    PCJobTitle: "",
    PCEmailAddress: "",
    PCPhone: "",
    PCFax: "",
    SCName: "",
    SCJobTitle: "",
    SCEmailAddress: "",
    SCPhone: "",
    SCFax: ""
  };
  const handleChange = event => {
    setChecked(event.target.checked);
  };


  const handleTermOpen = () => {
    setOpen(true)
  }

  const handleTermClose = () => {
    setOpen(false)
  }

  const handleOpenPolicyModal = () => {
    setOpenPolicyModal(true)
  }

  const handleClosePolicyModal = () => {
    setOpenPolicyModal(false)
  }
  const paperStyle = { padding: '30px 20px ', width: 300, margin: "20px auto" }

  const classes = useStyles();
  
  const avatarStyle = { backgroundColor: 'green' }
  const headerStyle = { margin: 0 }
  return (   
<>
{
                            <>
                            <Grid align="center">
                            <MDBContainer align="center" >
        <MDBRow>
            <MDBCol className="FormWrapper registerStep1">
            <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle} >Review</h2>
                    
                    
                </Grid>
                                <ListItem align="center" >
                                    <ListItemText children={  <>
                                        <ListItemText primary="Details" align='center' />
                                        <br />
                                        <ListItemText primary={<AccountCircleIcon/>}  secondary={"Name : " + (step1 ? step1.name : "")} />
                                        <br />
                                        <ListItemText primary={<EmailIcon/>} secondary={"Email : " + (step1 ? step1.email : "")} />
                                        <br />
                                        <ListItemText primary={<WcIcon/>} secondary={"Gender : " + (step1 ? step1.gender : "")} />
                                        <br />
                                        <ListItemText primary={<PhoneIcon/>} secondary={"Phone : " + (step1 ? step1.phone : "")} />
                                        <br />
                                    </>} />
                                </ListItem>
                                <br/>
                        
                      
                      
                       
</MDBCol>
                                        </MDBRow>
                                    </MDBContainer>
                                    </Grid>
                            </>
                        }
</>

  )
}