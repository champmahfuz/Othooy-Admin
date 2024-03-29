import { Box, Button, Collapse, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import styles from './ProfitReport.module.css';
import suppliers from '../../../../assests/data/supplier.json';
import AssignmentIcon from "@mui/icons-material/Assignment";
import React from 'react';

function Row(props) {
    const { supplier } = props;

    return (
        <React.Fragment>
            <TableRow
                className={`${styles.tableHover}`}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
                <TableCell align="center">2022 - FEB - 13</TableCell>
                <TableCell align="center">{supplier._id}</TableCell>
                <TableCell align="center">{supplier.balance}</TableCell>
                <TableCell align="center">{0}</TableCell>
                <TableCell align="center">BDT 100</TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const ProfitReport = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <Container sx={{ width: "100%", mb: 5 }}>
            <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
                <Typography>
                    <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
                </Typography>
                <Typography>
                    <span style={{ fontSize: "26px" }}>
                        Profit Report (Invoice Wise)
                    </span>{" "}
                    <br />{" "}
                    <span style={{ color: "#969494" }}>
                        Total profit report
                    </span>
                </Typography>
            </Box>
            <Box sx={{ textAlign: "left", mb: 1 }}>
                <Button className={`${styles.btn}`} onClick={() => setOpen(!open)}>
                    Filter
                </Button>
                <Collapse
                    in={open}
                    sx={{ mt: 2, mb: 2 }}
                    timeout="auto"
                    unmountOnExit
                    className={`${styles.tableContainer}`}
                >
                    <form >

                        <TextField id="date" label="Start Date" type="date" sx={{ mr: 2 }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            required
                        />
                        <TextField id="date" label="End Date" type="date" sx={{ mr: 2 }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            required
                        />
                        <Button className={`${styles.searchBtn}`} type='submit'>Search</Button>
                    </form>
                </Collapse>
            </Box>
            <Box className={`${styles.tableContainer}`}>
                <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
                    Profit Report (Invoice Wise)
                </Typography>
                <hr />
                <TableContainer
                    component={Paper}
                    sx={{ border: 1, borderColor: "grey.300" }}
                >
                    <Table aria-label="simple table">
                        <TableHead className={`${styles.tableHeader}`}>
                            <TableRow>
                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Sales Date
                                </TableCell>
                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Sell No
                                </TableCell>
                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Supplier Amount
                                </TableCell>
                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    My Sale Amount
                                </TableCell>
                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Total Profit
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {suppliers.map((supplier) => (
                                <Row key={supplier._id} supplier={supplier} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Container>
    );
};

export default ProfitReport;