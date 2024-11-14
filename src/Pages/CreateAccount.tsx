import { Button, Input, Text } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { Field } from "../components/ui/field"
import { useState } from "react";
import { PasswordInput } from "../components/ui/password-input";

interface FormValues {
  lastName: string;
  firstName: string;
  username:string;
  password: string;
  confirmPassword: string;
}



const CreateAccount = () => {

  const [newUser, setNewUser] = useState({
    lastName: "",
    firstName: "",
    username: "",
    password: "",
    confirmPassword: ""
  })
  const [passwordValidation, setPasswordValidation] = useState("")

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FormValues>()

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <>
      
        <Text>Add User</Text>
        
        <form onSubmit={onSubmit}>
          {/* Last Name Input Field */}
          <Field
          label="Last Name"
          invalid={!!errors.lastName}
          errorText={errors.lastName?.message}
          >
            <Input {...register("lastName", {required: "Last Name is required"})} onChange={e => setNewUser({...newUser, lastName: e.target.value})}></Input>
          </Field>

          {/* First Name Input Field */}
          <Field
          label="First Name"
          invalid={!!errors.firstName}
          errorText={errors.firstName?.message}
          >
            <Input {...register("firstName", {required: "First Name is required"})} onChange={e => setNewUser({...newUser, firstName: e.target.value})}></Input>
          </Field>

          {/* Username Input Field */}
          <Field
          label="Username"
          invalid={!!errors.username}
          errorText={errors.username?.message}
          >
            <Input {...register("username", {required: "Username is required"})} onChange={e => setNewUser({...newUser, username: e.target.value})}></Input>
          </Field>

          {/* Password Section */}

          <div>
            {/* Password Input Field */}
          <Field
          label="Password"
          invalid={!!errors.password}
          errorText={errors.password?.message}
          >
            <PasswordInput {...register("password", {required: "Password is required"})} onChange={e => setNewUser({...newUser, password: e.target.value})}></PasswordInput>
          </Field>

          {/* Confirm Password Input Field */}
          <Field
          label="Confirm Password"
          invalid={!!errors.confirmPassword}
          errorText={errors.confirmPassword?.message}
          >
            <PasswordInput 
            {passwordValidation != }
            onChange={
              e => (
                setPasswordValidation(e.target.value),
                setNewUser({...newUser, confirmPassword: e.target.value}))}></PasswordInput>
          </Field>
          <div className="div">
            <div className="row">

              <div className="col-8">
                <Text>Password must be at least 8 characters in length and contain at least 1 of each of the following character types  </Text>
              </div>
              <div className="col">
                <Button type="submit" colorPalette={"blue"}>Create User</Button>
              </div>
            </div>
          </div>
          </div>
        </form>
      
    </>
  )
}

export default CreateAccount