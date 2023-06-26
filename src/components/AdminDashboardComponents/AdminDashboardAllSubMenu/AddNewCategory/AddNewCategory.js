import Delete from '@mui/icons-material/Delete';
import { Box, Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import AssignmentIcon from "@mui/icons-material/Assignment";
import products from '../../../../assests/data/products.json';
import styles from './AddNewCategory.module.css';
import swal from 'sweetalert';




function Row(props) {

    const { product, serial, reload } = props;
    // const dispatch = useDispatch();

    /*   const handleDelete = (id) => {
          Swal.fire({
              title: 'Do you want to delete the category?',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Delete"
          })
              .then(result => {
                  if (result.isConfirmed) {
                      dispatch(deleteCategoryFromDb(id));
                      Swal.fire('Successfull', 'Category deleted!', 'success');
                      setReload(!reload)
                  }
              })
      }; */



    return (
        <React.Fragment>
            <TableRow
                className={`${styles.tableHover}`}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    {serial + 1}
                </TableCell>
                <TableCell align="center">{product.name}</TableCell>
                <TableCell align="center">
                    {/* <EditIcon className={`${styles.editIcon}`} /> */}
                    <Delete
                        // onClick={() => handleDelete(category?._id)}
                        className={`${styles.deleteIcon}`}
                    />
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const AddNewCategory = () => {
    /*  const dispatch = useDispatch();
     let reload = useSelector((state) => state.entities.category.reload);
     const categories = useSelector((state) => state.entities.category.categories);
 
     useEffect(() => {
         dispatch(loadCategories());
     }, [reload, dispatch]); */

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    /* const onSubmit = (data) => {
        dispatch(saveCategoryToDb(data));

        dispatch(setReload({ reload: !reload }));
        Swal.fire("Success", "New Category Added", "success");

        reset();
    }; */

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const showAlert = () => {
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            button: "Ok",
        });
    };

    /*     const showAlert2 = () => {
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this imaginary file!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        swal("Poof! Your imaginary file has been deleted!", {
                            icon: "success",
                        });
                    } else {
                        swal("Your imaginary file is safe!");
                    }
                });
        } */

    return (
        <Container sx={{ width: "100%", mb: 5 }}>
            <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
                <Typography>
                    <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
                </Typography>
                <Typography>
                    <span style={{ fontSize: "26px" }}>Product</span>{" "}
                    <br /> <span style={{ color: "#969494" }}>Product Category</span>
                </Typography>
            </Box>

            <Box className={`${styles.tableContainer}`}>
                <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
                    Add New Category
                </Typography>
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
                                                    Category{" "}
                                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Category"
                                                    style={{ background: "#E5E5E5" }}
                                                    {...register("name", { required: true })}
                                                />
                                                {errors.name && (
                                                    <span className="text-danger">
                                                        Please enter category name.
                                                    </span>
                                                )}
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
                                                    Details
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    rows="1"
                                                    placeholder="Details"
                                                    style={{ background: "#E5E5E5" }}
                                                    {...register("details", { required: false })}
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row gx-3 mb-3">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-1">
                                        <div className="p-3">
                                            <div>
                                                <Box sx={{ textAlign: "center" }}>
                                                    {/* <input
                                                        type="reset"
                                                        className={`${"btn"} ${styles.resetBtn}`}
                                                        style={{ background: "#251D58", color: "#fff" }}
                                                        value="Reset"
                                                    /> */}
                                                    <Button
                                                        type='reset'
                                                        sx={{ marginRight: '5px' }}
                                                        variant="contained" color="error">Reset</Button>
                                                    {/* <input
                                                        onClick={showAlert}
                                                        type="submit"
                                                        className={`${"btn"} ${styles.saveBtn}`}
                                                        style={{ background: "#251D58", color: "#fff" }}
                                                        value="Save"
                                                    /> */}
                                                    <Button onClick={showAlert} variant="contained" color='success'>Save</Button>
                                                </Box>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Box>

            <Box sx={{ marginTop: 5 }} className={`${styles.tableContainer}`}>
                <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
                    Manage Category
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
                        <TableBody>
                            {products
                                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((product, index) => (
                                    <Row
                                        key={product._id}
                                        product={product}
                                        serial={index}
                                    // loading={loading}
                                    // reload={reload}
                                    // setReload={setReload}
                                    />
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Typography className="mt-3">
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 15]}
                        component="div"
                        count={products.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Typography>
            </Box>
        </Container>
    );
};

export default AddNewCategory;