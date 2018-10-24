import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Edit from '@material-ui/icons/Edit';
import Person from '@material-ui/icons/Person';
import Divider from '@material-ui/core/Divider';
import { Redirect, Link } from 'react-router-dom';
import DeleteUser from './DeleteUser';
import auth from '../auth/auth-helper';
import { read } from './api-user';

const styles = theme => ({
  root: theme.mixins.gutters({
    maxWidth: '95%',
    margin: 'auto',
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: '24px',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '60%',
    },
  }),
  title: {
    margin: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 2}px`,
    color: theme.palette.protectedTitle,
  },
});

class Profile extends Component {
  constructor({ match }) {
    super();
    this.state = {
      user: '',
      redirectToSignin: false,
    };
    this.match = match;
  }

  init = (userId) => {
    const jwt = auth.isAuthenticated();
    read({
      userId,
    }, { t: jwt.token }).then((data) => {
      if (data.error) {
        this.setState({ redirectToSignin: true });
      } else {
        this.setState({ user: data });
      }
    });
  }

  componentWillReceiveProps = (props) => {
    const { match } = props;
    this.init(match.params.userId);
  }

  componentDidMount = () => {
    this.init(this.match.params.userId);
  }

  render() {
    const { classes, location } = this.props;
    const { redirectToSignin, user } = this.state;
    if (redirectToSignin) {
      return <Redirect to={{ pathname: '/signin', updateMenu: location.updateMenu }} />;
    }
    return (
      <Paper className={classes.root} elevation={4}>
        <Typography type="title" className={classes.title}>
          Profile
        </Typography>
        <List dense>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Person />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={user.name} secondary={user.email} />
            {' '}
            {
             auth.isAuthenticated().user && auth.isAuthenticated().user._id === user._id
              && (
              <ListItemSecondaryAction>
                <Link to={`/user/edit/${user._id}`}>
                  <IconButton aria-label="Edit" color="primary">
                    <Edit />
                  </IconButton>
                </Link>
                <DeleteUser userId={user._id} updateMenu={location.updateMenu} />
              </ListItemSecondaryAction>
              )
            }
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary={`Joined: ${(
              new Date(user.created)).toDateString()}`}
            />
          </ListItem>
        </List>
      </Paper>
    );
  }
}
Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);
