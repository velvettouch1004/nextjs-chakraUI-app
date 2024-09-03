"use client";
import { Button, Container, Heading, Link } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container p={20} centerContent>
      <Heading p={20}>Welcome</Heading>
      <Link href="login">
        <Button colorScheme={"blackAlpha"}>login</Button>
      </Link>
    </Container>
  );
}
