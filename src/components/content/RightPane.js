import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './paneStyle';


export default class RightPane extends Component {
    render() {
        const { styles } = this.props;
        return (
            <Grid item sm>
                <Paper className={styles.paper}>
                    Right Pane
                </Paper>
            </Grid>
        )
    }
}