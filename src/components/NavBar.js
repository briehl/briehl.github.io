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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


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
      <AppBar position='fixed' style={{background: 'transparent', boxShadow: 'none', color: 'white'}}>
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
              <IconButton color="inherit"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
