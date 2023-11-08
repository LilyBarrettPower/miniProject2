import { useState } from 'react';
import useFetchSearch from '../hooks/useFetchSearch';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../styling/jobCards.css';
import '../styling/search.css';


function Search() {
    const [searchQuery, setSearchQuery] = useState('');
    // initialise searchQuery in state 
    const { searchResults, loading, error, fetchData, currentPage, setCurrentPage } = useFetchSearch(searchQuery);
    // destruture values from the useFetchSearch hook

    const handleSearch = () => {
        setCurrentPage(1);
        // set the current page to 1 when a new search is made
        fetchData(searchQuery, currentPage);
        // call the fetchData function from the custom hook when the search button is clicked
    }

    const handleApply = (job) => {
        window.open(job.job_apply_link, '_blank');
    };
    // When handleApply is called, redirect the user to that jobs apply link in a new window

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        // update the current page with the new page
        fetchData(searchQuery, newPage);
        // call the fetchData function from the custom hook when the page is changed 
    }

    return (
        <div>
            <Container className="searchContainer">
                <Row className="justify-content-center align-items-center">
                    <Col xs={12} sm={6} md={4}>
                        <div className="searchInput">
                            <input id="searchInput" type="text" placeholder="Search for jobs..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="body"/>
                            <Button variant="secondary" onClick={handleSearch} className="body">Search!</Button>
                            {/* call the handleSearch function when the search button is pressed */}
                        </div>
                    </Col>
                </Row>
                {loading ? (
                    <div className="body">Loading...</div>
                ) : error ? (
                    <div className="body"> Error: {error.message} </div>
                ) : searchResults.length > 0 ? (
                    <Container>
                        <h2 class="headings jobHeading">Search results:</h2>
                                <Row>
                                    {/* iterate over each job in the searchresults array and generate a card for each */}
                            {searchResults.map((job) => (
                                <Col xs={12} md={4} lg={4} xl={4} key={job.job_id} className="mb-5">
                                    {/* using bootstrap to make the columns style */}
                                    <Card style={{ width: '24rem', height: '20rem', padding: '5px' }}>
                                        <Card.Img src={job.employer_logo} alt={`${job.employer_name} Logo`} className="employerLogo" />
                                        <Card.Body className="cardBody">
                                            <Card.Title className="cardTitle headings">{job.job_title}</Card.Title>
                                            <Card.Text className="body">{job.employer_name}</Card.Text>
                                            <div>
                                                <Card.Text className="jobDescription body">
                                                    {job.job_description}
                                                </Card.Text>
                                                <Button variant="secondary" onClick={() => handleApply(job)} className="applyButton body">Apply for job!</Button>
                                                {/* Call the handle apply function when the handleapply button is clicked */}
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                ) : (
                    <p className="body">No search results found</p>
                )}
                {/* if the search results array is more than 0 then render the below */}
                {searchResults.length > 0 && (
                    <div className="pagination">
                        <Button variant="secondary" disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)} className="pageButton body">Previous page</Button>
                        {/* create a button to go back a page, disabled when youre on page 1 */}
                        <span className="pageNumber body">Page {currentPage} </span>
                        <Button variant="secondary" onClick={() => handlePageChange(currentPage + 1)} className="pageButton body">Next page</Button>
                        {/* Create a button to go forward a page */}
                    </div>
                )}
            </Container>
        </div>
    );
}

export default Search;