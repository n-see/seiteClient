import { Button, HStack, Input } from "@chakra-ui/react";
import "./dashboard.css";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { Field } from "../../components/ui/field";
import { useForm } from "react-hook-form";
import { Radio, RadioGroup } from "../../components/ui/radio";

interface FormValues {
  firstName: string;
  lastName: string;
  SSID: number;
  DOB: number;
  gender: string;
  primaryDisability: string;
  primaryPhone: string;
  secondaryPhone: string;
  address: string;
}

const Dashboard = () => {
  const [newStudent, setNewStudent] = useState({
    firstName: "",
    lastName: "",
    SSID: 0,
    DOB: 0,
    gender: "",
    primaryDisability: "",
    primaryPhone: "",
    secondaryPhone: "",
    address: ""
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => console.log(data));

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
                <Modal.Title>Add Student to Caseload</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form onSubmit={onSubmit}>
                  {/* Student last name field */}
                  <Field
                    label="Last Name"
                    invalid={!!errors.lastName}
                    errorText={errors.lastName?.message}
                  >
                    <Input
                      {...register("lastName", {
                        required: "Last Name is required",
                      })}
                      onChange={(e) =>
                        setNewStudent({ ...newStudent, lastName: e.target.value })
                      }
                    ></Input>
                  </Field>

                  {/* Student first name field */}
                  <Field
                    label="First Name"
                    invalid={!!errors.firstName}
                    errorText={errors.firstName?.message}
                  >
                    <Input
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                      onChange={(e) =>
                        setNewStudent({ ...newStudent, firstName: e.target.value })
                      }
                    ></Input>
                  </Field>

                  {/* Student SSID field */}
                  <Field
                    label="SSID"
                    invalid={!!errors.SSID}
                    errorText={errors.SSID?.message}
                  >
                    <Input
                    type="number"
                      {...register("SSID", {
                        required: "SSID is required",
                      })}
                      onChange={(e) =>
                        setNewStudent({ ...newStudent, SSID: Number(e.target.value) })
                      }
                    ></Input>
                  </Field>

                  {/* Student DOB field */}
                  <Field
                    label="Date of Birth"
                    invalid={!!errors.DOB}
                    errorText={errors.DOB?.message}
                  >
                    <Input type="date"
                      {...register("DOB", {
                        required: "DOB is required",
                      })}
                      onChange={(e) =>
                        setNewStudent({ ...newStudent, DOB: Number(e.target.value) })
                      }
                    ></Input>
                  </Field>
                  {/* Gender section */}
                  <Field label="Gender">

                  <RadioGroup defaultValue="1">
                    <HStack gap="6">
                      <Radio value="Male"> Male</Radio>
                      <Radio value="Female"> Female</Radio>
                      <Radio value="Non-Binary"> Non-Binary</Radio>
                    </HStack>
                  </RadioGroup>
                  </Field>

                  {/* Student Disability field */}
                  <Field
                    label="Primary Disability"
                    invalid={!!errors.primaryDisability}
                    errorText={errors.primaryDisability?.message}
                  >
                    <Input type="date"
                      {...register("primaryDisability", {
                        required: "Primary Disability is required",
                      })}
                      onChange={(e) =>
                        setNewStudent({ ...newStudent, primaryDisability: e.target.value })
                      }
                    ></Input>
                  </Field>

                  {/* Student primary phone number field */}
                  <Field
                    label="Primary Phone Number"
                    invalid={!!errors.primaryPhone}
                    errorText={errors.primaryPhone?.message}
                  >
                    <Input
                    max={99999999999}
                      type="number"
                      {...register("primaryPhone", {
                        required: "Primary phone number is required",
                      })}
                      
                      onChange={(e) =>
                        setNewStudent({ ...newStudent, primaryPhone: e.target.value })
                      }
                    ></Input>
                  </Field>

                  {/* Student secondary phone number field */}
                  <Field
                    label="Secondary Phone Number"
                    invalid={!!errors.secondaryPhone}
                    errorText={errors.secondaryPhone?.message}
                  >
                    <Input
                    max={99999999999}
                      type="number"
                      {...register("secondaryPhone", {
                        required: "Secondary phone number is required",
                      })}
                      
                      onChange={(e) =>
                        setNewStudent({ ...newStudent, secondaryPhone: e.target.value })
                      }
                    ></Input>

                  </Field>
                  {/* Home address field */}
                  <Field
                    label="Home Address"
                    invalid={!!errors.address}
                    errorText={errors.address?.message}
                  >
                    <Input
                      {...register("address", {
                        required: "Home Address is required",
                      })}
                      
                      onChange={(e) =>
                        setNewStudent({ ...newStudent, address: e.target.value })
                      }
                    ></Input>
                  </Field>
                  <Button type="submit" colorPalette={"blue"}>
                  Submit
                </Button>
                </form>
              </Modal.Body>
            </Modal>

          </div>
        </div>
      </div>

      {/* Student Accordion */}

    </>
  );
};

export default Dashboard;
