import { Box, Button } from "@material-ui/core";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useFormik } from "formik";
import React from "react";
import { MemoizedTextField } from "./MemoizedTextField";
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
  // all fields are included except for focus_area
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
        <MemoizedTextField
          name="long_name"
          label="Source full name"
          value={formik.values["long_name"]}
          handleChange={formik.handleChange}
          multiline={true}
          helperText={formik.errors["long_name"]}
          error={
            formik.touched["long_name"] && Boolean(formik.errors["long_name"])
          }
          initialValue={initialValues["long_name"]}
        />
        <MemoizedTextField
          name="short_name"
          label="Source short name"
          value={formik.values["short_name"]}
          handleChange={formik.handleChange}
          multiline={true}
          helperText={formik.errors["short_name"]}
          error={
            formik.touched["short_name"] && Boolean(formik.errors["short_name"])
          }
          initialValue={initialValues["short_name"]}
        />
        <MemoizedTextField
          name="orig_source"
          label="original source"
          value={formik.values["orig_source"]}
          handleChange={formik.handleChange}
          multiline={true}
          helperText={formik.errors["orig_source"]}
          error={
            formik.touched["orig_source"] &&
            Boolean(formik.errors["orig_source"])
          }
          initialValue={initialValues["orig_source"]}
        />
        <MemoizedTextField
          name="description"
          label="Description"
          value={formik.values["description"]}
          handleChange={formik.handleChange}
          multiline={true}
          helperText={formik.errors["description"]}
          error={
            formik.touched["description"] &&
            Boolean(formik.errors["description"])
          }
          initialValue={initialValues["description"]}
        />
        <MemoizedTextField
          name="Original"
          label="Original"
          value={formik.values["Original"]}
          handleChange={formik.handleChange}
          multiline={true}
          helperText={formik.errors["Original"]}
          error={
            formik.touched["Original"] && Boolean(formik.errors["Original"])
          }
          initialValue={initialValues["Original"]}
        />
        <MemoizedTextField
          name="Suggested"
          label="Suggested"
          value={formik.values["Suggested"]}
          handleChange={formik.handleChange}
          multiline={true}
          helperText={formik.errors["Suggested"]}
          error={
            formik.touched["Suggested"] && Boolean(formik.errors["Suggested"])
          }
          initialValue={initialValues["Suggested"]}
        />
        <MemoizedTextField
          name="periodicity"
          label="Periodicity"
          value={formik.values["periodicity"]}
          handleChange={formik.handleChange}
          multiline={true}
          helperText={formik.errors["periodicity"]}
          error={
            formik.touched["periodicity"] &&
            Boolean(formik.errors["periodicity"])
          }
          initialValue={initialValues["periodicity"]}
        />
        <MemoizedTextField
          name="type"
          label="Type"
          value={formik.values["type"]}
          handleChange={formik.handleChange}
          multiline={true}
          helperText={formik.errors["type"]}
          error={formik.touched["type"] && Boolean(formik.errors["type"])}
          initialValue={initialValues["type"]}
        />
        <MemoizedTextField
          name="Topic"
          label="Topic"
          value={formik.values["Topic"]}
          handleChange={formik.handleChange}
          multiline={true}
          helperText={formik.errors["Topic"]}
          error={formik.touched["Topic"] && Boolean(formik.errors["Topic"])}
          initialValue={initialValues["Topic"]}
        />
        <MemoizedTextField
          name="Population"
          label="Population"
          value={formik.values["Population"]}
          handleChange={formik.handleChange}
          multiline={true}
          helperText={formik.errors["Population"]}
          error={
            formik.touched["Population"] && Boolean(formik.errors["Population"])
          }
          initialValue={initialValues["Population"]}
        />
        <MemoizedTextField
          name="geo"
          label="Geography"
          value={formik.values["geo"]}
          handleChange={formik.handleChange}
          multiline={true}
          helperText={formik.errors["geo"]}
          error={formik.touched["geo"] && Boolean(formik.errors["geo"])}
          initialValue={initialValues["geo"]}
        />

        <MemoizedTextField
          name="geo_detail"
          label="Geography details"
          value={formik.values["geo_detail"]}
          handleChange={formik.handleChange}
          multiline={true}
          helperText={formik.errors["geo_detail"]}
          error={
            formik.touched["geo_detail"] && Boolean(formik.errors["geo_detail"])
          }
          initialValue={initialValues["geo_detail"]}
        />
        <MemoizedTextField
          name="geo_short"
          label="Geography Short"
          value={formik.values["geo_short"]}
          handleChange={formik.handleChange}
          multiline={true}
          helperText={formik.errors["geo_short"]}
          error={
            formik.touched["geo_short"] && Boolean(formik.errors["geo_short"])
          }
          initialValue={initialValues["geo_short"]}
        />
        <MemoizedTextField
          name="img"
          label="static image name"
          value={formik.values["img"]}
          handleChange={formik.handleChange}
          multiline={true}
          helperText={formik.errors["img"]}
          error={formik.touched["img"] && Boolean(formik.errors["img"])}
          initialValue={initialValues["img"]}
        />
        <MemoizedTextField
          name="Flag_Behavior"
          label="Flag Behavior"
          value={formik.values["Flag_Behavior"]}
          handleChange={formik.handleChange}
          multiline={true}
          helperText={formik.errors["Flag_Behavior"]}
          error={
            formik.touched["Flag_Behavior"] &&
            Boolean(formik.errors["Flag_Behavior"])
          }
          initialValue={initialValues["Flag_Behavior"]}
        />
        <MemoizedTextField
          name="Flag_Opinion"
          label="Flag Opinion"
          value={formik.values["Flag_Opinion"]}
          handleChange={formik.handleChange}
          helperText={formik.errors["Flag_Opinion"]}
          error={
            formik.touched["Flag_Opinion"] &&
            Boolean(formik.errors["Flag_Opinion"])
          }
          initialValue={initialValues["Flag_Opinion"]}
          type="number"
        />
        <MemoizedTextField
          name="time_period"
          label="Time period"
          value={formik.values["time_period"]}
          handleChange={formik.handleChange}
          helperText={formik.errors["time_period"]}
          error={
            formik.touched["time_period"] &&
            Boolean(formik.errors["time_period"])
          }
          initialValue={initialValues["time_period"]}
          multiline={true}
        />
        {/* number type inputs */}
        <MemoizedTextField
          name="sample_size_cols"
          label="sample size columns number"
          value={formik.values["sample_size_cols"]}
          handleChange={formik.handleChange}
          helperText={formik.errors["sample_size_cols"]}
          error={
            formik.touched["sample_size_cols"] &&
            Boolean(formik.errors["sample_size_cols"])
          }
          initialValue={initialValues["sample_size_cols"]}
          type="number"
        />
        <MemoizedTextField
          name="sample_size_rows"
          label="sample size rows number"
          value={formik.values["sample_size_rows"]}
          handleChange={formik.handleChange}
          helperText={formik.errors["sample_size_rows"]}
          error={
            formik.touched["sample_size_rows"] &&
            Boolean(formik.errors["sample_size_rows"])
          }
          initialValue={initialValues["sample_size_rows"]}
          type="number"
        />
        <MemoizedTextField
          name="Variables"
          label="Variables number"
          value={formik.values["Variables"]}
          handleChange={formik.handleChange}
          helperText={formik.errors["Variables"]}
          error={
            formik.touched["Variables"] && Boolean(formik.errors["Variables"])
          }
          initialValue={initialValues["Variables"]}
          type="number"
        />

        <MemoizedTextField
          name="re3data"
          label="re3data"
          value={formik.values["re3data"]}
          handleChange={formik.handleChange}
          helperText={formik.errors["re3data"]}
          error={formik.touched["re3data"] && Boolean(formik.errors["re3data"])}
          initialValue={initialValues["re3data"]}
        />

        <MemoizedTextField
          name="twitter"
          label="Twitter"
          value={formik.values["twitter"]}
          handleChange={formik.handleChange}
          helperText={formik.errors["twitter"]}
          error={formik.touched["twitter"] && Boolean(formik.errors["twitter"])}
          initialValue={initialValues["twitter"]}
        />
        <MemoizedTextField
          name="url_internal"
          label="Url internal"
          value={formik.values["url_internal"]}
          handleChange={formik.handleChange}
          helperText={formik.errors["url_internal"]}
          error={
            formik.touched["url_internal"] &&
            Boolean(formik.errors["url_internal"])
          }
          initialValue={initialValues["url_internal"]}
        />
        <MemoizedTextField
          name="url_orig"
          label="Url Original"
          value={formik.values["url_orig"]}
          handleChange={formik.handleChange}
          helperText={formik.errors["url_orig"]}
          error={
            formik.touched["url_orig"] && Boolean(formik.errors["url_orig"])
          }
          initialValue={initialValues["url_orig"]}
        />
        <MemoizedTextField
          name="wikidata_id"
          label="Wikidata Id"
          value={formik.values["wikidata_id"]}
          handleChange={formik.handleChange}
          helperText={formik.errors["wikidata_id"]}
          error={
            formik.touched["wikidata_id"] &&
            Boolean(formik.errors["wikidata_id"])
          }
          initialValue={initialValues["wikidata_id"]}
        />
        <MemoizedTextField
          name="wikipedia_id"
          label="Wikipidia URL"
          value={formik.values["wikipedia_id"]}
          handleChange={formik.handleChange}
          helperText={formik.errors["wikipedia_id"]}
          error={
            formik.touched["wikipedia_id"] &&
            Boolean(formik.errors["wikipedia_id"])
          }
          initialValue={initialValues["wikipedia_id"]}
        />
        <MemoizedTextField
          name="text"
          label="Text"
          value={formik.values["text"]}
          handleChange={formik.handleChange}
          helperText={formik.errors["text"]}
          multiline={true}
          error={formik.touched["text"] && Boolean(formik.errors["text"])}
          initialValue={initialValues["text"]}
        />

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
