import { Container, Row, Col, } from "react-bootstrap";


const Homepage = () => {
  return (
    <>
      <Container fluid className="py-5">
       
        <section className="what-we-do mb-5">
          <Row className="align-items-center">
            <Col md={6} className="text-center mb-4 mb-md-0">
              <img
                src="path/to/your/image.jpg" 
                alt="Teacher with students"
                className="img-fluid rounded"
              />
            </Col>
            <Col md={6}>
              <h1 className="mb-3">WHAT WE DO</h1>
              <p>
                The mission of SIETE is to serve as a comprehensive student
                directory, enhancing efficiency and accuracy in special education
                record-keeping. Accessible from any internet-connected device,
                this application operates independently and is not associated
                with SEIS or any similar platforms. SIETE is an excellent
                resource for SELPA (Student Engagement & Learning Profile Archive)
                users, providing valuable information and resources to support
                their needs.
              </p>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};

export default Homepage;
