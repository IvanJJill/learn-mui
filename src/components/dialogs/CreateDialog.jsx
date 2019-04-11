import React, { Component, Fragment } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ExcerciseForm from './forms/ExcerciseForm';

const styles = theme => ({
  formControl: {
    width: "300px"
  }
})

class CreateDialog extends Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  Actions = () => {
    return (
      <>
        <Button onClick={this.handleClose} color="primary">
          Cancel
        </Button>
        <Button type="submit" color="primary" variant="contained">
          Create
        </Button>
      </>
    )
  }

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
          fullWidth={true}
          maxWidth="xs"
        >
          <DialogTitle id="form-dialog-title">Create a new excercise</DialogTitle>
          <DialogContent>
            <ExcerciseForm
              onFinish={this.handleClose}
              onSubmit={this.props.onCreate}
              actions={actions => ( <this.Actions />)}
              {...this.props}
            />
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

export default withStyles(styles)(CreateDialog);
