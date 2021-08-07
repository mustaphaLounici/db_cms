import { DataGrid } from "@material-ui/data-grid";
import { Container, Paper, Typography } from "@material-ui/core";

import { useHistory } from "react-router-dom";

import { useQuery } from "@apollo/react-hooks";
import { GET_DATA_SOURCES } from "../../../queries/sources";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

function SourcesTable() {
  const history = useHistory();
  const { data, loading, error } = useQuery(GET_DATA_SOURCES);

  // Data_Type: "Survey";
  // Flag_Behavior: null;
  // Flag_Opinion: 1;
  // Population: "Adults";
  // Topic: "Social Issues";
  // Variables: 192;
  // description: "The General Social Survey (GSS) has tracked the ‘pulse of America’ since 1972. With a cumulative sample size of over 57,000, this annual survey is widely regarded as ‘the single best source of data on societal trends’. It is widely used by academics, government agencies, and the private sector, and is the basis for 'over 20,000 scholarly publications'.";
  // geo: "United States";
  // geo_detail: null;
  // geo_short: "U.S.";
  // id: "GSS";
  // long_name: "General Social Survey";
  // periodicity: "Biennial";
  // re3data: "https://www.re3data.org/repository/r3d100010819";
  // sample_size_cols: 233;
  // sample_size_rows: 417336;
  // text: null;
  // time_period: "1972-2020";
  // twitter: "https://twitter.com/gss_norc";
  // url_internal: "ontopic.io/data/gss";
  // url_orig: "https://gss.norc.org/";
  // wikidata_id: "Q4118918";
  // wikipedia_id: "https://en.wikipedia.org/wiki/General_Social_Survey";

  const columns = [
    {
      field: "long_name",
      headerName: "Long Name",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "id",
      headerName: "Short Name",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "Data_Type",
      headerName: "Data Type",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "Population",
      headerName: "Population",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "Topic",
      headerName: "Topic",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "Variables",
      headerName: "Variables",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "geo",
      headerName: "geo",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "periodicity",
      headerName: "periodicity",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "re3data",
      headerName: "RE3 Data",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "time_period",
      headerName: "Time Period",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
  ];
  if (loading || error) return <div>Loading...</div>;
  return (
    <>
      <Container maxWidth="lg">
        <Paper
          style={{
            padding: "2rem",
            marginBottom: "2rem",
          }}
        >
          <Typography variant="h6" noWrap>
            Data Sources
          </Typography>
          <DataGrid
            onCellClick={({ id }) => {
              history.push(`/sources/${id}`);
            }}
            rows={data.data_source}
            columns={columns}
            style={{
              minHeight: "600px",
              marginTop: "3rem",
              // marginBottom: "4rem",
            }}
          />
        </Paper>
        <Fab
          color="primary"
          style={{
            position: "fixed",
            right: "20px",
            bottom: "20px",
          }}
          onClick={() => history.push("/sources/add")}
        >
          <AddIcon />
        </Fab>
      </Container>
    </>
  );
}

export default SourcesTable;
