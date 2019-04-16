import React, { Component, Fragment } from 'react';
import {
    Typography,
    Button
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ExcerciseForm from './forms/ExcerciseForm';

const styles = theme => ({
    formControl: {
        width: "90%"
    },
    button: {
        marginTop: '1em',
        width:'10em'
    },
})

class EditDialog extends Component {

    Actions = () => {
        const {classes} = this.props
        return (
            <>
                <Button type="submit" color="primary" variant="contained" className={classes.button}>
                    Save
                </Button>
            </>
        )
    }

    render() {
        return (
            <Fragment>
                <Typography variant="h5">Edit an excercise</Typography>
                <ExcerciseForm
                    onSubmit={this.props.onSubmit}
                    actions={() => (<this.Actions />)}
                    {...this.props}
                />
            </Fragment>
        );
    }
}

export default withStyles(styles)(EditDialog);
