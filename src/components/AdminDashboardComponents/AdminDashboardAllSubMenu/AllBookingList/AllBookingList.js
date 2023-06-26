import React from 'react';
import styles from './AllBookingList.module.css';
import useFetch from '../../../hooks/useFetch';
import { useState } from 'react';
import Loading from '../../../Shared/Loading/Loading';

const AllBookingList = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [limitSize, setLimitSize] = useState(5);
    const [selectedPage, setSelectedPage] = useState(1);


    // const [responseData, setResponseData] = useState(15);
    // const { data } = useFetch(`api/v1/managetickets?pageNumber=${pageNumber}&limitSize=${limitSize}`);
    const { privateData, loading } = useFetch(`api/v1/managetickets?pageNumber=${pageNumber}&limitSize=${limitSize}`);
    // const x = data?.airLinePnrData;
    // const pageNumbers = [...Array(data?.totalPages).keys()].map((i) => i + 1);
    const responseData = privateData?.allBookedData;
    const num = privateData?.totalPages;
    const pageNumbers = Array.from({ length: num }, (_, index) => index + 1);
    const limitOptions = [5, 10, 20, 50];
    console.log(privateData)
    // console.log(pageNumbers)
    console.log(privateData)
    const handlePageChange = (newPage) => {
        setPageNumber(newPage);
        setSelectedPage(newPage);
    };
    const handleLimitChange = (newLimit) => {
        setLimitSize(newLimit);
    };
    const x = [1, 2, 3];
    console.log(x.length)
    return (
        <>
            {
                // data?.responseData === undefined ? <LoadingV1 /> :
                loading ? <Loading /> :
                    <div>
                        {/* className={${styles.inputFieldGroup} ${"mb-3 mx-auto"}} main-container mt-5*/}
                        {/* {`${styles.topContainer}`} */}
                        {
                            responseData && responseData.map((datas, index) => (


                                <div key={index} className={`${styles.mainContainer} ${'mt-5'}`}>
                                    <div className="container shadow" style={{ background: "#FFFFFF", borderRadius: '5px 5px 0px 0px' }}>
                                        <div className="d-flex justify-content-between pt-3 gap-5">
                                            <div><strong>
                                                {/* DAC-CXB (One Way) */}
                                                {datas?.airLinePnrData?.journeys[0].firstAirportCode
                                                }-{datas?.airLinePnrData?.journeys[0].lastAirportCode}
                                                {
                                                    datas?.airLinePnrData?.journeys.length === 1 ? " (One Way)" :
                                                        datas?.airLinePnrData?.journeys.length === 2 && datas?.airLinePnrData?.journeys[0].firstAirportCode === datas?.airLinePnrData?.journeys[1].lastAirportCode ? " (Round Trip)" :
                                                            " (Multi City)"
                                                }
                                                {/* (One Way) */}
                                            </strong></div>
                                            {/* <div><strong>PENDING</strong></div> */}
                                            <div><strong>{datas?.airLinePnrData?.isTicketed && datas?.payment !== undefined ? "Confirmed" : "Pending"}</strong></div>
                                        </div>

                                        <div className="d-flex justify-content-between pt-5 booking-container">
                                            <div>
                                                <div className={`${styles.bookingDetails} ${'d-flex justify-content-between'}`}>
                                                    <div className={`${styles.bookingInfo}`}>
                                                        <p className='text-start'><span>Booking ID</span><br />
                                                            <span><strong>
                                                                {/* Othooy-123456986 */}
                                                                {datas.invoiceNumber}
                                                            </strong></span></p>
                                                    </div>
                                                    <div className={`${styles.bookingInfo}`}>
                                                        <p className='text-start'><span>Airline Pnr</span><br />
                                                            <span><strong>{datas?.airLinePnrData
                                                                ?.request?.confirmationId}</strong></span></p>
                                                    </div>
                                                    <div className={`${styles.bookingInfo}`}>
                                                        <p className='text-start'><span>Pax Details</span><br />
                                                            <span><strong>{datas?.airLinePnrData
                                                                ?.travelers.length}({datas?.airLinePnrData
                                                                    ?.travelers[0]?.givenName} {datas?.airLinePnrData
                                                                        ?.travelers[0]?.surname.split(' ')[0]})</strong></span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`${styles.airlineLogo}`}>
                                                {/* <img src={ usbanglaLogo } alt="us-bangla" style={ { width: "80px", height: "40px" } } /> */}
                                                {
                                                    datas.airLinePnrData.flights.map((flightsData, index) => (
                                                        <span key={index}>
                                                            <img style={{ borderRadius: "20px", width: "110px" }} src={`https://pics.avs.io/250/80/${flightsData.airlineCode}@2x.png`} alt="" />
                                                        </span>
                                                    ))
                                                }

                                            </div>
                                        </div>
                                    </div>
                                    <div className="container shadow" style={{ background: "#CBE4DE", borderRadius: '0px 0px 5px 5px' }}>
                                        <div className={` ${'d-flex justify-content-between pt-3'} ${styles.flightDetails}`}>
                                            <div className={`${styles.flightInfo}`}>
                                                <p className='text-start'><span>Date</span><br />
                                                    {
                                                        datas.airLinePnrData.flights.map((flightsData, index) => (
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
                                                        datas.airLinePnrData.flights.map((flightsData, index) => (
                                                            <span key={index}>
                                                                Departs:    {flightsData.departureTime} <br></br>
                                                                Arrival:  {flightsData.arrivalTime} <br></br>
                                                            </span>
                                                        ))
                                                    }
                                                    {/* <span>09:40</span> */}
                                                </p>
                                            </div>
                                            <div className={`${styles.flightInfo}`}>
                                                <p className='text-start'><span>Flight Info</span><br />
                                                    {
                                                        datas.airLinePnrData.flights.map((flightsData, index) => (
                                                            <span key={index}> Departs: {flightsData.fromAirportCode}
                                                                <br></br>
                                                                Arrival: {flightsData.toAirportCode}<br></br>
                                                            </span>
                                                        ))
                                                    }

                                                    {/*  <span>Departs DAC</span><br />
                                        <span>Arrival CXB</span> */}
                                                </p>
                                            </div>
                                            <div className={`${styles.flightInfo}`}>
                                                <p className='text-start'><span>Flight Number</span><br />

                                                    {
                                                        datas.airLinePnrData.flights.map((flightsData, index) => (
                                                            <span key={index}>
                                                                {flightsData.airlineCode} {flightsData.flightNumber} ({flightsData.fromAirportCode}-{flightsData.toAirportCode})<br></br>
                                                            </span>
                                                        ))
                                                    }
                                                    {/*  <span>BS143 (DAC-CXB)</span><br /><br />
                                        <span>Stops: 0</span> */}
                                                </p>
                                            </div>
                                            <div className={`${styles.flightInfo}`}>
                                                <p className='text-start'><span>Baggage Allowance</span><br />
                                                    {
                                                        datas.airLinePnrData.fareOffers.map((fareOffersData, index) => (
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
                                </div>

                            ))
                        }
                        <div style={{ textAlign: 'center', paddingBottom: '20px' }}>
                            <p>Page {pageNumber} of {privateData?.totalPages}</p>
                            <select value={limitSize} onChange={(e) => handleLimitChange(Number(e.target.value))}>
                                {limitOptions.map((option) => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                            <ul style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', listStyle: 'none', padding: 0, margin: 0 }}>
                                {pageNumbers.map((pageNumber) => (
                                    <li key={pageNumber} >
                                        <button
                                            style={{
                                                marginRight: '10px', padding: '5px',
                                                background: selectedPage === pageNumber ? 'rgb(0 51 102)' : 'none',
                                                color: selectedPage === pageNumber ? 'white' : 'black',
                                            }}
                                            onClick={() => handlePageChange(pageNumber)}>
                                            {pageNumber}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
            }
        </>
    );
};

export default AllBookingList;