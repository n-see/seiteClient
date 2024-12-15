
import { Container, Row, Col } from "react-bootstrap";
import SJCOElogo from "../assets/SJCOElogo.png";
import CODEHACKlogo from "../assets/CODEHACKlogo.png";

function FooterComponent() {
  return (
    <footer>
    <Container fluid className="footerBody">
    <Row className="footerBody">
  <Col xs={12} md={3} className="sieteFootText">
    About SIETE
  </Col>
  <Col xs={12} md={3} className="versionText">
    Version: release-155.0
  </Col>
  <Col xs={12} md={2} className="followUs">
    Follow Us On
  </Col>
  {/* <Col xs={12} md={2} className="followUs">
    Follow Us On
  </Col> */}
  <Col xs={12} md={2} className="codehackSites">CodeHack Sites</Col>
  <Col xs={12} md={4} className="sieteInfo">
    SEITE is managed and maintained by NaN, a department of the Supportive Journeys for Communities of Opportunity and Education. Copyright © 2024 SEITE. All rights reserved.
    <img src={SJCOElogo} alt="SJCOE Logo" className="footerLogo" />
    <img src={CODEHACKlogo} alt="CodeHack Logo" className="codeHackLogo" />
</Col>
</Row>

    </Container>
  </footer>
  );
}

export default FooterComponent;
