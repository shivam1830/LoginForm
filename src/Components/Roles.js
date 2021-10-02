import { React, useState, useEffect } from 'react'

import { Button, Grid, Paper,TextField } from '@material-ui/core';

// import axios from 'axios';
// import TableSortLabel from '@material-ui/core/TableSortLabel';

import { useHistory, Redirect } from 'react-router-dom';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import TablePagination from '@material-ui/core/TablePagination';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import PostData from '../Data/posts.json'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import SearchIcon from '@material-ui/icons/Search';
import Slide from '@material-ui/core/Slide';
import './Button.css'
// import { getByDisplayValue } from '@testing-library/react';
// import { set } from 'lodash';


// import { ContactlessTwoTone } from '@material-ui/icons';



const getLocalItems = () => {
    let details = localStorage.getItem('Details');
    if (details) {
        return JSON.parse(localStorage.getItem('Details'))
    }
    else if (details === null) {
        return [];
    }
}



// function desc(a, b, orderBy) {
//     if (b[orderBy] < a[orderBy]) {
//         return -1;
//     }
//     if (b[orderBy] > a[orderBy]) {
//         return 1;
//     }
//     return 0;

//     // var formattedA;
//     // var formattedB;

//     // if (orderBy !== "primaryPhone") {
//     //     formattedA = a[orderBy] ? a[orderBy].toLocaleLowerCase() : a[orderBy];
//     //     formattedB = b[orderBy] ? b[orderBy].toLocaleLowerCase() : b[orderBy];
//     // } else {
//     //     formattedA = a[orderBy];
//     //     formattedB = b[orderBy];
//     // }

//     // if (formattedB < formattedA) {
//     //     return -1;
//     // }
//     // if (formattedB > formattedA) {
//     //     return 1;
//     // }

//     // return 0;
// }

// function stableSort(array, cmp) {
//     //debugger
//     const stabilizedThis = array.map((el, index) => [el, index]);
//     stabilizedThis.sort((a, b) => {
//         const order = cmp(a[0], b[0]);
//         if (order !== 0) return order;
//         return a[1] - b[1];
//     });
//     return stabilizedThis.map(el => el[0]);
// }

// function getSorting(order, orderBy) {
//     return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
// }

// const headCells = [
//     { id: 'name', numeric: false, disablePadding: false, label: 'Role Name' },
//     // // { id: 'CusNo', numeric: false, disablePadding: false, label: 'Customer No' },
//     // { id: 'primaryContactName', numeric: false, disablePadding: false, label: 'Primary Contact Name' },
//     { id: 'permission', numeric: false, disablePadding: false, label: 'Role Permission' },
//     // { id: 'primaryPhone', numeric: false, disablePadding: false, label: 'Contact Number' },
//     // { id: 'status', numeric: false, disablePadding: false, label: 'Status' },
//     // { id: 'Action', numeric: false, disablePadding: false, label: '' },
// ];

// function EnhancedTableHead(props) {
//     const { classes, order, orderBy, onRequestSort } = props;
//     const createSortHandler = property => event => {
//         onRequestSort(event, property);
//     };

//     return (
//         <TableHead>
//             <TableRow>
//                 {headCells.map(headCell => (
//                     <TableCell
//                         key={headCell.id}
//                         align={headCell.numeric ? 'right' : 'left'}
//                         padding={headCell.disablePadding ? 'none' : 'default'}
//                         sortDirection={orderBy === headCell.id ? order : false}
//                     >
//                         <TableSortLabel
//                             active={orderBy === headCell.id}
//                             direction={order}
//                             onClick={createSortHandler(headCell.id)}
//                         >
//                             {headCell.label}
//                             {orderBy === headCell.id ? (
//                                 <span className={classes.visuallyHidden}>
//                                     {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                                 </span>
//                             ) : null}
//                         </TableSortLabel>
//                     </TableCell>
//                 ))}
//             </TableRow>
//         </TableHead>
//     );
// }

// EnhancedTableHead.propTypes = {
//     classes: PropTypes.object.isRequired,
//     numSelected: PropTypes.number.isRequired,
//     onRequestSort: PropTypes.func.isRequired,
//     onSelectAllClick: PropTypes.func.isRequired,
//     order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//     orderBy: PropTypes.string.isRequired,
//     rowCount: PropTypes.number.isRequired,
// };



// function Transition(props) {
//     return <Slide direction="up" {...props} />;
// }




const Roles = () => {

    // const adminUser = {
    //     name: "Shivam",
    //     email: "shivam@gmail.com",
    //     password: "shivam"
    // };
    const [open, setOpen] = useState(false);

    const [popup, setPopup] = useState({
        show: false,
        id: null
    });

    // const [inputData, setInputData] = useState({
    //     id: "",
    //     name: "",
    //     description: "",
    //     permission: ""
    // });


    // const [isEditItem, setIsEditItem] = useState(null);

    const [users, setUsers] = useState(getLocalItems())
    const [newUsers,setNewUsers] = useState(getLocalItems())
    const [noData,setNoData] = useState(false);
    // const [filteredUsers,setFilteredUsers] = useState([]);
    const [sortData, setSortData] = useState('');

    const [rows, setRows] = useState([]);
    const [searchData, setSearchData] = useState([]);
    // const [loading, setLoading] = useState();
    // const [fullWidth, setFullWidth] = useState(true);
    // const [maxWidth, setMaxWidth] = useState('md');
    // const [order, setOrder] = useState('asc');
    // const [orderBy, setOrderBy] = useState('');// React.useState('userName');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [viewDetailsPopup, setviewDetailsPopup] = useState(false);
    const [guestData, setGuestData] = useState({});
    const [popupprop, setPopupprop] = useState(false);

    // const [perPage, setPerPage] = useState(5);
    // const [offset, setOffset] = useState(0);
    // const [tableData, setTableData] = useState([]);
    // const [orgTableData, setorgTableData] = useState([]);
    // const [currentPage, setCurrentPage] = useState(0);

    const [toggle ,setToggle] = useState(false)
    const [checked, setChecked] = useState(false);
    const [count , setCount] = useState(0)
    const [icon,setIcon] = useState(true);
    const [over,setOver] = useState(false);




    const history = useHistory();

    


    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    const handleClose = () => {
        setPopup({
            show: false,
            id: null
        });
        setOpen(false)
    };



    const btnAdd = () => {
        history.push("/AddRoles");
    }

    const btnDelete = {
        textDecoration: "none",
        color: "red",
    }

    // const oldData = JSON.parse(localStorage.getItem('Details'))


    useEffect(() => {
        // loadUsers();
        // getLocalItems()
        // console.log(getLocalItems().length)

        // console.log(users)
        // console.log(getLocalItems().length)
        if (getLocalItems().length <= 0) {
            // users.push(PostData)
            localStorage.setItem('Details', JSON.stringify(PostData))
        }

        // const data = getLocalItems();

        // const slice = data.slice(offset,offset+perPage)

        // setUsers(slice)
        if( getLocalItems().length > 0 )
        {
            
            setRows(users)
            setRows(newUsers)

            setSearchData(users)
            setSearchData(newUsers)
            // setUsers(users)
        }
        else
        {
            setRows([])
            setSearchData([])
        }
       
        
        // if(sortData === 'asc' || sortData === 'desc')
        // {
        //     setUsers(newUsers)

        // }
        
        // setFilteredUsers(
        //     users.filter(elem => {
        //         return elem.name.toString().tolowerCase().includes(searchData.toString().tolowerCase())
        //     })
        // )

        //     const docData = JSON.parse(localStorage.getItem('Details'))
        // if(localStorage.getItem('Details'))
        // {
        //     setUsers({
        //         name : docData.name,
        //         description : docData.description,
        //         permission : docData.permission
        //     })
        // }
        // else
        // {
        //     setUsers({
        //         name: "",
        //         description : "",
        //         permission : ""
        //     })
        // }
    }, []);

    const loadUsers = async () => {

        // fetch(".public/NewData.json").then(
        //     function(res){
        //     return res.json()
        //   }).then(function(data){
        //   // store Data in State Data Variable
        //   console.log(data)
        //     setUsers(data)
        //   }).catch(
        //     function(err){
        //       console.log(err, ' error')
        //     }
        //   )

        // const result = await axios.get("./NewData.json");
        // if(!result)
        // {
        //     setNoData(true)
        // }
        // console.log(result.data)
        // setUsers(result.data)
        // setNewUsers(result.data);
        // console.log(users)
        
    };

    const handleSelectAllClick = event => {
        if (event.target.checked) {
            const newSelecteds = rows.map(n => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };



    const btnEdit = {
        textDecoration: "none",
        color: "green",
    }

    // const loadUsers = async () => {

    // };


    const token = localStorage.getItem("token");

    var loggedIn = true;

    if (token == null) {
        loggedIn = false
    }

    if (loggedIn === false) {
        return <Redirect to="/" />
    }




    const paperStyle = { backgroundColor: '#f6f6f6', padding: '50px 50px', width: 800, margin: "20px auto" };



    const deleteUsers = (id) => {

        setPopup({
            show: true,
            id: id
        })
        setOpen(true)
        console.log(popup)
        // debugger;

        // const doc = JSON.parse(localStorage.getItem('Details'));

        // var deleteArray = users.filter((elem) => {
        //         return id !==  elem.id
        // })
        // console.log(deleteArray)

        // setUsers(deleteArray)
        // localStorage.setItem('Details',JSON.stringify(deleteArray))

        // console.log(users)


        // localStorage.setItem('Details',JSON.stringify(deleteUsers))

        // const doc = JSON.parse(localStorage.getItem('Details'));
        // // const data = {...doc}

        // const updateUsers = users.find((elem) => {
        //    return elem.id === {id}.id 
        // })
        // users.find((elem,index) => {
        //     if((elem.id) === {id}.id)
        //     {
        //         setUsers(updateUsers)
        //         doc.splice(index,1,users)
        //     }
        // })


        // console.log(JSON.parse(localStorage.getItem('Details')));

        // const data = localStorage.removeItem('Details')


        // setUsers({
        //     name : "",
        //     description : "",
        //     permission: ""
        // })
        // const updatedItems = PostData.filter((elem) => {
        //     return elem.id !== id ;
        // })
        // setUsers({
        //     name : "",
        //     id : '',
        //     description : '',
        //     permission : ''
        // })
        // setOpen(false)
    }

    const deleteUsersTrue = () => {
        if (popup.show && popup.id) {
            let filteredData = users.filter((elem) => elem.id !== popup.id);
            setUsers(filteredData);
            setNewUsers(filteredData);

            localStorage.setItem('Details', JSON.stringify(filteredData))
            setOpen(false)
            setPopup({
                show: false,
                id: null,
            });
        }
        if(getLocalItems().length <=0 )
        {
            setNoData(true)
        }
    };

    const editItem = (id) => {

        history.push(`/EditRoles/${id}`);
        // var newEditItem = users.find((elem) => {
        //     return elem.id === id;
        // });
        // console.log(inputData)
        // const data = getLocalItems();
        // console.log(data);
        // console.log(newEditItem.id)
        // // setInputData(data)
        // console.log(inputData)
        // setInputData(newEditItem)
        // console.log(inputData.name)
        // setIsEditItem(id)

    }

    const GridSearchColumn = {
        "Roles": ["name", "permission"]
    }
    
    const GridSearchTypeEnum = {
        Roles: "Roles"
    }
    
const SearchGrid = (Data, SearchText, GridType) => {
    return Data.filter((item) => {
        var IsMatched = false;
        GridSearchColumn[GridType].forEach((element,i) =>  {
            if (item[element] !== undefined) {
                var index = (item[element] === null || item[element] === undefined ? -1 : (item[element].toString().toLowerCase().indexOf(SearchText.toLowerCase())));
                if (index >= 0) {
                    if (index >= 0) {
                        IsMatched = true;
                        return false;
                    }
                }
            }
        })
        if (IsMatched)
            return item;
    });
}


    const handleOnSearch = (e,data) => {
        setPage(0);

        if (e.target.value.length === 0) {
            // console.log(users)
            // console.log(searchData)
            setRows(searchData);
            setNewUsers(searchData)
            // setUsers(searchData)
            
        }
         else {
            const searchData1 = SearchGrid(
                data,
                e.target.value,
                GridSearchTypeEnum.Roles
            );
            // console.log(searchData)
            // console.log(searchData1)
            setRows(searchData1);
            setUsers(searchData1)
            setNewUsers(searchData1)
        }
    };
    
    
    
    const sorted = users.sort((a,b)=> {
        const isReversed = (sortData === 'asc') ? 1 : -1;
        return isReversed*a.name.localeCompare(b.name)
    });

    

//    const handleNextPage = (e) => {
//         const selectedPage = 1;
//         const offset = selectedPage * perPage;

//         setCurrentPage(selectedPage)
//         setOffset(offset)

//         const data = getLocalItems()
		
// 		const slice = data.slice(offset, offset + perPage)
//         console.log(slice)
//         setUsers(slice)
//     };

    
//    const handlePreviousPage = (e) => {
//     const selectedPage = 0;
//     const offset = selectedPage * perPage;

//     setCurrentPage(selectedPage)
//     setOffset(offset)

//     const data = getLocalItems()
    
//     const slice = data.slice(offset, offset + perPage)
//     console.log(slice)
//     setUsers(slice)
// };


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    

    // const sortingDownButton = () => {
        
    //     if(count <= 1 )
    //     {
    //         setSortData('desc')
    //         setChecked((prev) => !prev);
    //         setCount(count + 1)  
    //     }
    //     else
    //     {
    //         setSortData('')
    //         setChecked((prev) => !prev); 
    //         setCount(0)
    //     }
    // }
    const sortingDownButton = () => {
        if(count === 0)
        {
            setSortData('asc')
            setChecked((prev) => !prev);  
            setCount(count + 1)
            setIcon(false)  
             
        }
        else if(count === 1 )
        {
            setSortData('desc')
            setChecked((prev) => !prev);  
            setCount(count + 1) 
            setIcon(true) 
            
        }
        else if(count >= 1)
        {
            setSortData('')
            setChecked((prev) => !prev);
            setCount(0)
        }
    }
    
    const isSelected = name => selected.indexOf(name) !== -1;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  

    return (
        <>

            {/* <div>
            {PostData.map((postDetail,index) => {
                return <h1>{postDetail.name}</h1>
            })  }
        </div> */}

            {/* <h2>Hi, <span>{adminUser.name}</span> </h2> */}

            <Grid align="center">
                <Paper elevation={20} style={paperStyle}>
                    {/* <Grid align="left" >
                        <Link to={'Homepage'}  ><span >Go To Homepage</span></Link>
                    </Grid> */}
                    {/* <h2>Hi, <span>{adminUser.name}</span> </h2> */}
                    {/* <Button color="primary" variant="contained" className="btnAdd" align="right" onClick={btnAdd} >Add Roles</Button> */}
                    {/* <br /> */}

                    {
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="draggable-dialog-title">
                            <DialogTitle  >
                                DELETE
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Are you sure you want to delete this item?
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button autoFocus onClick={handleClose} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={deleteUsersTrue} color="primary">
                                    Yes
                                </Button>
                            </DialogActions>
                        </Dialog>
                    }

                    <TableContainer className="table border shadow"  >
                        <h3>USER ROLES</h3>
                     
                        <TextField
                            id="filled-required"
                            placeholder="Search"
                            autoComplete="off"
                            className={'searchtextfield'}
                            margin="normal"
                            variant="filled"
                            onChange={(e) => handleOnSearch(e, searchData)}
                        />
                        
                        <br/>
                         
                        
                        <TableHead className="thread-dark"  >
                            <TableRow>
                                <TableCell align="center">S.No.</TableCell>
                                <TableCell align="center">Role Name<Button className="buttonStyle"  onClick={sortingDownButton}>{icon ? <ArrowDownwardIcon/> : <ArrowUpwardIcon/>}</Button ></TableCell>
                                <TableCell align="center" >Role Description</TableCell>
                                <TableCell align="center">Role Permission</TableCell>
                                <TableCell align="center">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(noData !== false) ? <p>No Data Found</p> : noData === false}
                            {
                                ((sortData === 'asc' || sortData == 'desc') ? (
                                    users
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((user, index) => 
                                    {
                                    //    const isItemSelected = isSelected(user.name);
                                    return (
                                        
                                        <TableRow key={user.id} >
                                            <TableCell align="center" scope="row">{rowsPerPage*page + index + 1}</TableCell>
                                            <TableCell align="center">{user.name}</TableCell>
                                            <TableCell align="center" >{user.description}</TableCell>
                                            <TableCell align="center">{user.permission}</TableCell>
                                            <TableCell align="center">
                                                <Button className="btnEdit" onClick={() => editItem(user.id)} style={btnEdit} ><EditIcon /></Button>
                                                <br />
                                                <Button className="btnDelete" style={btnDelete} onClick={() => deleteUsers(user.id)} ><DeleteForeverIcon /></Button>
                                            </TableCell>
                                        </TableRow>
    
                                    );
                                    })) : (
                                        newUsers
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((user, index) => 
                                        {
                                        //    const isItemSelected = isSelected(user.name);
                                        return (
                                            
                                            <TableRow key={user.id} >
                                                <TableCell align="center" scope="row">{rowsPerPage*page + index + 1}</TableCell>
                                                <TableCell align="center">{user.name}</TableCell>
                                                <TableCell align="center">{user.description}</TableCell>
                                                <TableCell align="center">{user.permission}</TableCell>
                                                <TableCell align="center">
                                                    <Button className="btnEdit" onClick={() => editItem(user.id)} style={btnEdit} ><EditIcon /></Button>
                                                    <br />
                                                    <Button className="btnDelete" style={btnDelete} onClick={() => deleteUsers(user.id)} ><DeleteForeverIcon /></Button>
                                                </TableCell>
                                            </TableRow>
        
                                        );
                                        })))
                            }
                            

                        </TableBody>
                        {/* <Button onClick={handlePreviousPage}>Previous</Button> */}
                        <Button color="primary" variant="contained" className="btnAdd" align="right" onClick={btnAdd} >Add Roles</Button>
                        {/* <Button onClick={handleNextPage}>Next</Button> */}
                    </TableContainer>

                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        backIconButtonProps={{ 'aria-label': 'previous page' }}
                        nextIconButtonProps={{ 'aria-label': 'next page' }}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />

                </Paper>
             </Grid>




        </>
    )
}

export default Roles;