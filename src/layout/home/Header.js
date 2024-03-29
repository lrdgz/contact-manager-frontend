import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start">
            <b>
              <Link to="/" color="inherit">Contact APP</Link>
            </b>
          </IconButton>
          <Typography variant="h6" className={classes.title}></Typography>

          <NavLink to="/home">
            <Button>LOGIN</Button>
          </NavLink>
          <NavLink to="/home/register">
            <Button>Register</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}