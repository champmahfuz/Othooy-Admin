import { Box, Button, Collapse, Container, Paper, Table, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import TableBody from "@mui/material/TableBody";
import { useForm } from "react-hook-form";
import styles from './AddNewInvoice.module.css';
import AssignmentIcon from "@mui/icons-material/Assignment";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from 'react-router-dom';
import Delete from '@mui/icons-material/Delete';

const AddNewInvoice = () => {

    const [productName, setProductName] = useState("");
    const [productId, setProductId] = useState(0);
    const [totalCartn, setTotalCartn] = useState(0);
    const [eachCartn, setEachCartn] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [unit, setUnit] = useState("");
    const [rate, setRate] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [total, setTotal] = useState(0);
    const [totalDiscount, setTotalDiscount] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);
    const [paidAmount, setPaidAmount] = useState(0);
    const [dueAmount, setDueAmount] = useState(0);
    const [products, setProducts] = useState([]);

    const handleEachCartn = (num) => {
        setEachCartn(num);
        setQuantity(totalCartn * num);
    };

    const handleUnitChange = (event) => {
        setUnit(event.target.value);
    };

    const handleRate = (val) => {
        setRate(val);
        const newTotal = quantity * val;
        setTotal(newTotal);
        setGrandTotal(grandTotal + newTotal);
    };

    const handleDiscount = (val) => {
        setDiscount(val);
        const newTotal = quantity * rate - val;
        setTotal(newTotal);
        setTotalDiscount(parseInt(totalDiscount) + parseInt(val));
        setGrandTotal(grandTotal - val);
    };

    const handlePaidAmount = (amount) => {
        setPaidAmount(amount);
        setDueAmount(grandTotal - amount);
    };

    const [open, setOpen] = React.useState(false);
    const [toggle, setToggle] = useState(false);
    const [tableRow, setTableRow] = useState(1);

    const handleNewProduct = (row) => {
        setTableRow(row);
        const newProduct = {
            p_name: productName,
            p_id: productId,
            t_cartn: totalCartn,
            e_cartn: eachCartn,
            qty: quantity,
            unit: unit,
            rate: rate,
            discount: discount,
            total: quantity * rate - discount,
        };
        setProducts([...products, newProduct]);
    };

    const handleLastProduct = () => {
        const newProduct = {
            p_name: productName,
            p_id: productId,
            t_cartn: totalCartn,
            e_cartn: eachCartn,
            qty: quantity,
            unit: unit,
            rate: rate,
            discount: discount,
            total: quantity * rate - discount,
        };
        setProducts([...products, newProduct]);
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const {
            barcode,
            supplierName,
            contactNo,
            company,
            supplierEmail,
            supplierAddress,
            date,
        } = data;

        const supplierInvoice = {
            barcode,
            contactNo,
            date,
            products: products,
            totalDiscount: totalDiscount,
            grandTotal: grandTotal,
            paidAmount: paidAmount,
        };

        if (supplierName) {
            const supplierDetails = {
                name: supplierName,
                email: supplierEmail,
                company: company,
                companyAddress: supplierAddress,
            };

        }



    };

    const buttonToggle = () => {
        setToggle(!toggle);
    };
    return (
        <Container sx={{ width: "100%", mb: 5 }}>
            <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
                <Typography>
                    <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
                </Typography>
                <Typography>
                    <span style={{ fontSize: "26px" }}>
                        Sell
                    </span>{" "}
                    <br /> <span style={{ color: "#969494" }}>Add New Invoice</span>
                </Typography>
            </Box>

            <Box sx={{ textAlign: "right", my: 2 }}>
                <NavLink
                    to="/dashboardhome/manageInvoice"
                    style={{ textDecoration: "none" }}
                >
                    <Button className={`${styles.paymentBtn}`} startIcon={<MenuIcon />}>
                        Manage Invoice
                    </Button>
                </NavLink>
            </Box>

            <Box className={`${styles.paymentContainer}`}>
                <Typography sx={{ fontWeight: "bold", textAlign: "start" }}>
                    New Purchase Invoice
                </Typography>
                <hr />
            </Box>

            <form className={`${"shadow"}`}>
                <Box className={`${styles.tableContainer}`}>
                    <Box className={`${styles.addSupplierField} ${"pb-4"}`}>
                        <Typography
                            sx={{
                                textAlign: "start",
                                fontWeight: "bold",
                                fontSize: "14px",
                                marginBottom: "12px !important",
                            }}
                        >
                            Barcode<span>*</span>
                        </Typography>

                        <TextField
                            size="small"
                            id="outlined-basic"
                            sx={{ width: "45%", backgroundColor: "white" }}
                            placeholder="Barcode or QR code scan here"
                            label="Barcode/QR Code"
                            variant="outlined"
                            {...register("barcode", { required: true })}
                        />
                    </Box>

                    <Box className={`${styles.addSupplierField} ${"pb-4"}`}>
                        <Typography
                            sx={{
                                textAlign: "start",
                                fontWeight: "bold",
                                fontSize: "14px",
                                marginBottom: "12px !important",
                            }}
                        >
                            Supplier Contact no.<span>*</span>
                        </Typography>

                        <TextField
                            id="outlined-basic"
                            size="small"
                            sx={{ width: "45%", backgroundColor: "white" }}
                            label="Contact no."
                            variant="outlined"
                            {...register("contactNo", { required: true })}
                        />
                        <Button
                            sx={{ borderRadius: 0, marginTop: "2px" }}
                            onClick={() => {
                                setOpen(!open);
                                buttonToggle();
                            }}
                            className={`${styles.paymentBtn}`}
                        >
                            {toggle ? "Old Supplier" : "New Supplier"}
                        </Button>
                    </Box>

                    <Collapse in={open} timeout="auto">
                        <Box sx={{ width: "45%", display: "flex", flexContent: "between" }}>
                            <Box className={`${styles.addSupplierField} ${"pb-4, me-2"}`}>
                                <Typography
                                    sx={{
                                        textAlign: "start",
                                        fontWeight: "bold",
                                        fontSize: "14px",
                                        marginBottom: "12px !important",
                                    }}
                                >
                                    Supplier Name
                                </Typography>

                                <TextField
                                    size="small"
                                    id="outlined-basic"
                                    sx={{ backgroundColor: "white" }}
                                    label="Supplier Name"
                                    variant="outlined"
                                    {...register("supplierName", { required: false })}
                                />
                            </Box>
                            <Box className={`${styles.addSupplierField} ${"pb-4, me-2"}`}>
                                <Typography
                                    sx={{
                                        textAlign: "start",
                                        fontWeight: "bold",
                                        fontSize: "14px",
                                        marginBottom: "12px !important",
                                    }}
                                >
                                    Supplier Email
                                </Typography>

                                <TextField
                                    size="small"
                                    id="outlined-basic"
                                    sx={{ backgroundColor: "white" }}
                                    label="Supplier Email"
                                    variant="outlined"
                                    {...register("supplierEmail")}
                                />
                            </Box>
                            <Box className={`${styles.addSupplierField} ${"pb-4, me-2"}`}>
                                <Typography
                                    sx={{
                                        textAlign: "start",
                                        fontWeight: "bold",
                                        fontSize: "14px",
                                        marginBottom: "12px !important",
                                    }}
                                >
                                    Company Name
                                </Typography>

                                <TextField
                                    size="small"
                                    id="outlined-basic"
                                    sx={{ backgroundColor: "white" }}
                                    label="Company Name"
                                    variant="outlined"
                                    {...register("company", { required: false })}
                                />
                            </Box>
                        </Box>

                        <Box className={`${styles.addSupplierField} ${"pb-4"}`}>
                            <Typography
                                sx={{
                                    textAlign: "start",
                                    fontWeight: "bold",
                                    fontSize: "14px",
                                    marginBottom: "12px !important",
                                }}
                            >
                                Address
                            </Typography>

                            <TextField
                                size="small"
                                id="outlined-basic"
                                sx={{ width: "45%", backgroundColor: "white" }}
                                label="Supplier Address"
                                variant="outlined"
                                {...register("supplierAddress")}
                            />
                        </Box>
                    </Collapse>
                    <Box className={`${styles.addSupplierField} ${"pb-4"}`}>
                        <Typography
                            sx={{
                                textAlign: "start",
                                fontWeight: "bold",
                                fontSize: "14px",
                                marginBottom: "10px !important",
                            }}
                        >
                            Date<span>*</span>
                        </Typography>

                        <input
                            type="date"
                            {...register("date", { required: true })}
                            style={{
                                width: "45%",
                                padding: "10px",
                                backgroundColor: "white",
                                border: "1px solid #aeaeae",
                                borderRadius: "3px",
                            }}
                        />
                    </Box>
                    <TableContainer
                        component={Paper}
                        sx={{ border: 1, borderColor: "grey.300" }}
                    >
                        <Table aria-label="simple table">
                            <TableHead className={`${styles.tableHeader}`}>
                                <TableRow>
                                    <TableCell
                                        className={`${styles.tableCell}`}
                                        sx={{
                                            borderRight: "1px solid rgba(224, 224, 224, 1)",
                                            textAlign: "center",
                                        }}
                                    >
                                        Airlines Details<span>*</span>
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            borderRight: "1px solid rgba(224, 224, 224, 1)",
                                            textAlign: "center",
                                        }}
                                        className={`${styles.tableCell}`}
                                    >
                                        Available Quantity
                                    </TableCell>

                                    <TableCell
                                        align="center"
                                        sx={{
                                            borderRight: "1px solid rgba(224, 224, 224, 1)",
                                            textAlign: "center",
                                        }}
                                        className={`${styles.tableCell}`}
                                    >
                                        Quantity
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            borderRight: "1px solid rgba(224, 224, 224, 1)",
                                            textAlign: "center",
                                        }}
                                        className={`${styles.tableCell}`}
                                    >
                                        Price<span>*</span>
                                    </TableCell>

                                    <TableCell
                                        align="center"
                                        sx={{
                                            borderRight: "1px solid rgba(224, 224, 224, 1)",
                                            textAlign: "center",
                                        }}
                                        className={`${styles.tableCell}`}
                                    >
                                        Total
                                    </TableCell>

                                    <TableCell align="center" className={`${styles.tableCell}`}>
                                        Action
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {[...Array(tableRow)].map((elementInArray, index) => {
                                    return (
                                        <TableRow>
                                            <TableCell
                                                align="center"
                                                sx={{
                                                    borderRight: "1px solid rgba(224, 224, 224, 1)",
                                                }}
                                            >
                                                <input
                                                    type="text"
                                                    placeholder="Airlines Name"
                                                    onBlur={(e) => setProductName(e.target.value)}
                                                    style={{
                                                        padding: "8px",
                                                        backgroundColor: "#f1f3f6",
                                                        border: "1px solid #aeaeae",
                                                    }}
                                                />
                                            </TableCell>

                                            <TableCell
                                                align="center"
                                                sx={{
                                                    borderRight: "1px solid rgba(224, 224, 224, 1)",
                                                    p: 1,
                                                }}
                                            >
                                                <input
                                                    {...register("availableQuantity", { required: true })}
                                                    type="number"
                                                    placeholder="Available Qn."
                                                    className={`${styles.tableCellInput}`}
                                                // defaultValue={
                                                //     productNames?.quantity}
                                                />
                                            </TableCell>

                                            <TableCell
                                                align="center"
                                                sx={{
                                                    borderRight: "1px solid rgba(224, 224, 224, 1)",
                                                    p: 1,
                                                }}
                                            >
                                                <input
                                                    {...register("quantity", { required: true })}
                                                    onChange={(e) => setQuantity(e.target.value)}
                                                    type="number"
                                                    placeholder="0"
                                                    className={`${styles.tableCellInput}`}
                                                />
                                            </TableCell>


                                            <TableCell
                                                align="center"
                                                sx={{
                                                    borderRight: "1px solid rgba(224, 224, 224, 1)",
                                                    p: 1,
                                                }}
                                            >
                                                <input
                                                    {...register("price", { required: true })}
                                                    type="number"
                                                    placeholder="Price"
                                                    // defaultValue={productNames?.sellPrice}
                                                    className={`${styles.tableCellInput}`}
                                                />
                                            </TableCell>

                                            <TableCell
                                                align="center"
                                                sx={{
                                                    borderRight: "1px solid rgba(224, 224, 224, 1)",
                                                    p: 1,
                                                }}
                                            >
                                                <input
                                                    type="number"
                                                    placeholder="0"
                                                    value={total}
                                                    className={`${styles.tableCellInput}`}
                                                />
                                            </TableCell>
                                            <TableCell

                                                align="center"
                                            >
                                                {" "}
                                                <Delete
                                                    color="error"
                                                    className={`${styles.deleteIcon}`}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                                <TableRow>
                                    <TableCell />
                                    <TableCell />
                                    <TableCell />
                                    <TableCell />
                                    <TableCell
                                        align="center"
                                        sx={{
                                            borderRight: "1px solid rgba(224, 224, 224, 1)",
                                            textAlign: "right",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Total Discount:
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            borderRight: "1px solid rgba(224, 224, 224, 1)",
                                            p: 1,
                                        }}
                                    >
                                        <input
                                            onChange={(e) => setDiscount(e.target.value)}
                                            type="number"
                                            placeholder="0.00"
                                            className={`${styles.tableCellInput}`}
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell />
                                    <TableCell />
                                    <TableCell />
                                    <TableCell />
                                    <TableCell
                                        align="center"
                                        sx={{
                                            borderRight: "1px solid rgba(224, 224, 224, 1)",
                                            fontWeight: "bold",
                                            textAlign: "right",
                                        }}
                                    >
                                        Grand Total:
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            borderRight: "1px solid rgba(224, 224, 224, 1)",
                                            p: 1,
                                        }}
                                    >
                                        <input
                                            {...register("grandTotal", { required: true })}
                                            type="number"
                                            value={grandTotal}
                                            placeholder="0"
                                            className={`${styles.tableCellInput}`}
                                        />
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell
                                        align="center"
                                        sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                                    >
                                    </TableCell>
                                    <TableCell />
                                    <TableCell />
                                    <TableCell />
                                    <TableCell
                                        align="center"
                                        sx={{
                                            borderRight: "1px solid rgba(224, 224, 224, 1)",
                                            fontWeight: "bold",
                                            p: 1,
                                        }}
                                    >
                                        Paid Amount:
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                                    >
                                        <input
                                            {...register("paidAmount", { required: true })}
                                            type="number"
                                            onChange={(e) => setPaidAmount(e.target.value)}
                                            placeholder="0.00"
                                            className={`${styles.tableCellInput}`}
                                        />
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell
                                        align="center"
                                        sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                                    >
                                        <Button
                                            type="submit"
                                            sx={{ borderRadius: "0" }}
                                            className={`${styles.paymentBtn}`}
                                            variant="contained"
                                            color="success"
                                        >
                                            Submit Items
                                        </Button>
                                    </TableCell>
                                    <TableCell />
                                    <TableCell />
                                    <TableCell />
                                    <TableCell
                                        align="center"
                                        sx={{
                                            borderRight: "1px solid rgba(224, 224, 224, 1)",
                                            fontWeight: "bold",
                                            textAlign: "right",
                                            p: 1,
                                        }}
                                    >
                                        Change Amount:
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                                    >
                                        <input
                                            {...register("changeAmount", { required: true })}
                                            type="number"
                                            placeholder="0"
                                            value={paidAmount - grandTotal}
                                            className={`${styles.tableCellInput}`}
                                        />
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Box>
            </form>
        </Container>
    );
};

export default AddNewInvoice;