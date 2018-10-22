import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import OutsideClickHandler from 'react-outside-click-handler';
import 'airbnb-browser-shims';

const styles = () => ({});

class NotAuthMenu extends React.Component {
    state = {
      menuClass: 'topnav',
    };

    handleMenuClick = () => {
      this.setState(prevState => ({ menuClass: prevState.menuClass === 'topnav' ? 'topnav responsive' : 'topnav' }));
    };

    onOutsideClick = () => {
      this.setState({ menuClass: 'topnav' });
    }

    render() {
      import('./Menu.css');
      const { menuClass } = this.state;
      const {
        style, theme, history, updateMenu,
      } = this.props;
      return (
        <OutsideClickHandler
          onOutsideClick={this.onOutsideClick}
        >
          <div
            className={menuClass}
            id="myTopnav"
            style={{ backgroundColor: theme.palette.primary.main }}
          >
            <Link
              to={{ pathname: '/signup', updateMenu }}
              style={style(history, '/signup')}
              className="active"
              onClick={this.handleMenuClick}
            >
                        Sign up
            </Link>
            <Link
              to={{ pathname: '/signin', updateMenu }}
              style={style(history, '/signin')}
              onClick={this.handleMenuClick}
            >
                        Sign In
            </Link>
            <a className="icon" onClick={this.handleMenuClick}>
              {menuClass === 'topnav'
                ? <i className="fa fa-bars" />
                : <i className="fa fa-times" />}
            </a>
          </div>
        </OutsideClickHandler>
      );
    }
}
NotAuthMenu.propTypes = {
  history: PropTypes.object.isRequired,
  theme: PropTypes.object,
  style: PropTypes.func,
  updateMenu: PropTypes.func.isRequired,
};
NotAuthMenu.defaultProps = {
  theme: {},
  style: {},
};
export default withStyles(styles, { withTheme: true })(withRouter(NotAuthMenu));
