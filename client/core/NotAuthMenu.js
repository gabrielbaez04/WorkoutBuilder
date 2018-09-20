import React from 'react'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import {Link, withRouter} from 'react-router-dom'

const NotAuthMenu = withRouter((props) =>(
        <span>
            <Link to="/signup">
                <Button style={props.style(props.history, "/signup")}>Sign up
                </Button>
            </Link>
            <Link to={{pathname: "/signin", updateMenu: props.updateMenu}}>
                <Button style={props.style(props.history, "/signin")}>Sign In
                </Button>
            </Link>
        </span>
    ));

export default NotAuthMenu;