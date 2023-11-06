import { useState } from 'react';
import useFetchSearch from '../hooks/useFetchSearch';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Search() {
    const [searchQuery, setSearchQuery] = useState('');
    const { searchResults, loading, error } = useFetchSearch(searchQuery);

    const handleApply = (job) => {
        window.open(job.job_apply_link, '_blank');
    };
    // When handleApply is called, redirect the user to that jobs apply link in a new window

    return (
        <div>
            <input type="text" placeholder="Search for jobs..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button onClick={() => setSearchQuery(searchQuery)}>Search!</button>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div> Error: {error.message} </div>
            ) : searchResults.length > 0 ? (
                <Container>
                    <h2>Search results:</h2>
                    <Row>
                        {searchResults.map((job) => (
                            <Col xs={12} md={4} lg={4} xl={4} key={job.job_id} className="mb-5">
                                <Card style={{ width: '24rem', height: '18rem' }}>
                                    <Card.Img src={job.employer_logo} alt={`${job.employer_name} Logo`} className="employerLogo" />
                                    <Card.Body>
                                        <Card.Title>{job.job_title}</Card.Title>
                                        <Card.Text>Company: {job.employer_name}</Card.Text>
                                        <Button variant="primary" onClick={() => handleApply(job)}>Apply for job!</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            ) : (
                <p>No search results found</p>
            )}
        </div>
    );
}

export default Search;