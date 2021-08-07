import {
  Typography,
  Button,
  Box,
  Paper,
  Container,
  Divider,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import React from "react";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import { MemoizedTextField as TextField } from "../../layout/MemoizedTextField";
import { useMutation } from "@apollo/react-hooks";
import { ADD_SOURCE } from "../../../queries/sources";
import { useSnackbar } from "material-ui-snackbar-provider";
import AddIcon from "@material-ui/icons/Add";

const AddSource = () => {
  const history = useHistory();
  const [addSource] = useMutation(ADD_SOURCE);
  const snackbar = useSnackbar();
  const formik = useFormik({
    initialValues: {
      Data_Type: "",
      Flag_Behavior: null,
      Flag_Opinion: null,
      Population: "",
      Variables: null,
      Topic: "",
      description: "",
      geo: "",
      geo_detail: "",
      geo_short: "",
      id: "",
      long_name: "",
      periodicity: "",
      re3data: "",
      sample_size_cols: null,
      sample_size_rows: null,
      text: false,
      time_period: "",
      twitter: "",
      url_internal: "",
      url_orig: "",
      wikidata_id: "",
      wikipedia_id: "",
    },
    onSubmit: async (values) => {
      await addSource({
        variables: {
          ...values,
        },
      });
      snackbar.showMessage("Data Source Created");
      history.push("/sources");
    },
  });

  return (
    <Container maxWidth="md">
      <Paper
        style={{
          padding: "2rem",
          marginBottom: "2rem",
        }}
      >
        <Box display="flex" alignItems="center">
          <AddIcon color="primary" fontSize="large" />
          <Typography variant="h6" noWrap>
            Create a Data Sources
          </Typography>
        </Box>

        <Divider />
        <form onSubmit={formik.handleSubmit}>
          <TextField
            margin="normal"
            label="Short Name (id)"
            fullWidth
            variant="outlined"
            name="id"
            id="id"
            onChange={formik.handleChange}
            value={formik.values.id}
          />
          <TextField
            margin="normal"
            label="Long Name"
            fullWidth
            variant="outlined"
            name="long_name"
            id="long_name"
            onChange={formik.handleChange}
            value={formik.values.long_name}
          />
          <TextField
            margin="normal"
            label="Data Type"
            fullWidth
            variant="outlined"
            name="Data_Type"
            id="Data_Type"
            onChange={formik.handleChange}
            value={formik.values.Data_Type}
          />

          <TextField
            margin="normal"
            label="Topic"
            fullWidth
            variant="outlined"
            name="Topic"
            id="Topic"
            onChange={formik.handleChange}
            value={formik.values.Topic}
          />

          <TextField
            multiline
            minRows={5}
            margin="normal"
            label="description"
            fullWidth
            variant="outlined"
            name="description"
            id="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          <Divider />
          <FormControlLabel
            control={
              <Checkbox
                onChange={formik.handleChange}
                checked={formik.values.text}
                name="text"
                id="text"
                color="primary"
              />
            }
            label="Text"
          />
          <TextField
            margin="normal"
            label="geo"
            fullWidth
            variant="outlined"
            name="geo"
            id="geo"
            onChange={formik.handleChange}
            value={formik.values.geo}
          />
          <TextField
            margin="normal"
            label="geo_short"
            fullWidth
            variant="outlined"
            name="geo_short"
            id="geo_short"
            onChange={formik.handleChange}
            value={formik.values.geo_short}
          />
          <TextField
            margin="normal"
            label="geo_detail"
            multiline
            minRows={5}
            fullWidth
            variant="outlined"
            name="geo_detail"
            id="geo_detail"
            onChange={formik.handleChange}
            value={formik.values.geo_detail}
          />
          <Divider />
          <TextField
            margin="normal"
            label="Variables"
            fullWidth
            variant="outlined"
            type="number"
            name="Variables"
            id="Variables"
            onChange={formik.handleChange}
            value={formik.values.Variables}
          />
          <TextField
            margin="normal"
            label="sample size rows"
            fullWidth
            variant="outlined"
            type="number"
            name="sample_size_rows"
            id="sample_size_rows"
            onChange={formik.handleChange}
            value={formik.values.sample_size_rows}
          />
          <TextField
            margin="normal"
            label="sample size cols"
            fullWidth
            variant="outlined"
            type="number"
            name="sample_size_cols"
            id="sample_size_cols"
            onChange={formik.handleChange}
            value={formik.values.sample_size_cols}
          />
          <Divider />
          <TextField
            margin="normal"
            label="Flag Opinion"
            fullWidth
            variant="outlined"
            type="number"
            name="Flag_Opinion"
            id="Flag_Opinion"
            onChange={formik.handleChange}
            value={formik.values.Flag_Opinion}
          />
          <TextField
            margin="normal"
            label="Flag Behavior"
            fullWidth
            variant="outlined"
            type="number"
            name="Flag_Behavior"
            id="Flag_Behavior"
            onChange={formik.handleChange}
            value={formik.values.Flag_Behavior}
          />
          <TextField
            margin="normal"
            label="Population"
            fullWidth
            variant="outlined"
            type="number"
            name="Population"
            id="Population"
            onChange={formik.handleChange}
            value={formik.values.Population}
          />

          <Divider />
          <TextField
            margin="normal"
            label="Time Period"
            fullWidth
            variant="outlined"
            name="time_period"
            id="time_period"
            onChange={formik.handleChange}
            value={formik.values.time_period}
          />
          <TextField
            margin="normal"
            label="periodicity"
            fullWidth
            variant="outlined"
            name="periodicity"
            id="periodicity"
            onChange={formik.handleChange}
            value={formik.values.periodicity}
          />
          <TextField
            margin="normal"
            label="re3data"
            fullWidth
            variant="outlined"
            name="re3data"
            id="re3data"
            onChange={formik.handleChange}
            value={formik.values.re3data}
          />
          <TextField
            margin="normal"
            label="twitter"
            fullWidth
            variant="outlined"
            name="twitter"
            id="twitter"
            onChange={formik.handleChange}
            value={formik.values.twitter}
          />
          <TextField
            margin="normal"
            label="url Internal"
            fullWidth
            variant="outlined"
            name="url_internal"
            id="url_internal"
            onChange={formik.handleChange}
            value={formik.values.url_internal}
          />
          <TextField
            margin="normal"
            label="url orig"
            fullWidth
            variant="outlined"
            name="url_orig"
            id="url_orig"
            onChange={formik.handleChange}
            value={formik.values.url_orig}
          />
          <TextField
            margin="normal"
            label="wikidata_id"
            fullWidth
            variant="outlined"
            name="wikidata_id"
            id="wikidata_id"
            onChange={formik.handleChange}
            value={formik.values.wikidata_id}
          />
          <TextField
            margin="normal"
            label="wikipedia_id"
            fullWidth
            variant="outlined"
            name="wikipedia_id"
            id="wikipedia_id"
            onChange={formik.handleChange}
            value={formik.values.wikipedia_id}
          />

          <Box display="flex" justifyContent="flex-end" mt="2.5rem">
            <Button
              color="secondary"
              variant="outlined"
              size={"large"}
              style={{
                marginRight: "1rem",
              }}
              onClick={() => history.push("/sources")}
            >
              Cancel
            </Button>

            <Button
              color="primary"
              variant="contained"
              size={"large"}
              type={"submit"}
              startIcon={<AddIcon />}
            >
              Create
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default AddSource;
