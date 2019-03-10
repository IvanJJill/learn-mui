import React, { Component } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './paneStyle';


export default class RightPane extends Component {
    render() {
        const { styles } = this.props;

        return (
            <Grid item sm>
                <Paper className={styles.paper}>
                    <Typography variant="h3">
                        Welcome!
                    </Typography>
                    <Typography variant="body2" className={styles.welcomeBody}>
                        Will display an excercise when selected in Left Pane
                    </Typography>
                </Paper>
            </Grid>
        )
    }
}