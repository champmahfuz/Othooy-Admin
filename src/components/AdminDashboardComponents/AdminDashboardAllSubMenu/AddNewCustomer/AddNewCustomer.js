import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import AssignmentIcon from "@mui/icons-material/Assignment";
import styles from './AddNewCustomer.module.css';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import MenuIcon from "@mui/icons-material/Menu";

const AddNewCustomer = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    return (
        <Container sx={{ width: "100%", mb: 5 }}>
            <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
                <Typography>
                    <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
                </Typography>
                <Typography>
                    <span style={{ fontSize: "26px" }}>
                        Customer
                    </span>{" "}
                    <br /> <span style={{ color: "#969494" }}>Customer Information</span>
                </Typography>
            </Box>

            <Box sx={{ textAlign: "right", my: 2 }}>
                <NavLink
                    to="/dashboardhome/manageCustomer"
                    style={{ textDecoration: "none" }}
                >
                    <Button className={`${styles.manageEmployeeBtn}`}>
                        Manage Customer
                    </Button>
                </NavLink>
            </Box>
            <Box className={`${styles.tableContainer}`}>
                <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
                    {" "}
                    <i class="fas fa-address-book"></i> Add Customer
                </Typography>
                <hr />
                <div className="mt-2">
                    <div className="form-container">
                        <div>
                            <form >
                                <div className="row gx-3 mb-3">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    First Name{" "}
                                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="First Name"
                                                    style={{ background: "#E5E5E5" }}
                                                />
                                                {/* {errors.firstName && (
                                                    <span className="text-danger">
                                                        Please enter first name.
                                                    </span>
                                                )} */}

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Last Name{" "}
                                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Last Name"
                                                    style={{ background: "#E5E5E5" }}
                                                    {...register("lastName", { required: true })}
                                                />
                                                {/* {errors.lastName && (
                                                    <span className="text-danger">
                                                        Please enter last name.
                                                    </span>
                                                )} */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row gx-3 mb-3">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Email{" "}
                                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Email"
                                                    style={{ background: "#E5E5E5" }}
                                                    {...register("email", { required: true })}
                                                />
                                                {/* {errors.email && (
                                                    <span className="text-danger">
                                                        Please enter email.
                                                    </span>
                                                )} */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Phone{" "}
                                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Phone"
                                                    style={{ background: "#E5E5E5" }}
                                                    {...register("phone", { required: true })}
                                                />
                                                {/* {errors.phone && (
                                                    <span className="text-danger">
                                                        Please enter phone number.
                                                    </span>
                                                )} */}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row gx-3 mb-3">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    City
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="City"
                                                    style={{ background: "#E5E5E5" }}
                                                // {...register("city", { required: false })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Zip
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Zip"
                                                    style={{ background: "#E5E5E5" }}
                                                // {...register("zip", { required: false })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row gx-3 mb-3">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Address
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    rows="2"
                                                    placeholder="Address"
                                                    style={{ background: "#E5E5E5" }}
                                                    {...register("address", { required: false })}
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>




                                    {/* <div className="col-lg-6 col-md-6 col-sm-12 col-12 ">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <Box sx={{ textAlign: "center", my: 2 }}>
                                                    <input
                                                        type="reset"
                                                        className={`${"btn"} ${styles.resetBtn}`}
                                                        style={{ background: "#251D58", color: "#fff" }}
                                                        value="Reset"
                                                    />
                                                    <input
                                                        type="submit"
                                                        className={`${"btn"} ${styles.saveBtn}`}
                                                        style={{ background: "#251D58", color: "#fff" }}
                                                        value="Save"
                                                    />
                                                </Box>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-1 ">
                                        <div className="p-3 border bg-light">
                                            <div>
                                                <Box sx={{ textAlign: "center", my: 4 }}>
                                                    <input
                                                        type="reset"
                                                        className={`${"btn"} ${styles.resetBtn}`}
                                                        style={{ background: "#251D58", color: "#fff" }}
                                                        value="Reset"
                                                    />
                                                    <input
                                                        type="submit"
                                                        className={`${"btn"} ${styles.saveBtn}`}
                                                        style={{ background: "#251D58", color: "#fff" }}
                                                        value="Save"
                                                    />
                                                </Box>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Box >
        </Container >
    );
};

export default AddNewCustomer;