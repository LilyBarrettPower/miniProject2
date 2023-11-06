
import { useState, useEffect } from "react";

function useFetchSearch(searchQuery) {
    const [searchResults, setSearchResults] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            if (searchQuery) {
                setLoading(true);
                const url = `https://jsearch.p.rapidapi.com/search?query=${searchQuery}&page=1&num_pages=1`;
                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '4779b413abmsh963e4efa25ad949p1b333fjsne2f5e8b85f21',
                        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
                    },
                };
                try {
                    const response = await fetch(url, options);
                    if (!response.ok) {
                        throw new Error(`API request failed with status ${response.status}`);
                    }
                    const data = await response.json();
                    setSearchResults(data.data);
                    setLoading(false);
                } catch (error) {
                    console.error('Error searching for jobs:', error);
                    setLoading(false);
                    setError(error);
                }
            } else {
                setSearchResults([]);
            }
        };
        fetchData();
    }, [searchQuery]);
    return { searchResults, loading, error };
}

export default useFetchSearch;