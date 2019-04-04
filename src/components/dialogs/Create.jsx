import React, { Component, Fragment } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  formControl: {
    width: "300px"
  }
})

class Create extends Component {
  state = {
    open: false,
    excercise: {
      title: '',
      description: '',
      muscule: '',
    }
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      excercise: {
        ...this.state.excercise,
        [name]: value
      }
    });
  };

  handleSubmit = (e) => {
    // TODO: form validation
    e.preventDefault();
    const { excercise } = this.state;
    this.props.onCreate(excercise);
    this.setState({excercise: {
      title: '',
      description: '',
      muscule: '',
    }})
    this.handleClose();
  }

  render() {
    const { excercise: { title, description, muscule } } = this.state,
      { muscles, classes } = this.props;
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
          <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
            <DialogContent>
              <TextField
                id="standard-name"
                label="Excercise Name"
                className={classes.formControl}
                value={title}
                onChange={this.handleChange('title')}
                margin="normal"
              />
              <br />
              <TextField
                id="standard-name"
                label="Description"
                className={classes.formControl}
                multiline
                rowsMax="4"
                value={description}
                onChange={this.handleChange('description')}
                margin="normal"
              />
              <br />
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="muscule">Muscle group</InputLabel>
                <Select
                  value={muscule}
                  onChange={this.handleChange('muscule')}
                >
                  {muscles.map(muscle =>
                    <MenuItem value={muscle.id} key={muscle.id}>{muscle.name}</MenuItem>
                  )}
                </Select>
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary" variant="contained">
                Create
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Create);