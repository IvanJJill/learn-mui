import React, { Component } from 'react';
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/core/Menu';

class Header extends Component {

    render() {
        return (
            <div>
                <AppBar position='static'>
                    <Toolbar>
                        <IconButton color='inherit' aria-label="Menu"> 
                            <MenuIcon open={false}/>
                        </IconButton>
                        <Typography variant='h6' color='inherit'  >
                            Content
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Header;