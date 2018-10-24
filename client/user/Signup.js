import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom';
import { create } from './api-user';

const styles = theme => ({
  card: {
    maxWidth: '95%',
    margin: 'auto',
    textAlign: 'center',
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: '24px',
  },
  [theme.breakpoints.up('sm')]: {
    card: {
      maxWidth: '60%',
    },
  },
  error: {
    verticalAlign: 'middle',
  },
  title: {
    marginTop: theme.spacing.unit * 2,
    color: theme.palette.openTitle,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing.unit * 2,
  },
});

class Signup extends Component {
  state = {
    name: '',
    password: '',
    email: '',
    open: false,
    error: '',
  }

  handleChange = name => (event) => {
    const { value } = event.target;
    this.setState({ [name]: value });
  }

  clickSubmit = (e) => {
    const { name, email, password } = this.state;
    e.preventDefault();
    const user = {
      name: name || undefined,
      email: email || undefined,
      password: password || undefined,
    };
    create(user).then((data) => {
      if (data.error) {
        this.setState({ error: data.error });
      } else {
        this.setState({ error: '', open: true });
      }
    });
  }

  render() {
    const {
      name, email, password, error, open,
    } = this.state;
    const { classes, location } = this.props;
    return (
      <div>
        <form onSubmit={this.clickSubmit}>
          <Card className={classes.card}>
            <CardContent>
              <Typography type="headline" component="h2" className={classes.title}>
                Sign Up
              </Typography>
              <TextField id="name" label="Name" className={classes.textField} value={name} onChange={this.handleChange('name')} margin="normal" />
              <br />
              <TextField id="email" type="email" label="Email" className={classes.textField} value={email} onChange={this.handleChange('email')} margin="normal" />
              <br />
              <TextField id="password" type="password" label="Password" className={classes.textField} value={password} onChange={this.handleChange('password')} margin="normal" />
              <br />
              {' '}
              {
                error && (
                <Typography component="p" color="error">
                  <Icon color="error" className={classes.error}>error</Icon>
                  {error}
                </Typography>
                )
              }
            </CardContent>
            <CardActions>
              <Button color="primary" variant="raised" type="submit" className={classes.submit}>Submit</Button>
            </CardActions>
          </Card>
        </form>
        <Dialog open={open} disableBackdropClick>
          <DialogTitle>New Account</DialogTitle>
          <DialogContent>
            <DialogContentText>
              New account successfully created.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Link to={{ pathname: '/signin', updateMenu: location.updateMenu }}>
              <Button color="primary" autoFocus="autoFocus" variant="raised">
                Sign In
              </Button>
            </Link>
          </DialogActions>
        </Dialog>
      </div>);
  }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withStyles(styles)(Signup);
