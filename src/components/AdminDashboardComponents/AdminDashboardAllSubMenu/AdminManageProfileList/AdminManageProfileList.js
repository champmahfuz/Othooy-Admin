import React, { useState } from 'react';
// import useAuth from '../../../../../hooksV1/useAuthV1';
// import LoadingV1 from '../../../Shared/LoadingV1/LoadingV1';
import { Container } from 'react-bootstrap';
import styles from './AdminManageProfileList.module.css';
import AssignmentIcon from "@mui/icons-material/Assignment";
import EditIcon from "@mui/icons-material/Edit";
import img from '../../../../assests/img/no image.jpg';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import MuiPhoneNumber from 'material-ui-phone-number';

const AdminManageProfileList = () => {
    // const { user, isLoading } = useAuth();
    const [inputValue, setInputValue] = useState({});

    const currencies = [
        { value: 'Male' },
        { value: 'Female' },
        { value: 'Others' },
    ];

    const maritalStatus = [
        { value: 'Single' },
        { value: 'Married' },
        { value: 'Widowed' },
        { value: 'Divorced' },

    ];

    const religion = [
        { value: 'Islam' },
        { value: 'Christianity' },
        { value: 'Hinduism' },
        { value: 'Buddhism' },

    ];

    const languagePreference
        = [
            { value: 'Good' },
            { value: 'Average' },
            { value: 'Excelent' },
            { value: 'Outstanding' },

        ];

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInputValue = { ...inputValue };
        newInputValue[field] = value;
        console.log(newInputValue);
        setInputValue(newInputValue);
    }

    // if (isLoading) {
    //     return <LoadingV1></LoadingV1>
    // }

    return (
        <Container sx={{ width: '80%' }} >
            {/* Profile */}
            <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
                <Typography>
                    <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
                </Typography>
                <Typography>
                    <span style={{ fontSize: "26px" }}>My Profile</span> <br />{" "}

                </Typography>
            </Box>
            <Link to='/user/EditProfile'>
                <Box sx={{ textAlign: "right", my: 2 }}>
                    <Button startIcon={<EditIcon />} className={`${styles.addEmployeeBtn}`}>Edit</Button>
                </Box>
            </Link>
            <Box sx={{ mb: '40px' }} className={`${styles.tableContainer}`}>
                <Typography sx={{ fontSize: '25px', fontWeight: 'bold' }}>Profile</Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={5}>
                            <img style={{ borderRadius: '50%', border: '1px solid black' }} src={img} alt="" />
                        </Grid>
                        <Grid sx={{ display: 'flex' }} item xs={7}>
                            <Typography sx={{ paddingRight: '5px' }}>
                                <ErrorOutlineIcon />
                            </Typography>

                            <Typography sx={{ fontWeight: 'bolder' }}>
                                Basic info, for a faster booking experience
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>

                <Grid sx={{ mt: 5 }} item xs={12} md={6}>
                    <form  >
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="travellerName"
                            type="text"
                            // onBlur={handleOnBlur}
                            defaultValue="champ"
                            onChange={handleOnChange}
                            variant="standard"
                        // value={inputValue}

                        ></TextField>
                        {/* <Typography>{user?.displayName}</Typography> */}
                        <TextField
                            sx={{ width: '100%', m: 1, }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="text"
                            defaultValue="champmahfuz@gmail.com"
                            onChange={handleOnChange}
                            variant="standard"

                        />
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="standard-basic"
                            label="Your Address"
                            name="address"
                            type="text"
                            variant="standard"
                            onChange={handleOnChange}
                        />

                        {/* gender text field start */}
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="standard-select-currency-native"
                            name="gender"
                            type="text"
                            select
                            label="Your Gender"
                            onChange={handleOnChange}
                            // defaultValue="EUR"
                            SelectProps={{
                                native: true,
                            }}
                            variant="standard"
                        >
                            {currencies.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.value}
                                </option>
                            ))}
                        </TextField>
                        {/* gender text field end */}

                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="standard-select-currency-native"
                            select
                            label="Marital status"
                            name="martialStatus"
                            type="text"
                            onChange={handleOnChange}
                            SelectProps={{
                                native: true,
                            }}
                            variant="standard"
                        >
                            {maritalStatus.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.value}
                                </option>
                            ))}
                        </TextField>

                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="standard-basic"
                            label="Date Of Birth"
                            type="date"
                            name="dateOfBirth"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                            onChange={handleOnChange}
                        />

                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="standard-basic"
                            label="Passport Number"
                            type="text"
                            name="passport number"
                            variant="standard"
                            onChange={handleOnChange}
                        />
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="standard-basic"
                            label="Passport Expiry Date"
                            type="date"
                            name="passportExpiryDate"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                            onChange={handleOnChange}
                        />
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="standard-basic"
                            label="National Id Number"
                            type="text"
                            name="idNum"
                            variant="standard"
                            onChange={handleOnChange}
                        />

                        <MuiPhoneNumber
                            sx={{ width: '100%', m: 1 }}
                            defaultCountry={'bd'}
                            type="text"
                            name="phoneNumber"
                            label="Phone Number"
                        />


                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="standard-select-currency-native"
                            select
                            label="Religon"
                            name="religon"
                            type="text"
                            onChange={handleOnChange}
                            SelectProps={{
                                native: true,
                            }}
                            variant="standard"
                        >
                            {religion.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.value}
                                </option>
                            ))}
                        </TextField>

                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="standard-select-currency-native"
                            select
                            label="Language Preference
                            "
                            name="languagePreference
                            "
                            type="text"
                            onChange={handleOnChange}
                            SelectProps={{
                                native: true,
                            }}
                            variant="standard"
                        >
                            {languagePreference.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.value}
                                </option>
                            ))}
                        </TextField>

                    </form>

                </Grid>

            </Box>

        </Container>
    );
};

export default AdminManageProfileList;