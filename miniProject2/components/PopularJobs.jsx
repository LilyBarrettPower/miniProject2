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
        return <div className="body">Loading...</div>;
    }
    if (error) {
        return <div className="body">Error: {error.message}</div>;
    }

    // console.log(popularJobs.data);
    // conole.log for debugging purposes 

    return (
        <Container>
            <h2 className="headings jobHeading">Popular jobs:</h2>
            <Row>
                {/* using the bootstrap cards t o display the jobs */}
                {popularJobs.data.map((job) => ( //iterate over each job in the popularJobs array and create a card for each 
                    <Col xs={12} md={4} lg={4} xl={4} key={job.job_id} className="mb-5">
                        <Card style={{ width: '24rem', height: '22rem', padding: '5px' }}>
                            {/* inline styling */}
                            <Card.Img variant="top" src={job.employer_logo} alt={`${job.employer_name} Logo`} className="employerLogo" />
                            {/* display the employers logo beside the job title */}
                            <Card.Body>
                                <Card.Title className="cardTitle headings">{job.job_title}</Card.Title>
                                {/* access the job_title property */}
                                <Card.Text className="body">
                                    {job.employer_name}
                                    {/* access the employer_name property */}
                                </Card.Text>
                                <Card.Text className="jobDescription body">
                                    {job.job_description}
                                    {/* Access the job_description property */}
                                </Card.Text>
                                <Button variant="secondary" onClick={() => handleApply(job)} className="applyButton body">Apply for job!</Button>
                                {/* add the apply for job button, call the handleApply function when pressed  */}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
export default PopularJobs;