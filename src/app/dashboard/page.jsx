"use client";

import { axiosHandle } from "@/lib/api";
import { DeleteIcon, EditIcon, LockIcon } from "@chakra-ui/icons";
import {
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Table,
  Heading,
  IconButton,
  Link,
  Button,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AddPage() {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);
  const router = useRouter();
  useEffect(() => {
    axiosHandle("dev", "get", {}, (res) => {
      if (res.error) {
        router.push("/login");
      } else {
        setData(res);
      }
    });
  }, [flag]);

  const removeData = (id) => {
    axiosHandle(`dev/${id}`, "delete", {}, () => setFlag(!flag));
  };

  const onLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <TableContainer textAlign={"center"} p={20}>
      <Heading p={10}>User Management</Heading>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>phone</Th>
            <Th>email</Th>
            <Th>birth</Th>
            <Th>gender</Th>
            <Th>action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((value) => (
            <Tr key={value._id}>
              <Th>{value.name}</Th>
              <Th>{value.phone}</Th>
              <Th>{value.email}</Th>
              <Th>{value.birth}</Th>
              <Th>{value.gender}</Th>
              <Th>
                <Link href={`/dashboard/${value._id}`}>
                  <IconButton
                    aria-label="Search database"
                    m={2}
                    icon={<EditIcon />}
                  />
                </Link>
                <IconButton
                  onClick={() => removeData(value._id)}
                  m={2}
                  aria-label="Search database"
                  icon={<DeleteIcon />}
                />
              </Th>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Link href="/dashboard/new">
        <Button colorScheme={"teal"} variant="outline">
          Add
        </Button>
      </Link>
      <Button onClick={onLogout} pos={"absolute"} top={10} right={"100px"}>
        <LockIcon />
        <Text p={2}>Logout</Text>
      </Button>
    </TableContainer>
  );
}
