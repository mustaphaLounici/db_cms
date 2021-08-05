import { Box, Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useFormik } from "formik";

const onSubmit = (values) => {
  console.log(values);
};
const validate = (values) => {
  const errors = {};
  return errors;
};
const Form = () => {
  const location = useLocation();
  const [source_data] = useState(location.state.source_data);
  const initialValues = {
    Flag_Behavior: source_data["Flag_Behavior"]
      ? source_data["Flag_Behavior"]
      : "",
    Flag_Opinion: source_data["Flag_Opinion"]
      ? source_data["Flag_Opinion"]
      : "",
    Original: source_data["Original"] ? source_data["Original"] : "",
    Population: source_data["Population"] ? source_data["Population"] : "",
    Suggested: source_data["Suggested"] ? source_data["Suggested"] : "",
    Topic: source_data["Topic"] ? source_data["Topic"] : "",
    Variables: source_data["Variables"] ? source_data["Variables"] : "",
    description: source_data["description"] ? source_data["description"] : "",
    //because this field is an object of topics
    focus_area: source_data["focus_area"] ? source_data["focus_area"] : null,
    geo: source_data["geo"] ? source_data["geo"] : "",
    geo_detail: source_data["geo_detail"] ? source_data["geo_detail"] : "",
    geo_short: source_data["geo_short"] ? source_data["geo_short"] : "",
    img: source_data["img"] ? source_data["img"] : "",
    long_name: source_data["long_name"] ? source_data["long_name"] : "",
    orig_source: source_data["orig_source"] ? source_data["orig_source"] : "",
    periodicity: source_data["periodicity"] ? source_data["periodicity"] : "",
    re3data: source_data["re3data"] ? source_data["re3data"] : "",
    sample_size_cols: source_data["sample_size_cols"]
      ? source_data["sample_size_cols"]
      : "",
    sample_size_rows: source_data["sample_size_rows"]
      ? source_data["sample_size_rows"]
      : "",
    short_name: source_data["short_name"] ? source_data["short_name"] : "",
    text: source_data["text"] ? source_data["text"] : "",
    time_period: source_data["time_period"] ? source_data["time_period"] : "",
    twitter: source_data["twitter"] ? source_data["twitter"] : "",
    type: source_data["type"] ? source_data["type"] : "",
    url_internal: source_data["url_internal"]
      ? source_data["url_internal"]
      : "",
    url_orig: source_data["url_orig"] ? source_data["url_orig"] : "",
    wikidata_id: source_data["wikidata_id"] ? source_data["wikidata_id"] : "",
    wikipedia_id: source_data["wikipedia_id"]
      ? source_data["wikipedia_id"]
      : "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignContent="center"
      marginY="2rem"
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          flexBasis: "80%",
          height: "100%",
        }}
      >
        <Box
          marginBottom="1rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            name={"long_name"}
            fullWidth
            variant="outlined"
            label={"Source full name"}
            multiline
            value={formik.values["long_name"]}
            onChange={formik.handleChange}
            // helperText={formik.errors[field]}
            // error={formik.touched[field] && Boolean(formik.errors[field])}
            placeholder={
              initialValues["long_name"]
                ? "Please enter a value"
                : "this value was initially empty or null"
            }
          />
        </Box>
        <Box
          marginBottom="1rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            name={"short_name"}
            fullWidth
            variant="outlined"
            label={"Source short name"}
            multiline
            value={formik.values["short_name"]}
            onChange={formik.handleChange}
            // helperText={formik.errors[field]}
            // error={formik.touched[field] && Boolean(formik.errors[field])}
            placeholder={
              initialValues["short_name"]
                ? "Please enter a value"
                : "this value was initially empty or null"
            }
          />
        </Box>
        <Box
          marginBottom="1rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            name={"orig_source"}
            fullWidth
            variant="outlined"
            label={"original source"}
            multiline
            value={formik.values["orig_source"]}
            onChange={formik.handleChange}
            // helperText={formik.errors[field]}
            // error={formik.touched[field] && Boolean(formik.errors[field])}
            placeholder={
              initialValues["orig_source"]
                ? "Please enter a value"
                : "this value was initially empty or null"
            }
          />
        </Box>
        <Box
          marginBottom="1rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            name={"description"}
            fullWidth
            variant="outlined"
            label={"Description"}
            multiline
            value={formik.values["description"]}
            onChange={formik.handleChange}
            // helperText={formik.errors[field]}
            // error={formik.touched[field] && Boolean(formik.errors[field])}
            placeholder={
              initialValues["description"]
                ? "Please enter a value"
                : "this value was initially empty or null"
            }
          />
        </Box>
        <Box
          marginBottom="1rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            name={"Original"}
            fullWidth
            variant="outlined"
            label={"Original"}
            multiline
            value={formik.values["Original"]}
            onChange={formik.handleChange}
            // helperText={formik.errors[field]}
            // error={formik.touched[field] && Boolean(formik.errors[field])}
            placeholder={
              initialValues["Original"]
                ? "Please enter a value"
                : "this value was initially empty or null"
            }
          />
        </Box>
        <Box
          marginBottom="1rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            name={"Suggested"}
            fullWidth
            variant="outlined"
            label={"Suggested"}
            multiline
            value={formik.values["Suggested"]}
            onChange={formik.handleChange}
            // helperText={formik.errors[field]}
            // error={formik.touched[field] && Boolean(formik.errors[field])}
            placeholder={
              initialValues["Suggested"]
                ? "Please enter a value"
                : "this value was initially empty or null"
            }
          />
        </Box>
        <Box
          marginBottom="1rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            name={"periodicity"}
            fullWidth
            variant="outlined"
            label={"Periodicity"}
            multiline
            value={formik.values["periodicity"]}
            onChange={formik.handleChange}
            // helperText={formik.errors[field]}
            // error={formik.touched[field] && Boolean(formik.errors[field])}
            placeholder={
              initialValues["periodicity"]
                ? "Please enter a value"
                : "this value was initially empty or null"
            }
          />
        </Box>
        <Box
          marginBottom="1rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            name={"type"}
            fullWidth
            variant="outlined"
            label={"Type"}
            multiline
            value={formik.values["type"]}
            onChange={formik.handleChange}
            // helperText={formik.errors[field]}
            // error={formik.touched[field] && Boolean(formik.errors[field])}
            placeholder={
              initialValues["type"]
                ? "Please enter a value"
                : "this value was initially empty or null"
            }
          />
        </Box>
        <Box
          marginBottom="1rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            name={"Topic"}
            fullWidth
            variant="outlined"
            label={"Topic"}
            multiline
            value={formik.values["Topic"]}
            onChange={formik.handleChange}
            // helperText={formik.errors[field]}
            // error={formik.touched[field] && Boolean(formik.errors[field])}
            placeholder={
              initialValues["Topic"]
                ? "Please enter a value"
                : "this value was initially empty or null"
            }
          />
        </Box>
        <Box
          marginBottom="1rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            name={"Population"}
            fullWidth
            variant="outlined"
            label={"Population"}
            multiline
            value={formik.values["Population"]}
            onChange={formik.handleChange}
            // helperText={formik.errors[field]}
            // error={formik.touched[field] && Boolean(formik.errors[field])}
            placeholder={
              initialValues["Population"]
                ? "Please enter a value"
                : "this value was initially empty or null"
            }
          />
        </Box>
        <Box
          marginBottom="1rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            name={"text"}
            fullWidth
            variant="outlined"
            label={"text"}
            multiline
            value={formik.values["text"]}
            onChange={formik.handleChange}
            // helperText={formik.errors[field]}
            // error={formik.touched[field] && Boolean(formik.errors[field])}
            placeholder={
              initialValues["text"]
                ? "Please enter a value"
                : "this value was initially empty or null"
            }
          />
        </Box>
        <Box
          marginBottom="1rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            name={"geo"}
            fullWidth
            variant="outlined"
            label={"geography"}
            multiline
            value={formik.values["geo"]}
            onChange={formik.handleChange}
            // helperText={formik.errors[field]}
            // error={formik.touched[field] && Boolean(formik.errors[field])}
            placeholder={
              initialValues["geo"]
                ? "Please enter a value"
                : "this value was initially empty or null"
            }
          />
        </Box>
        <Box
          marginBottom="1rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            name={"geo_short"}
            fullWidth
            variant="outlined"
            label={"geography short"}
            multiline
            value={formik.values["geo_short"]}
            onChange={formik.handleChange}
            // helperText={formik.errors[field]}
            // error={formik.touched[field] && Boolean(formik.errors[field])}
            placeholder={
              initialValues["geo_short"]
                ? "Please enter a value"
                : "this value was initially empty or null"
            }
          />
        </Box>
        <Box
          marginBottom="1rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            name={"geo_detail"}
            fullWidth
            variant="outlined"
            label={"geography details"}
            multiline
            value={formik.values["geo_detail"]}
            onChange={formik.handleChange}
            // helperText={formik.errors[field]}
            // error={formik.touched[field] && Boolean(formik.errors[field])}
            placeholder={
              initialValues["geo_detail"]
                ? "Please enter a value"
                : "this value was initially empty or null"
            }
          />
        </Box>

        <Box
          marginBottom="1rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            name={"img"}
            fullWidth
            variant="outlined"
            label={"img"}
            multiline
            value={formik.values["img"]}
            onChange={formik.handleChange}
            // helperText={formik.errors[field]}
            // error={formik.touched[field] && Boolean(formik.errors[field])}
            placeholder={
              initialValues["img"]
                ? "Please enter a value"
                : "this value was initially empty or null"
            }
          />
        </Box>
        <Box
          marginBottom="1rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            name={"Flag Behavior"}
            fullWidth
            variant="outlined"
            label={"Flag Behavior"}
            multiline
            value={formik.values["Flag Behavior"]}
            onChange={formik.handleChange}
            // helperText={formik.errors[field]}
            // error={formik.touched[field] && Boolean(formik.errors[field])}
            placeholder={
              initialValues["Flag Behavior"]
                ? "Please enter a value"
                : "this value was initially empty or null"
            }
          />
        </Box>
        <Box
          marginBottom="1rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            name={"Flag_Opinion"}
            fullWidth
            variant="outlined"
            label={"Flag Opinion"}
            value={formik.values["Flag_Opinion"]}
            onChange={formik.handleChange}
            // helperText={formik.errors[field]}
            // error={formik.touched[field] && Boolean(formik.errors[field])}
            type="number"
          />
        </Box>
        <Box
          marginBottom="1rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            name={"time_period"}
            fullWidth
            variant="outlined"
            label={"Time Period"}
            multiline
            value={formik.values["time_period"]}
            onChange={formik.handleChange}
            // helperText={formik.errors[field]}
            // error={formik.touched[field] && Boolean(formik.errors[field])}
            placeholder={
              initialValues["time_period"]
                ? "Please enter a value"
                : "this value was initially empty or null"
            }
          />
        </Box>
        {/* number type inputs */}
        <Box
          marginBottom="1rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            name={"sample_size_cols"}
            fullWidth
            type="number"
            variant="outlined"
            label={"sample size columns number"}
            value={formik.values["sample_size_cols"]}
            onChange={formik.handleChange}

            // helperText={formik.errors[field]}
            // error={formik.touched[field] && Boolean(formik.errors[field])}
          />
        </Box>
        <Box
          marginBottom="1rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            name={"sample_size_rows"}
            fullWidth
            variant="outlined"
            type="number"
            label={"sample size rows number"}
            value={formik.values["sample_size_rows"]}
            onChange={formik.handleChange}
            // helperText={formik.errors[field]}
            // error={formik.touched[field] && Boolean(formik.errors[field])}
          />
        </Box>

        <Box
          marginBottom="1rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            name={"Variables"}
            fullWidth
            label={"Variables number"}
            value={formik.values["Variables"]}
            onChange={formik.handleChange}
            // helperText={formik.errors[field]}
            // error={formik.touched[field] && Boolean(formik.errors[field])}

            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </Box>
        <Box
          marginBottom="1rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            name={"re3data"}
            fullWidth
            variant="outlined"
            label={"re3data"}
            multiline
            value={formik.values["re3data"]}
            onChange={formik.handleChange}
            // helperText={formik.errors[field]}
            // error={formik.touched[field] && Boolean(formik.errors[field])}
            placeholder={
              initialValues["re3data"]
                ? "Please enter a value"
                : "this value was initially empty or null"
            }
          />
        </Box>
        <Box
          marginBottom="1rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            name={"twitter"}
            fullWidth
            variant="outlined"
            label={"Twitter"}
            multiline
            value={formik.values["twitter"]}
            onChange={formik.handleChange}
            // helperText={formik.errors[field]}
            // error={formik.touched[field] && Boolean(formik.errors[field])}
            placeholder={
              initialValues["twitter"]
                ? "Please enter a value"
                : "this value was initially empty or null"
            }
          />
        </Box>
        <Box
          marginBottom="1rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            name={"url_internal"}
            fullWidth
            variant="outlined"
            label={"internal url"}
            multiline
            value={formik.values["url_internal"]}
            onChange={formik.handleChange}
            // helperText={formik.errors[field]}
            // error={formik.touched[field] && Boolean(formik.errors[field])}
            placeholder={
              initialValues["url_internal"]
                ? "Please enter a value"
                : "this value was initially empty or null"
            }
          />
        </Box>
        <Box
          marginBottom="1rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            name={"url_orig"}
            fullWidth
            variant="outlined"
            label={"original url"}
            multiline
            value={formik.values["url_orig"]}
            onChange={formik.handleChange}
            // helperText={formik.errors[field]}
            // error={formik.touched[field] && Boolean(formik.errors[field])}
            placeholder={
              initialValues["url_orig"]
                ? "Please enter a value"
                : "this value was initially empty or null"
            }
          />
        </Box>
        <Box
          marginBottom="1rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            name={"wikidata_id"}
            fullWidth
            variant="outlined"
            label={"Wiki data ID"}
            multiline
            value={formik.values["wikidata_id"]}
            onChange={formik.handleChange}
            // helperText={formik.errors[field]}
            // error={formik.touched[field] && Boolean(formik.errors[field])}
            placeholder={
              initialValues["wikidata_id"]
                ? "Please enter a value"
                : "this value was initially empty or null"
            }
          />
        </Box>
        <Box
          marginBottom="1rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            name={"wikipedia_id"}
            fullWidth
            variant="outlined"
            label={"wikepedia url"}
            multiline
            value={formik.values["wikipedia_id"]}
            onChange={formik.handleChange}
            // helperText={formik.errors[field]}
            // error={formik.touched[field] && Boolean(formik.errors[field])}
            placeholder={
              initialValues["wikipedia_id"]
                ? "Please enter a value"
                : "this value was initially empty or null"
            }
          />
        </Box>
        {/* this one should be a select with adding option */}
        {/* <Box
          marginBottom="1rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            name={"focus_area"}
            fullWidth
            variant="outlined"
            label={"wikepedia url"}
            multiline
            value={formik.values["focus_area"]}
            onChange={formik.handleChange}
            // helperText={formik.errors[field]}
            // error={formik.touched[field] && Boolean(formik.errors[field])}
            placeholder={
              initialValues["focus_area"]
                ? "Please enter a value"
                : "this value was initially empty or null"
            }
          />
        </Box> */}
        <Box
          display="flex"
          justifyContent="center"
          marginBottom="1rem"
          alignSelf="center"
          width="150px"
          height="40px"
          position="sticky"
        >
          <Button
            variant="contained"
            height="100%"
            fullWidth
            color="primary"
            type="submit"
          >
            Update
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
