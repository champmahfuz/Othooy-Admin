import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import useRefreshToken from '../hooks/useRefreshToken';
import useAdminAuth from '../hooks/useAdminAuth';

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const { auth, persist } = useAdminAuth();

    useEffect(() => {
        let isMounted = true;

        const verifyRefreshToken = async () => {
            try {
                await refresh();
            }
            catch (err) {
                console.error(err);
            }
            finally {
                isMounted && setIsLoading(false);
            }
        }

        !auth?.accessToken && persist ? verifyRefreshToken() : setIsLoading(false);

        return () => isMounted = false;
    }, [auth?.accessToken, persist, refresh])

    useEffect(() => {

    }, [isLoading, auth?.accessToken, auth])

    return (
        <>
            {!persist
                ? <Outlet />
                : isLoading
                    ? <Loading />
                    // <p>Loading...</p>
                    : <Outlet />
            }
        </>
    )
}

export default PersistLogin;