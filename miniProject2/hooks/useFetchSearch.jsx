import { useState } from "react";


function useFetchSearch(searchQuery) {
    const [searchResults, setSearchResults] = useState([]);
    // initialise search results as an EMPTY ARRAY (searcvhREsults will be an array!!!)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    // initialise currentPage as 1 
    const resultsPerPage = 10;

//    fetchData is an async function that takes 2 parameters
     const fetchData = async (searchQuery, page) => {
            if (searchQuery) {
                setLoading(true); //to show the API is working

                const offset = (page - 1) * resultsPerPage; // calculate the starting index of the results
                const url = `https://jsearch.p.rapidapi.com/search?query=${searchQuery}&page=1&num_pages=1`;
                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '4779b413abmsh963e4efa25ad949p1b333fjsne2f5e8b85f21',
                        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
                    },
                };
                try {
                    const response = await fetch(url, options);
                    if (!response.ok) {
                        throw new Error(`API request failed with status ${response.status}`);
                    }
                    const data = await response.json();
                    setSearchResults(data.data); // parse the response JSON and set as the searchResults 
                    setLoading(false);
                } catch (error) {
                    console.error('Error searching for jobs:', error);
                    setLoading(false);
                    setError(error);
                }
                await new Promise(resolve => setTimeout(resolve, 2000)); //wait 2 seconds so we dont go over the API calls limit
            } else {
                setSearchResults([]);
            }
     };
    return { searchResults, loading, error, fetchData, currentPage, setCurrentPage };
    // the hook returns an object containing these which can be accessed using the custom hook
};


export default useFetchSearch;