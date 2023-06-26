/* import React, { useState } from 'react';
import styles from './ChangePasswordList.module.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const ChangePasswordList = () => {
    const [state, setStete] = useState(false);
    const toggleBtn = () => {
        setStete(prevStete => !prevStete);
    }
    return (
        <div>
            <div className={`${styles.inputElement}`}>
                <input className={`${styles.passwordField}`} type={state ? 'text' : 'password'} placeholder='Enter Password'

                />
                <button onClick={toggleBtn} className={`${styles.btn}`}>
                    {state ? <VisibilityOffIcon />
                        : <VisibilityIcon />
                    }
                </button>
            </div>
        </div>
    );
};

export default ChangePasswordList; */


import { Button, Container } from '@mui/material';
import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import styles from './ChangePsswordList.module.css';

const ChangePasswordList = () => {
    const [state, setStete] = useState(false);
    const [state2, setStete2] = useState(false);
    const toggleBtn1 = () => {
        setStete(prevStete1 => !prevStete1);
    }
    const toggleBtn2 = () => {
        setStete2(prevStete2 => !prevStete2);
    }
    return (
        <>
            <Container className={`${'my-5'} ${styles.body1}`}>
                <div className={`${styles.loginContainer}`}>
                    <div className={`${styles.loginBox}`}>
                        <div className={`${styles.left1}`}></div>
                        <div className={`${styles.right1}`}>
                            <h4>Change Password</h4>
                            <form >
                                <input
                                    type="email" className={`${styles.field}`} placeholder="Your Email " />
                                <p>We'll never share your email with anyone else.</p>
                                <div style={{ display: 'flex' }}>
                                    <input
                                        type={state ? 'text' : 'password'} className={`${styles.field}`} placeholder="Old Password" />
                                    <Button onClick={toggleBtn1} size="small" sx={{ ml: '-70px', mt: '-8px' }} >
                                        {state ? <VisibilityOffIcon />
                                            : <VisibilityIcon />
                                        }
                                    </Button>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <input
                                        type={state2 ? 'text' : 'password'} className={`${styles.field}`} placeholder="New Password" />
                                    <Button onClick={toggleBtn2} sx={{ ml: '-70px', mt: '-8px' }} >
                                        {state2 ? <VisibilityOffIcon />
                                            : <VisibilityIcon />
                                        }
                                    </Button>
                                </div>
                            </form>
                            <div style={{ marginTop: '10px' }}>
                                <Button sx={{ mr: '10px' }} variant="contained" >
                                    Save
                                </Button>
                                <Button variant="contained" >
                                    Close
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default ChangePasswordList;