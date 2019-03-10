import React, {Component, Fragment} from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';

export default class Create extends Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <Fragment>
        <Fab 
        size="medium"
        color="primary" 
        aria-label="Add" 
        onClick={this.handleClickOpen}
        >
          <AddIcon />
        </Fab>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create a new excercise</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Dialog Content
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.onCreate} color="primary" variant="contained">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}