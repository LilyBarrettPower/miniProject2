import useFetchPopular from "../hooks/useFetchPopular";
// import the useFetchPopular custom hook
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import '../styling/jobCards.css';

function PopularJobs() {
    const { popularJobs, loading, error } = useFetchPopular(); // use the useFetchPopular hook
    // destructure the variables for use in the component

    const handleApply = (job) => {
        window.open(job.job_apply_link, '_blank');
    };
    // When handleApply is called, redirect the user to that jobs apply link in a new window

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // console.log(popularJobs.data);
    // conole.log for debugging purposes 

    return (
        <Container>
            <h2>Popular jobs:</h2>
            <Row>
                {popularJobs.data.map((job) => ( //transfrom the popularJobs.data array, each job is mapped to an individual list item
                    <Col xs={12} md={4} lg={4} xl={4} key={job.job_id} className="mb-5">
                        <Card style={{ width: '24rem', height: '18rem' }}>
                            <Card.Img variant="top" src={job.employer_logo} alt={`${job.employer_name} Logo`} className="employerLogo" />
                            {/* display the employers logo beside the job title */}
                            <Card.Body>
                                <Card.Title>{job.job_title}</Card.Title>
                                {/* access the job_title property */}
                                <Card.Text>
                                    {job.employer_name}
                                    {/* access the employer_name property */}
                                </Card.Text>
                                <Card.Text className="jobDescription">
                                    {job.job_description}
                                </Card.Text>
                                <Button variant="secondary" onClick={() => handleApply(job)}>Apply for job!</Button>
                                {/* add the apply for job button */}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
export default PopularJobs;