import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import auth from './auth-helper';
import { signin } from './api-auth';

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
    marginTop: theme.spacing.unit,
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

class Signin extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    redirectToReferrer: false,
  }

  clickSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { location } = this.props;
    const user = {
      email: email || undefined,
      password: password || undefined,
    };

    signin(user).then((data) => {
      if (data.error) {
        this.setState({ error: data.error });
      } else {
        auth.authenticate(data, () => {
          this.setState({ redirectToReferrer: true });
        });
      }
      if (location.updateMenu) location.updateMenu();
    });
  }

  handleChange = name => (event) => {
    this.setState({ [name]: event.target.value });
  }

  render() {
    const { classes, location } = this.props;
    const { from } = location.state || {
      from: {
        pathname: '/',
      },
    };
    const {
      redirectToReferrer, error, email, password,
    } = this.state;
    if (redirectToReferrer) {
      return (<Redirect to={from} />);
    }

    return (
      <form onSubmit={this.clickSubmit}>
        <Card className={classes.card}>
          <CardContent>
            <Typography type="headline" component="h2" className={classes.title}>
              Sign In
            </Typography>
            <TextField id="email" type="email" label="Email" className={classes.textField} value={email} onChange={this.handleChange('email')} margin="normal" />
            <br />
            <TextField id="password" type="password" label="Password" className={classes.textField} value={password} onChange={this.handleChange('password')} margin="normal" />
            <br />
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
    );
  }
}

Signin.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withStyles(styles)(Signin);
