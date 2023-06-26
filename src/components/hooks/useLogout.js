import axios from '../../api/axios';
import useAdminAuth from './useAdminAuth';

const useLogout = () => {
    const { setAuth } = useAdminAuth();
    const logout = async () => {
        setAuth({});
        try {
            const response = await axios('/api/v1/adminUser/logout', {
                withCredentials: true
            });
            console.log(response)
        } catch (err) {
            console.error(err);
        }
    }
    // localStorage.setItem("persist", false);
    return logout;
};

export default useLogout;