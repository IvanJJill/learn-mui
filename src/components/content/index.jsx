import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import LeftPane from './LeftPane';
import RightPane from './RightPane'
import styles from './paneStyle';
import { withStyles } from '@material-ui/core/styles';

class Content extends Component {

    render() {
        const {classes, excercises, category, onExcerciseSelect, selectedExcercise} = this.props;
        return (
            <Grid container spacing={16}>
                <LeftPane styles={classes} excercises={excercises} category={category} onSelect={onExcerciseSelect}/>
                <RightPane styles={classes} excercise={selectedExcercise}/>
            </Grid>
        )
    }
}

export default withStyles (styles)(Content)