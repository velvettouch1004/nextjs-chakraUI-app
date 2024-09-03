"use client";
import { Heading, Button, Card, Container } from "@chakra-ui/react";
import TextField from "../../components/TextField";
import { useState } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { validate } from "react-email-validator";
import { axiosHandle } from "@/lib/api";
import { useRouter } from "next/navigation";
import { setAuthToken } from "@/lib/setAuthToken";

export default function LoginPage() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const validation = () => {
    const error = {};
    if (!data.email || !validate(data.email)) {
      error.email = !data.email ? "Email is required" : "Email is invalid";
    }
    if (!data.password) {
      error.password = "Password is required";
    }
    return error;
  };

  const submitLogin = () => {
    axiosHandle("auth", "post", data, (res) => {
      const { token } = res;
      if (token) {
        setErrors({});
        localStorage.setItem("token", token);
        setAuthToken();
        router.push("/dashboard");
      } else {
        setErrors(res);
      }
    });
  };

  const submitClick = () => {
    const error = validation();
    if (error.email || error.password) {
      setErrors(error);
    } else {
      submitLogin();
    }
  };

  return (
    <Container p={10} centerContent>
      <Card p={15}>
        <Heading p={5}>Sign In</Heading>
        <TextField
          type="text"
          value={data.email}
          onChange={(e) => handleChange(e)}
          helpertext={errors.email}
          name="email"
        />
        <TextField
          type="password"
          value={data.password}
          onChange={(e) => handleChange(e)}
          helpertext={errors.password}
          name="password"
        />
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="teal"
          variant="outline"
          onClick={submitClick}
        >
          Submit
        </Button>
      </Card>
    </Container>
  );
}
