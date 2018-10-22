import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link, withRouter } from 'react-router-dom';
import auth from '../auth/auth-helper';
import AuthMenu from './AuthMenu';
import NotAuthMenu from './NotAuthMenu';

class Menu extends React.Component {
  state = {
    authorized: false,
  }

  componentDidMount = () => {
    this.setState({ authorized: auth.isAuthenticated() });
  }

  handleUpdate = () => {
    this.setState({ authorized: auth.isAuthenticated() });
  }

  render() {
    const { authorized } = this.state;
    const { history } = this.props;
    const isActive = (historyLoc, path) => {
      if (historyLoc.location.pathname === path) { return { color: '#5bb4dc', borderBottom: '3px solid' }; }
      return { color: '#ffffff' };
    };
    return (
      <AppBar position="static">
        <Toolbar style={{ minHeight: '0px' }}>
          <Link to="/">
            <Typography variant="display1" color="secondary" aria-label="Home" style={isActive(history, '/')}>
            Workout Builder
            </Typography>
          </Link>
          {
            authorized
              ? (
                <AuthMenu
                  style={isActive}
                  authenticated={authorized}
                  updateMenu={this.handleUpdate}
                />
              )
              : <NotAuthMenu style={isActive} updateMenu={this.handleUpdate} />
          }
        </Toolbar>
      </AppBar>
    );
  }
}
Menu.propTypes = {
  history: PropTypes.object.isRequired,
};
export default withRouter(Menu);
