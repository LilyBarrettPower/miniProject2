
import { useEffect, useState } from 'react';

function useFetchPopular() {
    // define a custom hook for fetch from the external API 
    const [popularJobs, setPopularJobs] = useState([]);
    // create a state variable popularJobs and initialise as an empty array
    const [loading, setLoading] = useState(true);
    // create a state variable loading and initialise it as true 
    const [error, setError] = useState(null);
    // create a state variable error and initialise it as null 

    useEffect(() => {
        // use the useEffect hook to fetch the data 
        async function fetchPopularJobs() {
            // using an async function to fetch the data
            const cachedData = localStorage.getItem('popularJobs');
            if (cachedData) { //cache the data to localStorage to minimise API calls
                setPopularJobs(JSON.parse(cachedData));
                setLoading(false);
            } else {
                const url = 'https://jsearch.p.rapidapi.com/search?query=popular&page=1&num_pages=1';
                // the URL of the data fetch 
                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '4779b413abmsh963e4efa25ad949p1b333fjsne2f5e8b85f21',
                        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
                    },
                    // define the options for the API request from the API documentation
                };
                try {
                    const response = await fetch(url, options);
                    // send an HTTP GET request to the URL and wait for the response 
                    if (!response.ok) { // if the response status is not ok, throw a new error
                        throw new Error(`API request failed with status ${response.status}`);
                    }
                    const data = await response.json(); // store the response body as JSON in the data variable 
                    setPopularJobs(data); // set popularJobs state variable to the retrieved data
                    localStorage.setItem('popularJobs', JSON.stringify(data));
                    setLoading(false); // set the loading state variable to false 
                } catch (error) {
                    setError(error); //set the error state variable to the error 
                    setLoading(false); //set the loading state variable to false 
                }
            }
        }
        fetchPopularJobs(); // call the fetchPopularJobs function when the component mounts 
    }, []);

    // console.log(popularJobs)
    return { popularJobs, loading, error }; // return an object containing the popularJobs, loading and error variables 
}

export default useFetchPopular;