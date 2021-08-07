import React from "react";
import Grid from "@material-ui/core/Grid";

import Paper from "@material-ui/core/Paper";
import MainLayout from "../../layout/MainLayout";
import { Container, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function Index() {
  const history = useHistory();

  return (
    <MainLayout>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper
              style={{
                padding: "3rem",
                textAlign: "center",
                cursor: "pointer",
                minWidth: "200px",
              }}
              onClick={() => history.push("/sources")}
            >
              <Typography variant="h5">Data Sources</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </MainLayout>
  );
}
