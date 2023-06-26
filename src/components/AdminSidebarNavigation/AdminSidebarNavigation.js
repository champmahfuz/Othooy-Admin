import { Accordion, AccordionSummary, Box, Button } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import SpeedIcon from "@mui/icons-material/Speed";
import AccordionDetails from "@mui/material/AccordionDetails";
import Filter1Icon from "@mui/icons-material/Filter1";
import Filter2Icon from "@mui/icons-material/Filter2";
import Filter3Icon from "@mui/icons-material/Filter3";
import Filter4Icon from "@mui/icons-material/Filter4";
import Filter5Icon from "@mui/icons-material/Filter5";
import Filter6Icon from "@mui/icons-material/Filter6";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import LogoutIcon from "@mui/icons-material/Logout";
import Inventory2Icon from '@mui/icons-material/Inventory2';
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import FaceIcon from '@mui/icons-material/Face';
import PersonIcon from '@mui/icons-material/Person';
import ReportIcon from '@mui/icons-material/Report';
import PaidIcon from '@mui/icons-material/Paid';
import './AdminSidebarNavigation.css'



const AdminSidebarNavigation = () => {
    // const { logout } = useAuth();
    // const [admin, setAdmin] = React.useState(true);
    // block comment start
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    // block comment end
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
                    TransitionProps={{ unmountOnExit: true }}
                    sx={{
                        background: "#003366 !important",
                        boxShadow: "none !important",
                    }}
                >
                    <AccordionSummary>
                        <NavLink
                            activeclassName="active"
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/`}
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

                {/* Profile nav menu start */}
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
                        to={`/admin/adminProfile`}
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
                {/* Profile nav menu end */}

                {/*======= Sell Nav Menu Start ======*/}
                <Accordion
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
                            className={`${'styles.active'}`}
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/admin/AllBooking`}
                        >
                            <Button
                                // style={ { display: isOpen ? "block" : "none" } }
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> All Booking
                            </Button>
                        </NavLink>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/admin/MyBooking`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> My Booking
                            </Button>
                        </NavLink>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/admin/FindByPnr`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter3Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Find By Pnr
                            </Button>
                        </NavLink>
                        <NavLink
                            // style={ { textDecoration: "none", marginTop: "0 !important" } }
                            to={`/admin/AddNewPackage`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter4Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Add New Category
                            </Button>
                        </NavLink>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/admin/AddNewInvoice`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter5Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Add New Invoice
                            </Button>
                        </NavLink>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/admin/ManageInvoice`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter6Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage invoice

                            </Button>
                        </NavLink>
                    </AccordionDetails>
                </Accordion>
                {/*======= Sell Nav Menu End ======*/}

                {/* Package nav menu starts */}
                <Accordion
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
                            <Inventory2Icon sx={{ mr: 2, fontSize: "24px" }} />
                            Package
                        </Button>
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: "#012C56 !important" }}>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/admin/Category`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Category
                            </Button>
                        </NavLink>
                        {/* <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/admin/PurchasePackage`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Purchase
                            </Button>
                        </NavLink> */}
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/admin/PurchasePackage`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Purchase Products
                            </Button>
                        </NavLink>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/admin/UploadPackage`}
                        >
                            {/*   to={`/admin/AddNewPackageProduct`} */}
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter3Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Add Package
                            </Button>
                        </NavLink>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/admin/ManagePackage`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter4Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage Package
                            </Button>
                        </NavLink>
                    </AccordionDetails>
                </Accordion>
                {/* Package nav menu ends */}

                {/* Customer nav menu starts */}
                <Accordion
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
                            <FaceIcon sx={{ mr: 2, fontSize: "24px" }} />
                            Customer
                        </Button>
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: "#012C56 !important" }}>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/admin/AddNewCustomer`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Add Customer
                            </Button>
                        </NavLink>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/admin/ManageCustomer`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage Customer
                            </Button>
                        </NavLink>


                    </AccordionDetails>
                </Accordion>
                {/* Customer nav menu end */}



                {/* My Account nav menu start */}
                <Accordion
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
                            <CurrencyExchangeIcon sx={{ mr: 2, fontSize: "24px" }} />
                            Accounts
                        </Button>
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: "#012C56 !important" }}>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/admin/ManagePayment`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Payment
                            </Button>
                        </NavLink>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/admin/ManageTransaction`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage Transaction
                            </Button>
                        </NavLink>


                    </AccordionDetails>
                </Accordion>
                {/* My Account nav menu end */}

                {/* My Report nav starts */}
                <Accordion
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
                            <ReportIcon sx={{ mr: 2, fontSize: "24px" }} />
                            Report
                        </Button>
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: "#012C56 !important" }}>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/admin/PurchaseReport`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Purchase Report
                            </Button>
                        </NavLink>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/admin/SalesReport`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Sales Report
                            </Button>
                        </NavLink>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/admin/ProfitReport`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter3Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Profit Report
                            </Button>
                        </NavLink>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/admin/TodaysReport`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter4Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Todays Report
                            </Button>
                        </NavLink>
                    </AccordionDetails>
                </Accordion>
                {/* My Report nav ends */}

                {/* My Expenxe nav menu starts */}
                <Accordion
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
                            <PaidIcon sx={{ mr: 2, fontSize: "24px" }} />
                            Expense
                        </Button>
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: "#012C56 !important" }}>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/admin/ManageExpense`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage Expense
                            </Button>
                        </NavLink>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/admin/AddExpense`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Add Expense
                            </Button>
                        </NavLink>


                    </AccordionDetails>
                </Accordion>
                {/* My Expenxe nav menu ends */}

                {/* Seetings nav menu starts here  */}
                <Accordion
                    TransitionProps={{ unmountOnExit: true }}
                    sx={{
                        background: "#003366 !important",
                        boxShadow: "none !important",
                        marginTop: "0 !important",
                        // marginLeft: "15px"
                    }}
                >
                    <NavLink
                        style={{ textDecoration: "none", marginTop: "0 !important" }}
                        to={`/admin/adminSeetings`}
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
                </Accordion>

                {/* test  start */}
                {/*======= Logout Nav Menu Start ======*/}

                {/* test end */}
                {/* Seetings nav menu ends here  */}

                {/* My Profile nav menu start */}

                {/* My Profile nav menu end */}


                {/*======= Logout Nav Menu Start ======*/}
                <Accordion
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
                            to="/"
                        >
                            <Button

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
                {/*======= Logout Nav Menu End ======*/}
            </>

        </Box>
    );
};

export default AdminSidebarNavigation;