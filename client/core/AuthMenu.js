import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {Link, withRouter} from 'react-router-dom'
import auth from './../auth/auth-helper'
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
    menu: {
        position: 'absolute',
        right: '5%'
    }
});

class AuthMenu extends React.Component{
    state = {
        anchorEl: null,
    };
    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };
    
    update = (props) =>{
        auth.signout(() => this.props.history.push('/'));
        this.props.updateMenu();
    }
    

    render(){
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const { classes } = this.props;
        return(
            <div className={classes.menu}>
                <IconButton
                    aria-label="More"
                    aria-owns={open ? 'long-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}>
                    <MoreVertIcon />
                </IconButton>
                <Menu id="long-menu" anchorEl={anchorEl} open={open} onClose={this.handleClose}>
                    <Link to={"/user/" + this.props.authenticated.user._id}>
                        <MenuItem onClick={this.handleClose}>
                            My Profile
                        </MenuItem>
                    </Link>
                    <Link to="/workout">
                        <MenuItem onClick={this.handleClose}>
                            Workouts
                        </MenuItem>
                    </Link>
                    <MenuItem onClick={this.update}>
                        Sign out
                    </MenuItem>
                </Menu>
        </div>
      )
    }

}
export default withStyles(styles)(withRouter(AuthMenu));