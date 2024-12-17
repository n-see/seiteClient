import { Button, Container, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Field } from "../../components/ui/field";
import { useForm } from "react-hook-form";
import { PasswordInput } from "../../components/ui/password-input";
import "./login.css"
import axios from "axios";
import { BASE_URL } from "../../constant";
import { useNavigate } from "react-router-dom";


interface FormValues {
  username: string;
  password: string;

}

interface User{
  id: number,
  username: string;
  password: string;
}


const Login = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: ""
  })
  // const [passwordValidation, setPasswordValidation] = useState("");
  // const [confirmPasswordValidation, setConfirmPasswordValidation] =
  //   useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

 const login = async () => {
  let userData= {
    id:0,
    username: user.username,
    password: user.password
  }
  let token = await axiosLogin(userData)
  if (token != null) {
    localStorage.setItem("Token", token);
    console.log(token);
    await GetLoggedInUser(user.username);
    
  }
  navigate('/Dashboard')
 }

 const axiosLogin = async (loginUser:User) => {
  let outsideData = "";
    try{
        const res = await axios.post(BASE_URL + "User/Login", loginUser);
        let data = res.data
        outsideData = data.token
        localStorage.setItem("Token", data.token)
        console.log(res);
    } catch(error) {
        console.log(error)
    }
    return outsideData
    
    
 }

 const GetLoggedInUser = async (username:string) => {
  let res = await axios 
  .get(BASE_URL + "User/GetUserByUsername/" + username)
  let userData = res.data;
      console.log(userData)
      localStorage.setItem("UserData", JSON.stringify(userData) )
}

  const onSubmit = handleSubmit(() => login());
  return (
    <>
     <Text className="loginText">Login</Text>
      <Container className="p-4 bg-white shadow rounded loginContainer">
     

     
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
                      setUser({ ...user, password: e.target.value })
                      // setPasswordValidation(e.target.value)
                    )}
                  ></PasswordInput>
                </Field>
                <Button type="submit" colorPalette={"blue"} onClick={onSubmit}>
                  Login
                </Button>
                <Button
          type="submit"
          colorPalette={"blue"}
          onClick={onSubmit}
          className="ms-3"
        >
          Google Login
        </Button>
              
          </div>
        </div>
        <Text> Due to the confidentiality of student data, do not save your password to your internet browser.</Text>
      </Container>
    </>
  )
}

export default Login