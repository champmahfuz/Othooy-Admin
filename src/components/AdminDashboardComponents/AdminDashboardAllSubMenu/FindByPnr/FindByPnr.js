import { Box, Button, Container, Paper, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useState } from 'react';
import AssignmentIcon from "@mui/icons-material/Assignment";
import styles from './FindByPnr.module.css';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import CancelIcon from '@mui/icons-material/Cancel';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import { useLocation, useNavigate } from 'react-router-dom';


const FindByPnr = () => {
    const [inputPnrNumber, setInputPnrNumber] = useState("");
    const [pnrResponseData, setpnrResponseData] = useState(null);
    const [errorMsg, setErrorMsg] = useState("");
    const pnrErrorMsg = `Please insert the right pnr, ${inputPnrNumber.length}`
    const handleFindPnrData = async () => {

        if (inputPnrNumber.length < 6 || inputPnrNumber.length > 6) {
            setErrorMsg(pnrErrorMsg);
        } else if (inputPnrNumber === '') {
            setErrorMsg('PNR should not be empty!');
        } else {
            try {
                const response = await axiosPrivate.get(`/api/v1/createPNR/createAirLinePnrApi?gdsPnr=${inputPnrNumber}`);
                setpnrResponseData(response.data);

            } catch (err) {
                console.log(err)
            }
        }


    }

    const handleCancelPnrData = async () => {
        if (inputPnrNumber.length < 6 || inputPnrNumber.length > 6) {
            setErrorMsg(pnrErrorMsg);
        } else if (inputPnrNumber === '') {
            setErrorMsg('PNR should not be empty!');
        } else if (pnrResponseData?.request?.confirmationId) {
            try {
                const cancelResponse = await axiosPrivate.get(`/api/v1/createPNR/cancelGDSPnrApi?gdsPnr=${pnrResponseData?.request?.confirmationId}`);
                console.log(cancelResponse.data)

            } catch (err) {
                console.log(err)
                // setError(err)
            }
        }


    }

    const axiosPrivate = useAxiosPrivate();
    // console.log(auth)
    const navigate = useNavigate();
    const location = useLocation;

    const handleConfirmTicket = async () => {
        if (inputPnrNumber.length < 6 || inputPnrNumber.length > 6) {
            setErrorMsg(pnrErrorMsg);
        } else if (inputPnrNumber === '') {
            setErrorMsg('PNR should not be empty!');
        } else {
            try {
                //http://localhost:7000/api/v1/createAirTicket/findbypnr?gdsPnrNumber=OCAWWG
                const response = await axiosPrivate.get(`/api/v1/createAirTicket/findbypnr?gdsPnrNumber=${pnrResponseData?.request?.confirmationId}`);
                console.log(response.data)

            } catch (err) {
                console.log(err)
                // setError(err)
            }
        }


    }

    console.log(pnrResponseData)
    return (
        <Container sx={{ width: "100%", mb: 5 }}>
            <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
                <Typography>
                    <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
                </Typography>
                <Typography>
                    <span style={{ fontSize: "26px" }}>Find </span>{" "}
                    <br /> <span style={{ color: "#969494" }}>
                        {/* Find By PNR Number */}
                    </span>
                </Typography>
            </Box>

            <Box className={`${styles.tableContainer}`}>
                <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
                    Find By Sabre GDS PNR Number

                </Typography>
                {
                    errorMsg &&
                    <Typography sx={{ fontWeight: "bold", textAlign: "left", color: 'red' }}>{errorMsg}</Typography>
                }
                <hr />
                <div className="mt-2">
                    <div className="form-container">
                        <div>
                            <form>
                                <div className="row gx-3 mb-3">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Input PNR Here{" "}
                                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                                </label>
                                                <input
                                                    type="text"
                                                    onFocus={e => setErrorMsg('')}
                                                    name="inputPnrNumber"
                                                    className="form-control"
                                                    placeholder="Input PNR Here"
                                                    style={{ background: "#E5E5E5" }}
                                                    // value={ inputPnrNumber }
                                                    onChange={e => setInputPnrNumber(e.target.value)}
                                                />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">

                                        <div className="p-3">
                                            <div>
                                                <Box sx={{ textAlign: "center" }}>

                                                    <input
                                                        type="button"
                                                        className={`${"btn"} ${styles.saveBtn}`}
                                                        style={{ background: "#251D58", color: "#fff", padding: '20px 30px' }}
                                                        value="Find"
                                                        onClick={handleFindPnrData}
                                                    />

                                                </Box>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row gx-3 mb-3">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-1">

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {
                    pnrResponseData &&
                    <div className={`${styles.mainContainer} ${'mt-5'}`}>
                        <div className="container shadow" style={{ background: "#FFFFFF", borderRadius: '5px 5px 0px 0px' }}>
                            <div className="row">
                                {/* <div><strong>DAC-CXB (One Way)</strong></div> */}
                                <div className="col-sm-12 col-md-6 float-left"><strong>
                                    {

                                        <span >
                                            {pnrResponseData?.journeys && pnrResponseData?.journeys[0].firstAirportCode
                                            }-{pnrResponseData?.journeys && pnrResponseData?.journeys[0].lastAirportCode}
                                            {
                                                pnrResponseData?.journeys && pnrResponseData?.journeys.length === 1 ? " (One Way)" :
                                                    pnrResponseData?.journeys && pnrResponseData?.journeys.length === 2 && pnrResponseData?.journeys[0].firstAirportCode === pnrResponseData?.journeys[1].lastAirportCode ? " (Round Trip)" :
                                                        " (Multi City)"
                                            }

                                        </span>
                                    }



                                </strong></div>
                                {/* <div><strong>PENDING</strong></div> */}
                                <div className="col-sm-12 col-md-6 float-left">
                                    {
                                        // pnrResponseData?.flights && pnrResponseData?.isTicketed !== true &&
                                        <Button variant="contained" color="success" startIcon={<AirplaneTicketIcon />}
                                            onClick={handleConfirmTicket}> Confirm
                                        </Button>
                                    }
                                    <Button variant="outlined" startIcon={
                                        pnrResponseData?.isTicketed === false && pnrResponseData?.flights ? <HourglassTopIcon /> : pnrResponseData?.isTicketed === true && pnrResponseData?.flights ? <AirplaneTicketIcon /> : <CancelIcon />
                                    } >{pnrResponseData?.isTicketed === false && pnrResponseData?.flights ? 'Pending' : pnrResponseData?.isTicketed === true && pnrResponseData?.flights ? 'Confirmed' : 'Canceled'
                                        }</Button>
                                    {
                                        <Button variant="contained" color="error" startIcon={<CancelIcon />}
                                            disabled={pnrResponseData?.flights && pnrResponseData?.isTicketed !== true ? false : true}
                                            onClick={handleCancelPnrData}>{pnrResponseData?.isTicketed === false && pnrResponseData?.flights ? 'Cancel' : 'Canceled'
                                            }</Button>

                                    }

                                </div>
                            </div>

                            <div className="d-flex justify-content-between pt-5 booking-container">
                                <div>
                                    <div className={`${styles.bookingDetails} ${'d-flex justify-content-between'}`}>
                                        <div className={`${styles.bookingInfo}`}>
                                            <p className='text-start'><span>Booking ID</span><br />
                                                <span><strong>Othooy-123456986</strong></span></p>
                                        </div>
                                        <div className={`${styles.bookingInfo}`}>
                                            <p className='text-start'><span>Airline Pnr</span><br />
                                                <span><strong>{pnrResponseData && pnrResponseData?.request?.confirmationId}</strong></span></p>
                                        </div>
                                        <div className={`${styles.bookingInfo}`}>
                                            <p className='text-start'><span>Pax Details</span><br />
                                                <span><strong>{pnrResponseData && pnrResponseData?.travelers?.length}({pnrResponseData?.travelers && pnrResponseData?.travelers[0]?.givenName} {pnrResponseData?.travelers && pnrResponseData?.travelers[0]?.surname.split(' ')[0]})</strong></span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.airlineLogo}`}>

                                    {
                                        pnrResponseData?.flights && pnrResponseData.flights.map((flightsData, index) => (
                                            <span key={index}>
                                                <img style={{ borderRadius: "20px", width: "80px", height: "40px" }} src={`https://pics.avs.io/250/80/${flightsData.airlineCode}@2x.png`} alt="" />
                                            </span>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                        {pnrResponseData.flights &&

                            <div className="container shadow" style={{ background: "#CBE4DE", borderRadius: '0px 0px 5px 5px' }}>
                                <div className={` ${'d-flex justify-content-between pt-3'} ${styles.flightDetails}`}>
                                    <div className={`${styles.flightInfo}`}>
                                        <p className='text-start'><span>Date</span><br />
                                            {
                                                pnrResponseData.flights && pnrResponseData.flights.map((flightsData, index) => (
                                                    <span key={index}>Departs: {flightsData.departureDate} <br></br>
                                                        Arrival: {flightsData.arrivalDate} <br></br>
                                                    </span>
                                                ))
                                            }
                                            {/* <span>Wed, 04 Jan, 2023</span> */}
                                        </p>
                                    </div>
                                    <div className={`${styles.flightInfo}`}>
                                        <p className='text-start'><span>Time</span><br />
                                            {
                                                pnrResponseData.flights && pnrResponseData.flights.map((flightsData, index) => (
                                                    <span key={index}>
                                                        Departs:    {flightsData.departureTime} <br></br>
                                                        Arrival:  {flightsData.arrivalTime} <br></br>
                                                    </span>
                                                ))
                                            }

                                        </p>
                                    </div>
                                    <div className={`${styles.flightInfo}`}>
                                        <p className='text-start'><span>Flight Info</span><br />
                                            {
                                                pnrResponseData.flights && pnrResponseData.flights.map((flightsData, index) => (
                                                    <span key={index}> Departs: {flightsData.fromAirportCode}
                                                        <br></br>
                                                        Arrival: {flightsData.toAirportCode}<br></br>
                                                    </span>
                                                ))
                                            }

                                        </p>
                                    </div>
                                    <div className={`${styles.flightInfo}`}>
                                        <p className='text-start'><span>Flight Number</span><br />

                                            {
                                                pnrResponseData.flights && pnrResponseData.flights.map((flightsData, index) => (
                                                    <span key={index}>
                                                        {flightsData.airlineCode} {flightsData.flightNumber} ({flightsData.fromAirportCode}-{flightsData.toAirportCode})<br></br>
                                                    </span>
                                                ))
                                            }

                                        </p>
                                    </div>
                                    <div className={`${styles.flightInfo}`}>
                                        <p className='text-start'><span>Baggage Allowance</span><br />
                                            {
                                                pnrResponseData.fareOffers && pnrResponseData.fareOffers.map((fareOffersData, index) => (
                                                    <span key={index}>{fareOffersData.cabinBaggageAllowance.totalWeightInKilograms} KG
                                                        <br></br>
                                                        {fareOffersData.checkedBaggageAllowance.totalWeightInKilograms} KG
                                                    </span>
                                                ))
                                            }

                                        </p>
                                    </div>
                                </div>

                            </div>
                        }
                    </div>
                }
            </Box>

            <Box sx={{ marginTop: 5 }} className={`${styles.tableContainer}`}>
                <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
                    Booking Details
                </Typography>
                <hr />
                <TableContainer
                    component={Paper}
                    sx={{ border: 1, borderColor: "grey.300" }}
                >
                    <Table aria-label="simple table">
                        <TableHead className={`${styles.tableHeader}`}>
                            <TableRow>
                                <TableCell className={`${styles.tableCell}`}>SL.</TableCell>
                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Category Name
                                </TableCell>
                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Action
                                </TableCell>
                            </TableRow>
                        </TableHead>

                    </Table>
                </TableContainer>
                <Typography className="mt-3">

                </Typography>
            </Box>
        </Container>
    );
};

export default FindByPnr;