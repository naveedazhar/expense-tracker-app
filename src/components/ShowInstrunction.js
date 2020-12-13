import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { Box } from "@material-ui/core";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "absolute",
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    right: "10px",
    position: "absolute",
  },
}));

export default function ShowInstrucion() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box container justify="flex-end" p={1}>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Show Instructions
      </Button>

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2>Instructions</h2>
          <p>
            Project 1 - Expense Tracker
            <br />
            This project is created based on lecture of Mr. Muhammad Mohsin The
            project also does the following: <br />
            Show instruction regarding use of system <br />
            Show "no transaction" message
            <br />
            Input validation using InputProps on TextField component of Material
            UI
            <br />
            Clear form after successfully adding new transaction
            <br />
            Material UI
            <br /> ...
          </p>
        </div>
      </Modal>
    </Box>
  );
}
