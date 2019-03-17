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
  DialogContentText,
  DialogTitle,
  FormControl
} from '@material-ui/core';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: 10,
    marginRight: 10,
    width: 200,
  },
  formControl: {
    marginLeft: 20,
    marginRight: 30,
    width: 200,
  },
}
export default class Create extends Component {
  state = {
    open: false,
    excercise: {
      title: '',
      description: '',
      muscle: '',
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

  render() {
    const { excercise: { title, description, muscle } } = this.state,
      { muscles } = this.props;
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
            <DialogContentText>
              <form className={styles.container} noValidate autoComplete="off">
                <TextField
                  id="standard-name"
                  label="Excercise Name"
                  className={styles.textField}
                  value={title}
                  onChange={this.handleChange('title')}
                  margin="normal"
                />
                <br />
                <TextField
                  id="standard-name"
                  label="Description"
                  className={styles.textField}
                  multiline
                  rowsMax="4"
                  value={description}
                  onChange={this.handleChange('description')}
                  margin="normal"
                />
                <br />
                <FormControl className={styles.formControl}>
                  <InputLabel htmlFor="muscle">Muscle group</InputLabel>
                  <Select
                    value={muscle}
                    onChange={this.handleChange('muscle')}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {muscles.map(muscle => 
                      <MenuItem value={muscle.name} key={muscle.id}>{muscle.name}</MenuItem>
                    )}
                  </Select>
                </FormControl>
              </form>
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