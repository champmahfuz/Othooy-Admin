import React, { useState } from 'react';
import styles from './UploadPackage.module.css';
import { Box, Container, Grid, Typography } from '@mui/material';

const UploadPackage = () => {
    const [inputValue, setInputValue] = useState({});

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInputValue = { ...inputValue };
        newInputValue[field] = value;
        console.log(newInputValue);
        setInputValue(newInputValue);
    }

    return (
        <Container sx={{ backgroundColor: 'white' }}>
            <Box >
                <Typography sx={{ fontSize: '1.5rem', textAlign: 'center', mt: '10px' }}>
                    Upload a Pakage
                </Typography>
                <Box m={2}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>

                            <div className="mb-3">
                                <label
                                    className="form-label"
                                    style={{ fontWeight: "bold" }}
                                >
                                    Package Id{" "}
                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Package Id"
                                    name="packageId"
                                    onChange={handleOnChange}
                                    style={{ background: "#E5E5E5" }}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className="mb-3">
                                <label
                                    className="form-label"
                                    style={{ fontWeight: "bold" }}
                                >
                                    Package Name{" "}
                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Package Id"
                                    name="packageName"
                                    onChange={handleOnChange}
                                    style={{ background: "#E5E5E5" }}
                                />
                            </div>
                        </Grid>
                    </Grid>
                </Box>

                <Box m={2}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <div className="mb-3">
                                <label
                                    className="form-label"
                                    style={{ fontWeight: "bold" }}
                                >
                                    Description
                                </label>
                                <textarea
                                    className="form-control"
                                    rows="10"
                                    placeholder="Description"
                                    name="details"
                                    onChange={handleOnChange}
                                    style={{ background: "#E5E5E5", justifyContent: 'space-around' }}

                                ></textarea>
                            </div>
                        </Grid>
                    </Grid>
                </Box>


                <Box m={2}>
                    <div className="row gx-3 mb-3 gy-3">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="p-3  ">
                                <div className="mb-3">
                                    <span
                                        className="mb-2 d-inline-block"
                                        style={{ fontWeight: "bold" }}
                                    >
                                        Image
                                    </span>
                                    <div className="input-group mb-4">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="form-control"
                                            style={{ background: "#E5E5E5" }}
                                            id="inputGroupFile02"
                                            name="image"
                                            onChange={handleOnChange}

                                        />
                                        <label
                                            className="input-group-text"
                                            htmlFor="inputGroupFile02"
                                        >
                                            <img
                                                style={{ height: "35px" }}
                                                src=""
                                                alt=""
                                            />{" "}
                                            <span
                                                style={{ color: "#251D58", fontWeight: "bold" }}
                                            >
                                                Upload document
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
                            <div className="p-3  ">
                                <div className="mb-3">
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

                </Box>
            </Box>

        </Container>
    );
};

export default UploadPackage;