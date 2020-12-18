import React from 'react';
import { Link } from 'react-router-dom'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Home from '@material-ui/icons/HomeRounded';
import Movie from '@material-ui/icons/MovieRounded';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { handleDrawer } from '../store/actions/UIActions';
import { connect } from 'react-redux';

const mapStateToProps = ({ uiState }) => {
    return { uiState }
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        drawerAction: (bool) => dispatch(handleDrawer(bool))
    }
};

const { innerWidth } = window;
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: 'rgba(0,0,0,1)',
    heigth: '100%'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#0f0f0f',
  },
  appBarShift: {
    width: innerWidth <= 420 ? '100vw' : `calc(100% - ${drawerWidth}px)`,
    marginLeft: innerWidth <= 420 ? '100vw' : drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: innerWidth <= 420 ? innerWidth : drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: innerWidth <= 420 ? innerWidth : drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: innerWidth <= 420 ? 0 : theme.spacing(1),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft:  innerWidth <= 420 ? -innerWidth : -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const Layout = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { drawerAction } = props;
  let open = props.uiState.drawerOpen;

  const handleDrawerOpen = () => {
    drawerAction(true);
  };

  const handleDrawerClose = () => {
    drawerAction(false);
  };

  return (
      <div className='App'>
        <div id="top" className={classes.root}>
        <CssBaseline />
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
            })}
        >
            <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
                Redux Chess
            </Typography>
            </Toolbar>
        </AppBar>
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
            paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
            </div>
            <Divider />
            <List className='nav-links'>
                <Link to="/" onClick={handleDrawerClose}>
                    <ListItem>
                        <ListItemIcon><Home /></ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                </Link>
            <Divider />
                <Link to="/chess" onClick={handleDrawerClose}>
                    <ListItem>
                        <ListItemIcon><Movie /></ListItemIcon>
                        <ListItemText primary="Play Chess" />
                    </ListItem>
                </Link>
            </List>
        </Drawer>
        <main 
            className={clsx(classes.content, {
            [classes.contentShift]: open,
            })}
        >
            <div className={classes.drawerHeader} />
            {props.children}
        </main>
        </div>
      </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)