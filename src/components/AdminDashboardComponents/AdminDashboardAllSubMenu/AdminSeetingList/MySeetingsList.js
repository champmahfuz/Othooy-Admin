import { Box, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import styles from './MySeetingsList.module.css';
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import { Link } from 'react-router-dom';
// import useAuth from '../../../../../hooksV1/useAuthV1';
// import LoadingV1 from '../../../Shared/LoadingV1/LoadingV1';

const MySeetingsList = () => {
    // const { user, isLoading } = useAuth();
    // // const [user, loading] = useAuthState(auth);
    // if (isLoading) {
    //     return <LoadingV1></LoadingV1>
    // }
    return (
        <Container>
            <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
                <Typography>
                    <SettingsApplicationsIcon className={`${styles.assignmentIcon}`} />{" "}
                </Typography>
                <Typography>
                    <span style={{ fontSize: "26px" }}>Seetings</span> <br />{" "}
                </Typography>
            </Box>

            <Box sx={{ mb: '30px' }} className={`${styles.tableContainer}`}>
                <Typography sx={{ fontSize: '25px', fontWeight: 'bold' }}>Seeting Info</Typography>
                <p>Manage your email address, mobile number and password</p>

                <Grid container spacing={2}>
                    <Grid sx={{ mt: 2 }} item xs={12} md={6}>
                        <form  >
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="standard-basic"
                                label="Email"
                                type="email"
                                name="name"
                                defaultValue="champmahfuz@gmail.com"
                                variant="standard" />
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="standard-basic"
                                label="Phone"
                                type="number"
                                name="name"
                                variant="standard" />
                            <Link to='/admin/ChangePassword'>
                                <Typography sx={{ fontWeight: 'bold', ml: '10px', mb: '20px' }}>Change Password ?</Typography>
                            </Link>

                        </form>
                    </Grid>

                </Grid>

            </Box>
        </Container>
    );
};

export default MySeetingsList;

