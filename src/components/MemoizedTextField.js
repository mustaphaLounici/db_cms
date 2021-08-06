import { Box, TextField } from "@material-ui/core";
import React from "react";

const MyTextField = ({
  name,
  label,
  value,
  handleChange,
  initialValue,
  type,
  error,
  helperText,
  multiline,
}) => {
  console.log(type);
  return (
    <Box
      marginBottom="1rem"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <TextField
        name={name}
        fullWidth
        variant="outlined"
        type={type}
        label={label}
        multiline={multiline ? true : false}
        value={value}
        onChange={handleChange}
        helperText={helperText}
        error={error}
        // placeholder={
        //   initialValue
        //     ? "Please enter a value"
        //     : "this value was initially empty or null"
        // }
      />
    </Box>
  );
};

export const MemoizedTextField = React.memo(MyTextField);
