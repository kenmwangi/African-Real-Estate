import React from "react";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

export default function FormAlert(props) {
  return (
    <Alert my={1} status="error" variant="left-accent">
      <AlertIcon />
      <AlertTitle mr={2}>{props.title}</AlertTitle>
    </Alert>
  );
}
