import React, { Component, Fragment } from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText  } from '@material-ui/core';

export default class LeftPane extends Component {
    render() {
        const { styles, excercises } = this.props;
        return (
            <Grid item sm={5}>
                <Paper className={styles.paper}>
                    {excercises.map(([group, excercises]) => {
                        return (
                            <Fragment key={group}>
                                <Typography
                                    variant="h6"
                                    style={{ textTransform: "capitalize" }}
                                >
                                    {group}
                                </Typography>
                                { excercises.map(({id, title}) => 
                                <List component="ul" key={id}>
                                    <ListItem button>
                                        <ListItemText primary={title} />
                                    </ListItem>
                                </List>
                                )}
                            </Fragment>
                        )
                    })}
                </Paper>
            </Grid>
        )
    }
}
