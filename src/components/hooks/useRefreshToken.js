import axios from '../../api/axios';
import useAuth from './useAdminAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.get('/api/v1/adminUser/refresh', {
            withCredentials: true
        });
        setAuth(prev => {
            // console.log(JSON.stringify(prev));
            // console.log(response.data.accessToken);
            // console.log(response.data.roles);
            return {
                ...prev,
                roles: response?.data?.roles,
                accessToken: response.data.accessToken,
                username: response.data.username,
                email: response.data.email
            }
        });
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;