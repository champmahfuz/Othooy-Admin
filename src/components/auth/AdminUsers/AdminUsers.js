import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
// import useRefreshToken from '../../../hooks/useRefreshToken';
import { Button } from '@mui/material';
import useAdminAuth from '../../../hooks/useAdminAuth';

const AdminUsers = () => {
    const [users, setUsers] = useState();
    const { auth } = useAdminAuth();
    // const refresh = useRefreshToken();
    const axiosPrivate = useAxiosPrivate();
    console.log(auth)
    const navigate = useNavigate();
    const location = useLocation
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get('/api/v1/managetickets', {
                    signal: controller.signal
                });
                // console.log(response.data);
                isMounted && setUsers(response.data);
            } catch (err) {
                console.error(err);
                navigate('/login', { state: { from: location }, replace: true });
            }
        }
        getUsers();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [axiosPrivate, location, navigate])
    return (
        <article>
            <h2>Users List</h2>
            {users?.length
                ? (
                    <ul>
                        {users?.map((user, i) => <li key={i}>{user?.name}

                        </li>
                        )}
                    </ul>
                ) : <p>No user to display</p>
            }
            {/* <Button onClick={ () => refresh() }>Refresh</Button> */}
        </article>
    );
};

export default AdminUsers;