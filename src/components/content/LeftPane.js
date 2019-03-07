import React, { Component } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

export default class LeftPane extends Component {
    render() {
        const { styles, excercises } = this.props;
        return (
            <Grid item sm={5}>
                <Paper className={styles.paper}>
                    { excercises.map(([group, excercises]) => {
                        <Typography variant="h6" >
                            {group}
                        </Typography>
                    })}
                </Paper>
            </Grid>
        )
    }
}
