import {useEffect, useState} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json();
                // console.log('after await: ', json);
                setData(json);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        // Cleanup function
        return () => {
            // Cleanup logic if needed
        };
    }, [url]);

    return {data, isLoading, error};
};

export default useFetch;
