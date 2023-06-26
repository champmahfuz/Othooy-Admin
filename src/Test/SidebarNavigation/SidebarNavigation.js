import React, { useState } from 'react';
import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import SpeedIcon from "@mui/icons-material/Speed";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import HikingIcon from '@mui/icons-material/Hiking';
import NoteIcon from '@mui/icons-material/Note';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import ReviewsIcon from '@mui/icons-material/Reviews';
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import './SidebarNavigation.css';
import useAdminAuth from '../../components/hooks/useAdminAuth';

const SidebarNavigation = () => {
    const { logout, admin } = useAdminAuth();
    return (
        <Box
            sx={{
                background: "#003366 !important",
                color: "#fff !important",
            }}
        >

            <>
                {/*======= Dashboard Nav Menu Start ======*/}
                <Accordion
                    // TransitionProps={{ unmountOnExit: true }}
                    sx={{
                        background: "#003366 !important",
                        boxShadow: "none !important",
                    }}
                >
                    <AccordionSummary>
                        <NavLink
                            activeclassName="active"
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/home`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "300",
                                    fontSize: "14px",
                                }}
                            >
                                <SpeedIcon sx={{ mr: 2, fontSize: "24px" }} />
                                Home
                            </Button>
                        </NavLink>
                    </AccordionSummary>
                </Accordion>
                {/*======= Dashboard Nav Menu End ======*/}

                {/*======= Sell Nav Menu Start ======*/}
                {/* <Accordion
                    TransitionProps={{ unmountOnExit: true }}
                    sx={{
                        background: "#003366 !important",
                        boxShadow: "none !important",
                    }}
                >
                    <AccordionSummary
                        expandIcon={
                            <ArrowBackIosNewIcon
                                sx={{ color: "#fff !important", fontSize: "12px" }}
                            />
                        }
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        sx={{
                            "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                                transform: "rotate(-90deg)",
                                marginBottom: 0,
                            },
                        }}
                    >
                        <Button
                            sx={{
                                color: "#fff !important",
                                textTransform: "capitalize",
                                fontWeight: "300",
                                fontSize: "16px",
                            }}
                        >
                            <PointOfSaleIcon sx={{ mr: 2, fontSize: "24px" }} />
                            Sell
                        </Button>
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: "#012C56 !important" }}>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/dashboard/add-new-invoice`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Add New
                                Invoice
                            </Button>
                        </NavLink>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/userDashboardHomeV1/invoice`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage
                                Invoice
                            </Button>
                        </NavLink>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/dashboard/pos`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "uppercase",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter3Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> POS
                            </Button>
                        </NavLink>
                    </AccordionDetails>
                </Accordion> */}
                {/*======= Sell Nav Menu End ======*/}

                {/* My Profile nav menu start */}
                <Accordion
                    // TransitionProps={{ unmountOnExit: true }}
                    sx={{
                        background: "#003366 !important",
                        boxShadow: "none !important",
                        marginTop: "0 !important",
                        marginLeft: "15px"
                    }}
                >
                    {/* <AccordionSummary> */}
                    <NavLink
                        style={{ textDecoration: "none", marginTop: "0 !important" }}
                        to={`/user/profile`}
                    >
                        <Button
                            sx={{
                                color: "#fff !important",
                                textTransform: "capitalize",
                                fontWeight: "300",
                                fontSize: "16px",
                            }}
                        >
                            <PersonIcon sx={{ mr: 2, fontSize: "24px" }} />
                            My Profile
                        </Button>
                    </NavLink>
                    {/* </AccordionSummary> */}
                </Accordion>
                {/* added comment */}
                {/* My Profile nav menu end */}


                {/* Make Admin start */}
                {/* {admin && <Accordion
                    TransitionProps={{ unmountOnExit: true }}
                    sx={{
                        background: "#003366 !important",
                        boxShadow: "none !important",
                        marginTop: "0 !important",
                    }}
                >
                    <AccordionSummary>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/user/makeAdmin`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "300",
                                    fontSize: "16px",
                                }}
                            >
                                <PersonIcon sx={{ mr: 2, fontSize: "24px" }} />
                                Make Admin
                            </Button>
                        </NavLink>
                    </AccordionSummary>
                </Accordion>} */}
                {admin &&
                    <Accordion
                        // TransitionProps={{ unmountOnExit: true }}
                        sx={{
                            background: "#003366 !important",
                            boxShadow: "none !important",
                            marginTop: "0 !important",
                        }}
                    >
                        <AccordionSummary>
                            <NavLink
                                style={{ textDecoration: "none", marginTop: "0 !important" }}
                                to={`/user/makeAdmin`}
                            >
                                <Button
                                    sx={{
                                        color: "#fff !important",
                                        textTransform: "capitalize",
                                        fontWeight: "300",
                                        fontSize: "16px",
                                    }}
                                >
                                    <PersonIcon sx={{ mr: 2, fontSize: "24px" }} />
                                    Make Admin
                                </Button>
                            </NavLink>
                        </AccordionSummary>
                    </Accordion>
                }
                {/* Make Admin end */}

                {/* My treveller nav menu start */}
                <Accordion
                    // TransitionProps={{ unmountOnExit: true }}
                    sx={{
                        background: "#003366 !important",
                        boxShadow: "none !important",
                        marginLeft: "15px",
                        marginTop: "15px!important",
                    }}
                >
                    {/* <AccordionSummary> */}
                    <NavLink
                        style={{ textDecoration: "none", marginTop: "0 !important" }}
                        to={`/user/traveller`}
                    >
                        <Button
                            sx={{
                                color: "#fff !important",
                                textTransform: "capitalize",
                                fontWeight: "300",
                                fontSize: "16px",
                            }}
                        >
                            <HikingIcon sx={{ mr: 2, fontSize: "24px" }} />
                            My Traveller
                        </Button>
                    </NavLink>
                    {/* </AccordionSummary> */}
                </Accordion>
                {/* My treveller nav menu end */}

                {/* My booking nav menu start */}
                <Accordion
                    // TransitionProps={{ unmountOnExit: true }}
                    sx={{
                        background: "#003366 !important",
                        boxShadow: "none !important",
                        marginTop: "15px !important",
                        marginLeft: "15px",
                    }}
                >
                    {/* <AccordionSummary> */}
                    <NavLink
                        style={{ textDecoration: "none", marginTop: "0 !important" }}
                        to={`/user/MyBooking`}
                    >
                        <Button
                            sx={{
                                color: "#fff !important",
                                textTransform: "capitalize",
                                fontWeight: "300",
                                fontSize: "16px",
                            }}
                        >
                            <NoteIcon sx={{ mr: 2, fontSize: "24px" }} />
                            My Booking
                        </Button>
                    </NavLink>
                    {/* </AccordionSummary> */}
                </Accordion>
                {/* My booking nav menu end */}

                {/* All booking nav menu start */}
                <Accordion
                    // TransitionProps={{ unmountOnExit: true }}
                    sx={{
                        background: "#003366 !important",
                        boxShadow: "none !important",
                        marginLeft: '15px',
                        marginTop: "15px !important",
                    }}
                >
                    {/* <AccordionSummary> */}
                    <NavLink
                        style={{ textDecoration: "none", marginTop: "0 !important" }}
                        to={`/user/AllBooking`}
                    >
                        <Button
                            sx={{
                                color: "#fff !important",
                                textTransform: "capitalize",
                                fontWeight: "300",
                                fontSize: "16px",
                            }}
                        >
                            <NoteAltIcon sx={{ mr: 2, fontSize: "24px" }} />
                            All Booking
                        </Button>
                    </NavLink>
                    {/* </AccordionSummary> */}
                </Accordion>
                {/* All booking nav menu end */}

                {/* Review nav menu start */}
                <Accordion
                    TransitionProps={{ unmountOnExit: true }}
                    sx={{
                        background: "#003366 !important",
                        boxShadow: "none !important",
                        marginLeft: '15px',
                        marginTop: "15px !important",
                    }}
                >
                    {/* <AccordionSummary> */}
                    <NavLink
                        style={{ textDecoration: "none", marginTop: "0 !important" }}
                        to={`/user/Review`}
                    >
                        <Button
                            sx={{
                                color: "#fff !important",
                                textTransform: "capitalize",
                                fontWeight: "300",
                                fontSize: "16px",
                            }}
                        >
                            <ReviewsIcon sx={{ mr: 2, fontSize: "24px" }} />
                            Review
                        </Button>
                    </NavLink>
                    {/* </AccordionSummary> */}
                </Accordion>
                {/* Review nav menu end */}

                {/* Seetings nav menu starts here  */}
                <Accordion
                    // TransitionProps={{ unmountOnExit: true }}
                    sx={{
                        background: "#003366 !important",
                        boxShadow: "none !important",
                        marginLeft: '15px',
                        marginTop: "15px !important",
                    }}
                >
                    {/* <AccordionSummary> */}
                    <NavLink
                        style={{ textDecoration: "none", marginTop: "0 !important" }}
                        to={`/user/Seetings`}
                    >
                        <Button
                            sx={{
                                color: "#fff !important",
                                textTransform: "capitalize",
                                fontWeight: "300",
                                fontSize: "16px",
                            }}
                        >
                            <SettingsApplicationsIcon sx={{ mr: 2, fontSize: "24px" }} />
                            Seetings
                        </Button>
                    </NavLink>
                    {/* </AccordionSummary> */}
                </Accordion>
                {/* Seetings nav menu ends here  */}


                {/*======= Logout Nav Menu Start ======*/}
                <Accordion
                    // TransitionProps={{ unmountOnExit: true }}
                    sx={{
                        background: "#003366 !important",
                        boxShadow: "none !important",

                        marginTop: "15px !important",
                    }}
                >
                    <AccordionSummary>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to="/"
                        >
                            <Button
                                onClick={logout}
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "300",
                                    fontSize: "16px",
                                }}
                            >
                                <LogoutIcon sx={{ mr: 2, fontSize: "24px" }} />
                                LogOut
                            </Button>
                        </NavLink>
                    </AccordionSummary>
                </Accordion>
                {/*======= Test Component Nav Menu End ======*/}
            </>

        </Box>
    );
};

export default SidebarNavigation;