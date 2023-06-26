import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import SendIcon from "@mui/icons-material/Send";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import styles from './ManagePayment.module.css';
import AssignmentIcon from "@mui/icons-material/Assignment";
import { NavLink } from 'react-router-dom';
import MenuIcon from "@mui/icons-material/Menu";

const ManagePayment = () => {
    const { register, } = useForm();
    const [mode, setMode] = React.useState('');
    const [category, setCategory] = React.useState('');

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleModeChange = (event) => {
        setMode(event.target.value);
    };


    return (
        <Container sx={{ width: "100%", mb: 5 }}>
            <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
                <Typography>
                    <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
                </Typography>
                <Typography>
                    <span style={{ fontSize: "26px" }}>Accounts</span> <br />{" "}
                    <span style={{ color: "#969494" }}>Add New Payment</span>
                </Typography>
            </Box>

            <Box sx={{ textAlign: "right", my: 2 }}>
                <NavLink to="/dashboard/manage-transaction" style={{ textDecoration: "none" }}>
                    <Button className={`${styles.receiptBtn}`} startIcon={<MenuIcon />}>
                        Manage Transaction
                    </Button>
                </NavLink>
            </Box>

            <Box className={`${styles.paymentContainer}`}>
                <Typography sx={{ fontWeight: "bold", textAlign: "start" }}>Add Payment</Typography>
                <hr />
                <Box>

                    <form
                        // onSubmit={handleSubmit(onSubmit)}
                        className={`${styles.paymentForm} ${"shadow"}`}>
                        <Grid
                            container
                            spacing={4}
                            columns={16}
                            sx={{ marginTop: 2, marginBottom: 2 }}
                        >
                            <Grid item md={8} sm={16} sx={16}>
                                <Box className={`${styles.inputContainer}`}>
                                    <Typography className={`${styles.inputTitle}`} variant="f6">
                                        Date<span style={{ color: "#f44336" }}>*</span>
                                    </Typography>

                                    <input
                                        type="date"
                                        {...register("date", { required: true })}
                                        className={`${styles.inputFields}`}
                                        style={{
                                            padding: "8px",
                                            border: "1px solid #aeaeae",
                                            borderRadius: "3px",
                                        }}
                                    />
                                </Box>

                                <Box className={`${styles.inputContainer}`}>
                                    <Typography className={`${styles.inputTitle}`} variant="f6">
                                        Transaction Category
                                        <span style={{ color: "#f44336" }}>*</span>
                                    </Typography>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            size="small"
                                            className={`${styles.inputFields}`}
                                            label="Select Category"
                                            sx={{ padding: "4px" }}
                                            {...register("category", { required: true })}
                                            value={category}
                                            onChange={handleCategoryChange}
                                        >
                                            <MenuItem value="supplier">Supplier</MenuItem>
                                            <MenuItem value="employee">Employee</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>


                                <Box className={`${styles.inputContainer}`}>
                                    <Typography className={`${styles.inputTitle}`} variant="f6">
                                        Transaction Mode
                                        <span style={{ color: "#f44336" }}>*</span>
                                    </Typography>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Select Mode</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            size="small"
                                            className={`${styles.inputFields}`}
                                            label="Select Mode"
                                            sx={{ padding: "4px" }}
                                            {...register("mode", { required: true })}
                                            value={mode}
                                            onChange={handleModeChange}
                                        >
                                            <MenuItem value="cash">Cash</MenuItem>
                                            <MenuItem value="card">Card</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>

                            </Grid>
                            <Grid item md={8} sm={16} sx={16}>
                                <Box className={`${styles.inputContainer}`}>
                                    <Typography className={`${styles.inputTitle}`} variant="f6">
                                        Details
                                    </Typography>

                                    <TextField
                                        id="outlined-basic"
                                        size="small"
                                        className={`${styles.inputFields}`}
                                        label="Details"
                                        variant="outlined"
                                        {...register("detail")}
                                    />
                                </Box>


                                {/* <Box className={`${styles.inputContainer}`} sx={{ paddingBottom: "30px" }}>
                                    <Typography className={`${styles.inputTitle}`} variant="f6">
                                        Select Name
                                        <span style={{ color: "#f44336" }}>*</span>
                                    </Typography>

                                    <Stack spacing={2}>
                                        <Autocomplete
                                            {...register("name", { required: true })}

                                            freeSolo
                                            id="free-solo-demo"
                                            size="small"
                                            className={`${styles.inputFields}`}

                                            renderInput={(params) => (
                                                <TextField
                                                    {...register("name", { required: true })}
                                                    {...params}
                                                    label="Name"
                                                />
                                            )}
                                        />
                                    </Stack>
                                </Box> */}
                                <Box className={`${styles.inputContainer}`}>
                                    <Typography className={`${styles.inputTitle}`} variant="f6">
                                        Select Name
                                        <span style={{ color: "#f44336" }}>*</span>
                                    </Typography>

                                    <TextField
                                        id="outlined-basic"
                                        size="small"
                                        className={`${styles.inputFields}`}
                                        label=" Select Name"
                                        variant="outlined"
                                        sx={{ pb: 1 }}
                                        {...register("detail")}
                                    />
                                </Box>


                                <Box className={`${styles.inputContainer}`}>
                                    <Typography className={`${styles.inputTitle}`} variant="f6">
                                        Payment Amount
                                        <span style={{ color: "#f44336" }}>*</span>
                                    </Typography>

                                    <TextField
                                        id="outlined-basic"
                                        size="small"
                                        className={`${styles.inputFields}`}
                                        label="Payment Amount"
                                        variant="outlined"
                                        sx={{ pb: 1 }}
                                        {...register("detail")}
                                    />
                                </Box>

                            </Grid>
                        </Grid>
                        {/* <Box sx={{ textAlign: "center" }}>
                            <Button
                                type="submit"
                                className={`${styles.paymentBtn}`}
                                sx={{ my: 2, fontWeight: "bold" }}
                                startIcon={<SendIcon />}
                            >
                                Submit
                            </Button>
                        </Box> */}
                        <div className="row gx-3 mb-3">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-1">
                                <div className="p-3">
                                    <div>
                                        <Box sx={{ textAlign: "center" }}>

                                            <Button
                                                type="submit"
                                                className={`${styles.paymentBtn}`}
                                                sx={{ my: 2, fontWeight: "bold" }}
                                                startIcon={<SendIcon />}
                                            >
                                                Submit
                                            </Button>
                                            <Button
                                                type="reset"
                                                className={`${styles.resetBtn}`}
                                                sx={{ my: 2, fontWeight: "bold" }}
                                                startIcon={<RestartAltIcon />}
                                            >
                                                Reset
                                            </Button>

                                            {/* <input
                                                type="reset"
                                                className={`${"btn"} ${styles.resetBtn}`}
                                                style={{ background: "#251D58", color: "#fff" }}
                                                value="Reset"
                                                startIcon={<SendIcon />}
                                            /> */}
                                        </Box>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>
                </Box>
            </Box>
        </Container >
    );
};

export default ManagePayment;