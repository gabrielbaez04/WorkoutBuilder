import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {Link, withRouter} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({});

class NotAuthMenu extends React.Component{
    state = {
        class: 'topnav',
    };
    handleMenuClick = () => {
        this.setState({ class: this.state.class == 'topnav' ? 'topnav responsive' : 'topnav'});
    };

    render()
    {
        const css = require('./Menu.css');
        const { history, classes ,theme } = this.props;

        return(
            <div className={this.state.class} id="myTopnav" style={{backgroundColor:this.props.theme.palette.primary.main, }}>
                <Link to={{pathname: "/signup", updateMenu: this.props.updateMenu}} 
                    style={this.props.style(this.props.history, "/signup")}
                    className="active">
                    Sign up
                </Link>
                <Link to={{pathname: "/signin", updateMenu: this.props.updateMenu}}
                    style={this.props.style(this.props.history, "/signin")}>
                    Sign In
                </Link>
                <a  className="icon" onClick={this.handleMenuClick}>
                        {this.state.class == 'topnav' 
                        ? <i className="fa fa-bars"></i>
                        : <i className="fa fa-times"></i>}
                </a>
            </div>
        )
    }
        
}

export default withStyles(styles, { withTheme: true })(withRouter(NotAuthMenu));