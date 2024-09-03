import React, { useEffect, useState } from "react";
import {
  Heading,
  Button,
  Container,
  Input,
  Select,
  Stack,
  Link,
} from "@chakra-ui/react";

const DevForm = (props) => {
  const { data, handleSubmit } = props;
  const [inputData, setInputData] = useState(data);
  useEffect(() => {
    setInputData(data);
  }, [data]);

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <Stack p={30} spacing={5}>
        <Heading p={5}>Add a new dev</Heading>
        <Input
          type="text"
          name="name"
          value={inputData?.name || ""}
          onChange={(e) => handleChange(e)}
          placeholder="Name"
        />
        <Input
          type="text"
          name="phone"
          value={inputData?.phone || ""}
          onChange={(e) => handleChange(e)}
          placeholder="Phone Number"
        />
        <Input
          type="email"
          name="email"
          value={inputData?.email || ""}
          onChange={(e) => handleChange(e)}
          placeholder="Email"
        />
        <Input
          type="date"
          value={inputData?.birth || ""}
          onChange={(e) => handleChange(e)}
          name="birth"
          placeholder="Birth"
        />
        <Select
          name="gender"
          value={inputData?.gender || ""}
          onChange={(e) => handleChange(e)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
        <Button colorScheme="teal" onClick={() => handleSubmit(inputData)}>
          Submit
        </Button>
        <Link href="/dashboard">
          <Button w={"100%"}>Back</Button>
        </Link>
      </Stack>
    </Container>
  );
};

export default DevForm;
