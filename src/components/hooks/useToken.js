import { useEffect } from "react";
import { useState } from "react"

const REACT_APP_NODE_API_baseURL = process.env.REACT_APP_NODE_API_baseURL;

const useToken = user => {
    const [token, setToken] = useState('');
    // console.log(token)
    useEffect(() => {
        // console.log('user inside useToken', user);
        const email = user?.user?.email;
        const currentUser = { email: email }
        // console.log(currentUser)
        if (email) {
            //fetching the url problem,data dont send to database
            fetch(`${REACT_APP_NODE_API_baseURL}/api/othooyUsers/login/${email}`, {
                method: 'put',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log('data inside useToken', data);
                    const accessToken = data.token;
                    // localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })
        }
    }, [user]);
    return [token];
}

export default useToken;