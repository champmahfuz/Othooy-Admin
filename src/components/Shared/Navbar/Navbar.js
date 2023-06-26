import {
    AppBar,
    Avatar,
    Box,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logov2 from "../../../assests/img/logo.png"
// import useAuth from "../../../../hooksV1/useAuthV1";
import styles from './Navbar.module.css';
import useAdminAuth from "../../hooks/useAdminAuth";
import useLogout from "../../hooks/useLogout";

const Navbar = () => {

    const location = useLocation();
    const pathDir = location.pathname;

    const { auth } = useAdminAuth();
    const navigate = useNavigate();
    const adminLogout = useLogout();
    const adminSignOut = async () => {
        await adminLogout();
        navigate('/')

    }
    // console.log(auth);


    const pages = [
        "Home",
        "Services",
        "About",
        "Contact",
        "Blogs",

    ];
    // const settings = [""];
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [scrollForAppBar, setScrollForAppBar] = React.useState(true);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    useEffect(() => {
        window.addEventListener('scroll', function () {
            var scrollPosition = window.scrollY;
            if (scrollPosition >= 150) {
                setScrollForAppBar(false) // scrollForAppBar, 
            } else {
                setScrollForAppBar(true) // do something else when scroll position is less than 150px
            }
        });
    }, [])

    return (
        <Box sx={{
            mb: pathDir !== '/' && pathDir !== '/Home' ? '35px' : '0px',
        }}>
            <AppBar
                // scrollForAppBar  
                sx={{
                    background: pathDir === '/' && scrollForAppBar ? 'transparent' :
                        pathDir === '/Home' && scrollForAppBar ? 'transparent' : `url('https://img2.goodfon.com/wallpaper/nbig/e/96/beautiful-clouds-blue-sky.jpg')`,
                    // scrollForAppBar ? "transparent" : 'white',
                    boxShadow: pathDir === '/' && scrollForAppBar ? 'none' :
                        pathDir === '/Home' && scrollForAppBar ? 'none' : 'box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;',
                    // background: "linear-gradient(90deg, #26272B, #26272b)",
                    py: "1px",
                    // backgroundImage: `url('https://img2.goodfon.com/wallpaper/nbig/e/96/beautiful-clouds-blue-sky.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    // height: '20px'


                }}
            >
                <Container>
                    <Toolbar disableGutters sx={{ p: 0, m: 0 }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                        >
                            <Link to="/">
                                <img src={logov2} width="180px" alt="logo" />
                            </Link>
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                            >
                                {/* {pages.map((page) => (
                                    <MenuItem 
                                    key={page} 
                                    onClick={handleCloseNavMenu}>
                                        <Typography 
                                        component="div" 
                                        variant="h6"
                                         sx={{ fontWeight: 600 }}>{page}</Typography>
                                    </MenuItem>
                                ))} */}
                                {pages.map((page) => (
                                    <Typography
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{ ml: 2, color: "red", display: "block" }}
                                    >
                                        <Link
                                            style={{
                                                textDecoration: "none",
                                                color: 'black',
                                                fontWeight: 600
                                                // color: pathDir === '/' && scrollForAppBar ? 'Black' :
                                                //     pathDir === '/Home' && scrollForAppBar ? 'White' : 'green'
                                                //  || '/Home' ? 'black' : 'white'
                                                // scrollForAppBar ? "white" : 'black',
                                                // color: "#019444",
                                            }}
                                            className={`${styles.navbarLink}`}
                                            to={`/${page}`}
                                        >
                                            <span style={{ textDecoration: "none", fontWeight: 600 }}>{page}</span>
                                        </Link>
                                    </Typography>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                        >
                            <Link to='/'>
                                <img src={logov2} width="120px" alt="logo" />
                            </Link>
                        </Typography>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", md: "flex" },
                                justifyContent: { md: "flex-end" },
                            }}
                        >
                            {pages.map((page) => (
                                <Typography
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ ml: 2, color: "white", display: "block" }}
                                >
                                    <Link
                                        style={{
                                            textDecoration: "none",
                                            color: pathDir === '/' && scrollForAppBar ? 'White' :
                                                pathDir === '/Home' && scrollForAppBar ? 'White' : 'green'
                                            //  || '/Home' ? 'black' : 'white'
                                            // scrollForAppBar ? "white" : 'black',
                                            // color: "#019444",
                                        }}
                                        className={`${styles.navbarLink}`}
                                        to={`/${page}`}
                                    >
                                        <span style={{ textDecoration: "none" }}>{page}</span>
                                    </Link>
                                </Typography>
                            ))}

                        </Box>
                        <Typography
                            sx={{
                                ml: 2, color: pathDir === '/' && scrollForAppBar ? 'White' :
                                    pathDir === '/Home' && scrollForAppBar ? 'White' : 'green', display: "block"
                            }}
                        >{auth.username}</Typography>
                        <Box
                            sx={{
                                flexGrow: 0,
                            }}
                        >
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu}>
                                    {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                                    {/* <Avatar alt="Remy Sharp" /> */}
                                    <Avatar alt="Remy Sharp" />

                                </IconButton>
                            </Tooltip>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {/* {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        
                                        <Link
                                            style={{
                                                textDecoration: "none",
                                                color: "black",
                                                fontWeight: 600,
                                            }}
                                            to={`/${setting}`}
                                        >
                                            {setting}
                                        </Link>
                                    </MenuItem>
                                ))} */}

                                {/* {user.email && <MenuItem>
                                    <Link
                                        style={{
                                            textDecoration: "none",
                                            color: "black",
                                            fontWeight: 600,
                                        }}
                                        to="/user/profile"
                                    >
                                        Profile
                                    </Link>
                                </MenuItem>
                                } */}

                                {/* {
                                    user.email && <MenuItem>
                                        <Link
                                            style={ {
                                                textDecoration: "none",
                                                color: "black",
                                                fontWeight: 600,
                                            } }
                                            to="/user/profile"
                                        >
                                            Dashboard
                                        </Link>
                                    </MenuItem>
                                } */}

                                {/* Admin dashboard start here */}
                                {
                                    auth?.username && <MenuItem>
                                        <Link
                                            style={{
                                                textDecoration: "none",
                                                color: "black",
                                                fontWeight: 600,
                                            }}
                                            to="/admin/AddNewInvoice"
                                        >
                                            Admin
                                        </Link>
                                    </MenuItem>
                                }
                                {/* {
                                    auth?.username && <MenuItem>
                                        <Link
                                            style={{
                                                textDecoration: "none",
                                                color: "black",
                                                fontWeight: 600,
                                            }}
                                            onClick={adminSignOut}
                                        >
                                            SignOut
                                        </Link>
                                    </MenuItem>
                                } */}
                                {
                                    auth?.username &&
                                    <MenuItem>
                                        <Typography
                                            sx={{
                                                textDecoration: "none",
                                                color: "black",
                                                fontWeight: 600,
                                            }}
                                            onClick={adminSignOut}>
                                            SignOut
                                        </Typography>
                                    </MenuItem>
                                }


                                {/* {
                                    !auth?.username &&
                                    <MenuItem>
                                        <Link
                                            sx={{
                                                textDecoration: "none",
                                                color: "black",
                                                fontWeight: 600,
                                            }}
                                            to="/login"
                                        >
                                            SignIn
                                        </Link>
                                    </MenuItem>
                                } */}
                                {/* Admin dashboard end here */}

                                {/* Employee dashboard start */}
                                {/*  {
                                    user.email && <MenuItem>
                                        <Link
                                            style={ {
                                                textDecoration: "none",
                                                color: "black",
                                                fontWeight: 600,
                                            }}
                                            to="/employee/Profile"
                                        >
                                            Agent
                                        </Link>
                                    </MenuItem>
                                } */}
                                {/* Employee dashboard end */}


                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

        </Box>
    );
};

export default Navbar;