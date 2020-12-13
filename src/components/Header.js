import React from "react";
import { Box, Typography } from "@material-ui/core";

export const Header = () => {
  return (
    <Box p={1}>
      <Typography variant="h4" component="h4">
        Expense Tracker
      </Typography>
    </Box>
  );
};
