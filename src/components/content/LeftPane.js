import React, { Component, Fragment } from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText, IconButton } from '@material-ui/core';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default class LeftPane extends Component {
    render() {
        const { styles, excercises, category, onSelect, onDelete, onEdit } = this.props;
        return (
            <Grid item sm={6} xs={12}>
                <Paper className={styles.paper}>
                    {excercises.map(([group, excercises]) =>
                        category === 'all' || category === group
                            ? <Fragment key={group}>
                                <Typography
                                    variant="h6"
                                    style={{ textTransform: "capitalize" }}
                                >
                                    {group}
                                </Typography>
                                {excercises.map(({ id, title }) =>
                                    <List component="ul" key={id}>
                                        <ListItem
                                            button
                                            onClick={() => onSelect(id)}
                                        >
                                            <ListItemText primary={title} />
                                            <ListItemSecondaryAction>
                                                <IconButton
                                                    aria-label="Edit"
                                                    onClick={() => onEdit(id)}
                                                >
                                                    <EditIcon />
                                                </IconButton>
                                                <IconButton
                                                    aria-label="Delete"
                                                    onClick={() => onDelete(id)}
                                                >
                                                    <DeleteIcon />
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    </List>
                                )}
                            </Fragment>
                            : null
                    )}
                </Paper>
            </Grid>
        )
    }
}
