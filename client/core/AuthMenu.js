import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import OutsideClickHandler from 'react-outside-click-handler';
import auth from '../auth/auth-helper';
import 'airbnb-browser-shims';

const styles = () => ({});

class AuthMenu extends React.Component {
    state = {
      menuClass: 'topnav',
    };

    handleMenuClick = () => {
      this.setState(prevState => ({ menuClass: prevState.menuClass === 'topnav' ? 'topnav responsive' : 'topnav' }));
    };

    update = () => {
      const { history, updateMenu } = this.props;
      auth.signout(() => history.push('/'));
      updateMenu();
    }

    onOutsideClick = () => {
      this.setState({ menuClass: 'topnav' });
    }

    render() {
    import('./Menu.css');
    const {
      history, theme, style, authenticated, updateMenu,
    } = this.props;
    const { menuClass } = this.state;
    return (
      <OutsideClickHandler
        onOutsideClick={this.onOutsideClick}
      >
        <div className={menuClass} id="myTopnav" style={{ backgroundColor: theme.palette.primary.main }}>
          <Link
            to={{ pathname: `/user/${authenticated.user._id}`, updateMenu }}
            style={style(history, `/user/${authenticated.user._id}`)}
            className="active"
            onClick={this.handleMenuClick}
          >
My Profile
          </Link>

          <Link
            to="/routine"
            style={style(history, '/routine')}
            onClick={this.handleMenuClick}
          >
Routines
          </Link>

          <a onClick={this.update}> Sign out </a>

          <a className="icon" onClick={this.handleMenuClick}>
            { menuClass === 'topnav'
              ? <i className="fa fa-bars" />
              : <i className="fa fa-times" />}
          </a>
        </div>
      </OutsideClickHandler>
    );
    }
}
AuthMenu.propTypes = {
  history: PropTypes.object.isRequired,
  theme: PropTypes.object,
  style: PropTypes.func,
  authenticated: PropTypes.object.isRequired,
  updateMenu: PropTypes.func.isRequired,
};
AuthMenu.defaultProps = {
  theme: {},
  style: {},
};
export default withStyles(styles, { withTheme: true })(withRouter(AuthMenu));
