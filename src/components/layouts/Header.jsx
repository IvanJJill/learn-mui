import React, { Component, Fragment } from 'react';
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/core/Menu';
import CreateDialog from '../dialogs/CreateDialog';

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };

class Header extends Component {

    render() {
        return (
            <Fragment>
                <AppBar position='static'>
                    <Toolbar>
                        <IconButton color='inherit' aria-label="Menu"> 
                            <MenuIcon open={false}/>
                        </IconButton>
                        <Typography variant='h6' color='inherit' style={styles.grow} >
                            Content
                        </Typography>
                        <CreateDialog muscles={this.props.muscles} onCreate={this.props.onExcerciseCreate}/>
                    </Toolbar>
                </AppBar>
            </Fragment>
        )
    }
}

export default Header;