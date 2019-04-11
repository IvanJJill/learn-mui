import React, { Component, Fragment } from 'react';
import {
    Typography,
    Button
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ExcerciseForm from './forms/ExcerciseForm';

const styles = theme => ({
    formControl: {
        width: "500px"
    }
})

class EditDialog extends Component {

    Actions = () => {
        return (
            <>
                <Button type="submit" color="primary" variant="contained">
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
                    onFinish={() => { }}
                    onSubmit={this.props.onCreate}
                    actions={actions => (<this.Actions />)}
                    {...this.props}
                />
            </Fragment>
        );
    }
}

export default withStyles(styles)(EditDialog);
