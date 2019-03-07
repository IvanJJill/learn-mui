import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import LeftPane from './LeftPane';
import RightPane from './RightPane'
import styles from './paneStyle';
import { withStyles } from '@material-ui/core/styles';

class Content extends Component {
    render() {
        const {classes, excercises} = this.props;
        return (
            <Grid container spacing={16}>
                <LeftPane styles={classes} excercises={excercises}/>
                <RightPane styles={classes}/>
            </Grid>
        )
    }
}

export default withStyles (styles)(Content)