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
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  title: {
    textAlign: 'left',
    paddingTop: '5px'
  }
}

const NavBar = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Grid container spacing={16} justify="space-between">
            <Grid item xs={9}>
              <Typography className={classes.title} component={Link} to="/" variant="title" color="inherit">
                Dissonance
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Button color="inherit" component={Link} to="/about">About</Button>
            </Grid>
            <Grid item xs={1}>
              <Button color="inherit" component={Link} to="/about">About</Button>
            </Grid>
            <Grid item xs={1}>
              <Button color="inherit" component={Link} to="/about">About</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(NavBar);
