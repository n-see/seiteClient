import { Button } from "@chakra-ui/react";
import "./dashboard.css";
import { Modal } from "react-bootstrap";
import { useState } from "react";

const Dashboard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <h1 className="text-center">Student Caseload</h1>

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="caseloadNumber text-center">
              <h4 className="text-center">Students Add/Removed</h4>
              <div className="row">
                <div className="col ">
                  <h2>14</h2>
                  <p>Added Students</p>
                </div>
                <div className="col">
                  <h2>5</h2>
                  <p>Removed Students</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col d-flex justify-content-center align-items-center">
            <Button size="xl" colorPalette={"blue"} className="addStudentButton" onClick={handleShow} >Add Student to Caseload</Button>

          {/* add student modal */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>

          </Modal>

          </div>
        </div>
      </div>

      {/* Student Accordion */}

    </>
  );
};

export default Dashboard;
