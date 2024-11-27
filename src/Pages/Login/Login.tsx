import { Button, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Field } from "../../components/ui/field";
import { useForm } from "react-hook-form";
import { PasswordInput } from "../../components/ui/password-input";
import "./login.css"

interface FormValues {
  username: string;
  password: string;

}


const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  })
  const [passwordValidation, setPasswordValidation] = useState("");
  const [confirmPasswordValidation, setConfirmPasswordValidation] =
    useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <>
      <Text>Login</Text>
      <div className="container-fluid loginBox">
        <div className="row">
          <div className="col">
          <Field
                label="Username"
                invalid={!!errors.username}
                errorText={errors.username?.message}
              >
                <Input
                  {...register("username", {
                    required: "Username is required",
                  })}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                ></Input>
              </Field>
          <Field
                  label="Password"
                  invalid={!!errors.password}
                  errorText={errors.password?.message}
                >
                  <PasswordInput
                    {...register("password", {
                      required: "Password is required",
                    })}
                    onChange={(e) => (
                      setUser({ ...user, password: e.target.value }),
                      setPasswordValidation(e.target.value)
                    )}
                  ></PasswordInput>
                </Field>
                <Button type="submit" colorPalette={"blue"}>
                  Login
                </Button>
              
          </div>
          <div className="col"></div>
        </div>
        <Text> Due to the confidentiality of student data, do not save your password to your internet browser.</Text>
      </div>
    </>
  )
}

export default Login