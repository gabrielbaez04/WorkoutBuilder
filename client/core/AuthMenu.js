import React from 'react'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import {Link, withRouter} from 'react-router-dom'
import auth from './../auth/auth-helper'

const update = (props) =>{
    auth.signout(() => props.history.push('/'));
    props.updateMenu();
}
const AuthMenu = withRouter((props) =>(
        <span>
            <Link to={"/user/" + props.authenticated.user._id}>
            <Button style={props.style(props.history, "/user/" + props.authenticated.user._id)}>My Profile</Button>
            </Link>
            <Link to="/workout">
            <Button style={props.style(props.history, "/workout")}>Workouts
            </Button>
            </Link>
            <Button color="inherit" onClick={update.bind(this,props)}>Sign out</Button>
        </span>
    ));
   


export default AuthMenu;