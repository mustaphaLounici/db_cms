import { Modal, Button, Box, TextField } from "@material-ui/core";
import { useState } from "react";
import { useFormik } from "formik";
//if you want to add an input just write the name here
//also add validation rules and its initial value.

const AddSource = () => {
  const inputs = ["title", "description"];
  const initialValues = {
    title: "",
    description: "",
  };
  //handle submit
  const onSubmit = (values) => {
    console.log(values);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.title) errors.title = "field is required";
    if (!values.description) errors.description = "field is required";
    return errors;
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <Box display="flex" justifyContent="center" marginTop="1rem">
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add a new source
      </Button>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box height="90%" width="80%" bgcolor="white" overflow="auto">
          <form
            noValidate
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "2rem",
              overflowY: "auto",
            }}
            autoComplete="off"
            onSubmit={formik.handleSubmit}
          >
            <Box marginBottom="1rem">
              <TextField
                name={inputs[0]}
                fullWidth
                variant="outlined"
                label={inputs[0]}
                multiline
                {...formik.getFieldProps(inputs[0])}
                helperText={formik.errors[inputs[0]]}
                error={formik.touched[inputs[0]] && !!formik.errors[inputs[0]]}
              />
            </Box>
            <Box marginBottom="1rem">
              <TextField
                name={inputs[1]}
                fullWidth
                variant="outlined"
                label={inputs[1]}
                multiline
                {...formik.getFieldProps(inputs[1])}
                helperText={formik.errors[inputs[1]]}
                error={formik.touched[inputs[1]] && !!formik.errors[inputs[1]]}
              />
            </Box>

            <Box
              display="flex"
              justifyContent="center"
              marginBottom="1rem"
              alignSelf="center"
              width="150px"
              height="40px"
            >
              <Button
                variant="contained"
                height="100%"
                fullWidth
                color="primary"
                type="submit"
              >
                Add
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </Box>
  );
};

export default AddSource;
