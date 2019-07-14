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
    width: "90%"
  },
  actions: {
    margin: theme.spacing.unit,
    marginTop: "1em",
    width: "40%",
    display: "inline-block"
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
    const classes = this.props.classes
    return (
      <div style={{textAlign: "center"}}>
        <Button type="submit" color="primary" variant="contained" className={classes.actions}>
          Create
        </Button>
        <Button onClick={this.handleClose} variant="outlined" color="secondary" className={classes.actions}>
          Cancel
        </Button>
      </div>
    )
  }

  render() {
    return (
      <Fragment>
        <Fab
          size="medium"
          color="secondary"
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
              actions={() => ( <this.Actions />)}
              {...this.props}
            />
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

export default withStyles(styles)(CreateDialog);
