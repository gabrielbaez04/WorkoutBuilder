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
import { Redirect } from 'react-router-dom';
import auth from '../auth/auth-helper';
import { read, update } from './api-user';

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

  title: {
    margin: theme.spacing.unit * 2,
    color: theme.palette.protectedTitle,
  },
  error: {
    verticalAlign: 'middle',
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

class EditProfile extends Component {
  constructor({ match }) {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      redirectToProfile: false,
      error: '',
    };
    this.match = match;
  }

  componentDidMount = () => {
    const jwt = auth.isAuthenticated();
    read({
      userId: this.match.params.userId,
    }, { t: jwt.token }).then((data) => {
      if (data.error) {
        this.setState({ error: data.error });
      } else {
        this.setState({ name: data.name, email: data.email });
      }
    });
  }

  clickSubmit = (e) => {
    const { name, email, password } = this.state;
    e.preventDefault();
    const jwt = auth.isAuthenticated();
    const user = {
      name: name || undefined,
      email: email || undefined,
      password: password || undefined,
    };
    update({
      userId: this.match.params.userId,
    }, {
      t: jwt.token,
    }, user).then((data) => {
      if (data.error) {
        this.setState({ error: data.error });
      } else {
        this.setState({ userId: data._id, redirectToProfile: true });
      }
    });
  }

  handleChange = name => (event) => {
    const { value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { classes } = this.props;
    const {
      userId, name, email, password, error,
    } = this.state;
    if (this.state.redirectToProfile) {
      return (<Redirect to={`/user/${userId}`} />);
    }
    return (
      <form onSubmit={this.clickSubmit}>
        <Card className={classes.card}>
          <CardContent>
            <Typography type="headline" component="h2" className={classes.title}>
              Edit Profile
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
    );
  }
}

EditProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditProfile);
