import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom';

const styles = {
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
}

const NavBar = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography component={Link} to="/" variant="title" color="inherit">
                        Bill's page.
                    </Typography>
                    <IconButton color="inherit" className={classes.grow}>
                        <Badge badgeContent={17} color="secondary">
                            <NotificationsIcon>
                            </NotificationsIcon>
                        </Badge>
                    </IconButton>
                    <Button color="inherit" component={Link} to="/about">About</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withStyles(styles)(NavBar);
