import React, { Component } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import EditDialog from '../dialogs/EditDialog'
import styles from './paneStyle';


class RightPane extends Component {
    render() {
        const { styles, excercise: { id, title, description }, editMode } = this.props,
            { excercise, muscles, onSave } = this.props;

        return (
            <Grid item xs={12} sm={6}>

                <Paper className={styles.paper}>
                    {editMode ?
                        <div>
                            <EditDialog excercise={excercise} muscles={muscles} onSubmit={onSave}/>
                        </div>
                        : <>
                            {!!!id &&
                                <>
                                    <Typography variant="h3">
                                        Welcome!
                                    </Typography>
                                    <Typography variant="body2" className={styles.welcomeBody}>
                                        Will display an excercise when selected in Left Pane
                                    </Typography>
                                </>
                            }
                            {
                                !!id &&
                                <>
                                    <Typography variant="h4">
                                        {title}
                                    </Typography>
                                    <Typography variant="body1" className={styles.welcomeBody}>
                                        {description}
                                    </Typography>
                                </>
                            }
                        </>
                    }
                </Paper>
            </Grid>
        )
    }
}

export default withStyles(styles)(RightPane)