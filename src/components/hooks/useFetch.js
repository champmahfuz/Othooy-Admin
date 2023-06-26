import { useEffect, useState } from 'react';
import axios from '../../api/axios';
import useAxiosPrivate from './useAxiosPrivate';



const useFetch = (url) => {
    const [data, setData] = useState([])
    const [privateData, setPrivateData] = useState([])
    const [airportData, setAirportData] = useState([])
    const [airlinesIata, setAirlinesIata] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    const axiosPrivate = useAxiosPrivate();

    // API TESTs 
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await axios.get(url);
                setData(response.data);
                window.localStorage.removeItem('time');
                // window.localStorage.removeItem('selectedFlight');

            } catch (err) {
                setError(err)
            }
            setLoading(false);
        };
        fetchData();
        // return () => console.log("first")

    }, [url]);

    const reFetch = async () => {
        setLoading(true)
        try {
            const response = await axios.get(url);
            setData(response.data);

        } catch (err) {
            setError(err)
        }
        setLoading(false);
    };

    // API TESTs 
    useEffect(() => {
        const fetchPrivateData = async () => {
            setLoading(true)
            try {
                const response = await axiosPrivate.get(url);
                setPrivateData(response.data);
                // window.localStorage.removeItem('selectedFlight');

            } catch (err) {
                setError(err)
            }
            setLoading(false);
        };
        fetchPrivateData();
        // return () => console.log("first")

    }, [url]);

    useEffect(() => {
        const airportData = async () => {
            setLoading(true)
            try {
                // const response = await axios.get(`api/airportsearch`);
                const response = await axios.get(`api/v1/airportlists`);
                setAirportData(response?.data);

            } catch (err) {
                setError(err)
            }
            setLoading(false);
        };
        airportData();
        // return () => console.log(airportData)
    }, []);

    useEffect(() => {
        const airlinesIata = async () => {
            setLoading(true)
            try {
                // const response = await axios.get(`api/airlinesIata`);
                const response = await axios.get(`api/v1/airportlists/airlinesIata`);
                setAirlinesIata(response?.data);

            } catch (err) {
                setError(err)
            }
            setLoading(false);
        };
        airlinesIata();
        // return () => console.log(airportData)
    }, []);


    return { data, privateData, loading, error, reFetch, airportData, airlinesIata }
};


export default useFetch;