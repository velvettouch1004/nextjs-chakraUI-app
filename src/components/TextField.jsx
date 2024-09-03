import { FormControl, Input, FormErrorMessage } from "@chakra-ui/react";
import React from "react";

const TextField = (props) => {
  return (
    <FormControl p={3} isInvalid={props.helpertext ? true : false}>
      <Input placeholder={`Enter the ${props.name}`} {...props} />
      {!props.helpertext ? (
        <></>
      ) : (
        <FormErrorMessage>{props.helpertext}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default TextField;
