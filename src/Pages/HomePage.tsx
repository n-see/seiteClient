import { Container, Row, Col, } from "react-bootstrap";
import homepageteach from "../assets/homepageteach.jpg";


const Homepage = () => {
  return (
    <>
      <Container fluid className="py-5">
       
        <section className="what-we-do mb-5">
          <Row className="align-items-center">
            <Col md={6} className="text-center mb-4 mb-md-0">
              <img
                src= {homepageteach} 
                alt="Teacher with students"
                className="teacherStudent"
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

      <div id="carouselExampleIndicators" className="carousel slide" data-coreui-ride="true">

  <div className="carousel-indicators">
    <button type="button" data-coreui-target="#carouselExampleIndicators" data-coreui-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-coreui-target="#carouselExampleIndicators" data-coreui-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-coreui-target="#carouselExampleIndicators" data-coreui-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-coreui-target="#carouselExampleIndicators" data-coreui-slide-to="3" aria-label="Slide 4"></button>
  </div>


  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="row">
        <div className="col-6">
          <img src="image1.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="col-6">
          <img src="image2.jpg" className="d-block w-100" alt="..."/>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="row">
        <div className="col-6">
          <img src="image3.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="col-6">
          <img src="image4.jpg" className="d-block w-100" alt="..."/>
        </div>
      </div>
    </div>
 
  </div>


  <button className="carousel-control-prev" type="button" data-coreui-target="#carouselExampleIndicators" data-coreui-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-coreui-target="#carouselExampleIndicators" data-coreui-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


    </>
  );
};

export default Homepage;
