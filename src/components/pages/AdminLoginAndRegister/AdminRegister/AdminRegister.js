import { Alert, Button } from '@mui/material';
import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import styles from './AdminRegister.module.css';
import { Link } from 'react-router-dom';
import axios from '../../../../api/axios';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const REGISTER_URL = '/api/auth/register';

const AdminRegister = () => {


    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // const { registerUser, isLoading, user, authError } = useAuth({})
    const [loginData, setLoginData] = useState({})
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        // console.log(newLoginData);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const v1 = USER_REGEX.test(loginData.username);
        if (loginData.password !== loginData.password2) {
            setErrMsg('Your Password Did not match');
            return;
        } else if (!v1) {
            setErrMsg(`4 to 24 characters. 
            Must begin with a letter. 
            Letters, numbers, underscores, hyphens allowed.`);
            return;
        }

        setErrMsg('');
        setSuccess(false);

        // registerUser(loginData.email, loginData.password);
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({
                    username: loginData.username,
                    email: loginData.email,
                    password: loginData.password,
                }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            // console.log(response?.data);
            // console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            //need value attrib on inputs for this
            // setUser('');
            // setPwd('');
            // setMatchPwd('');
        } catch (err) {
            // console.log(err?.response?.data)
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err?.response?.data?.message === "UsernameTaken") {
                setErrMsg('Username Taken');
            } else if (err?.response?.data?.message === "EmailTaken") {
                setErrMsg('Email Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            // errRef.current.focus();
        }


    };
    return (
        <>
            {/* <Navigation /> */}



            <Container className={`${'my-5'} ${styles.body1}`}>
                <div className={`${styles.registerContainer}`}>
                    <div className={`${styles.registerBox}`}>
                        <div className={`${styles.left1}`}></div>
                        <div className={`${styles.right1}`}>
                            <h2>Register</h2>
                            {errMsg ? <Alert severity="warning">{errMsg}</Alert> : ''}
                            {success ? <Alert severity="success">{`Registration successfull`}</Alert> : ''}
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    className={`${styles.field}`}
                                    placeholder="Username "
                                    onChange={handleOnChange}
                                    id="username"
                                    name="username"
                                />
                                <input
                                    type="email"
                                    className={`${styles.field}`}
                                    placeholder="Your Email "
                                    onChange={handleOnChange}
                                    id="email"
                                    name="email"
                                />
                                {/* <p>We'll never share your email with anyone else.</p> */}
                                <input
                                    type="password"
                                    className={`${styles.field}`}
                                    placeholder="Password"
                                    onChange={handleOnChange}
                                    id="password"
                                    name="password"
                                />
                                <input
                                    type="password"
                                    className={`${styles.field}`}
                                    placeholder="Re-type your Password"
                                    onChange={handleOnChange}
                                    id="password2"
                                    name="password2"
                                />
                                <Button type='submit' variant="contained" color="success">Register</Button>
                                <br />
                                <br />
                                <Link to="/login"><Button variant="text" className={`${styles.linkButton}`}>
                                    Already Register?Please Login
                                </Button></Link>
                            </form>
                            <hr />
                        </div>
                    </div>
                </div>
            </Container>

        </>
    );
};

export default AdminRegister;