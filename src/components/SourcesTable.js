import { DataGrid } from "@material-ui/data-grid";
import { Container, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import InfoIcon from "@material-ui/icons/Info";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AddSource from "./AddSource";
import { data } from "../constants/data";
const mapDataToRows = (data) =>
  data.data.source1.map((source) => ({
    // change ID if it isn't universally unique!!
    id: `${source.long_name}(${source.short_name})`,
    Topic: source.Topic,
    geo: source.geo,
    name: `${source.long_name}(${source.short_name})`,
    time_period: source.time_period,
  }));

function SourcesTable() {
  const columns = [
    {
      field: "Topic",
      headerName: "Topic",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "geo",
      headerName: "Geography",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
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
    {
      field: "info",
      headerName: "view full details",
      width: 200,
      disableClickEventBubbling: true,
      sortable: false,
      filterable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        const onClick = () => {
          const api = params.api;
          const fields = api
            .getAllColumns()
            .map((c) => c.field)
            .filter((c) => c !== "__check__" && !!c);
          const thisRow = {};

          fields.forEach((f) => {
            thisRow[f] = params.getValue(params.id, f);
          });
          const clickedSource = data.data.source1.findIndex(
            (source) =>
              `${source.long_name}(${source.short_name})` === thisRow.name,
          );
          history.push({
            //i'm passing the data directly
            //note: direct access to page without passing from button will break the app.
            pathname: thisRow.name.split(" ").join("-"),
            state: {
              source_data: data.data.source1[clickedSource],
            },
          });
        };

        return (
          <IconButton onClick={onClick}>
            <InfoIcon style={{ color: "blue" }} />
          </IconButton>
        );
      },
    },
    {
      field: "",
      headerName: "",
      width: 50,
      disableClickEventBubbling: true,
      sortable: false,
      filterable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        //handle delete
        const onClick = () => {
          const api = params.api;
          const fields = api
            .getAllColumns()
            .map((c) => c.field)
            .filter((c) => c !== "__check__" && !!c);
          const thisRow = {};
          fields.forEach((f) => {
            thisRow[f] = params.getValue(params.id, f);
          });
          //delete logic here using
          return alert(JSON.stringify(thisRow, null, 4));
        };
        return (
          <IconButton onClick={onClick}>
            <DeleteIcon style={{ color: "red" }} />
          </IconButton>
        );
      },
    },
  ];
  const history = useHistory();
  const [rows, setRows] = useState(null);

  useEffect(() => {
    //fetch data
    setTimeout(() => {
      setRows(mapDataToRows(data));
    }, 1000);
  }, []);
  if (!rows) return <div>Loading...</div>;
  return (
    <>
      <Container maxWidth="lg" style={{ marginTop: "2rem" }}>
        <div style={{ display: "flex", height: "50vh" }}>
          <div style={{ flexGrow: "1" }}>
            <DataGrid rows={rows} columns={columns} />
          </div>
        </div>
        <AddSource />
      </Container>
    </>
  );
}

export default SourcesTable;
