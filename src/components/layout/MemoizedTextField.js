import TextField from "@material-ui/core/TextField";
import React from "react";

export const MemoizedTextField = React.memo(({ ...props }) => (
  <TextField {...props} />
));
