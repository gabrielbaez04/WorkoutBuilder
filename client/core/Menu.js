import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import HomeIcon from 'material-ui-icons/Home'
import Button from 'material-ui/Button'
import auth from './../auth/auth-helper'
import {Link, withRouter} from 'react-router-dom'
import AuthMenu from './AuthMenu';
import NotAuthMenu from './NotAuthMenu';

class Menu extends React.Component{
  state = {
    auth: false,
  }
  componentDidMount = () =>{
    this.setState({auth:auth.isAuthenticated()})
  }
  handleUpdate = () =>{
    this.setState({auth:auth.isAuthenticated()})
  }
  render()
  {
    const isActive = (history, path) => {
      if (this.props.history.location.pathname == path)
        return {color: '#ff4081'}
      else
        return {color: '#ffffff'}
    }
    return(
      <AppBar position="static">
        <Toolbar>
          <Typography type="title" color="inherit">
            Workout Builder
          </Typography>
          <Link to="/">
            <IconButton aria-label="Home" style={isActive(this.props.history, "/")}>
              <HomeIcon/>
            </IconButton>
          </Link>
          {
            this.state.auth 
            ? <AuthMenu style={isActive} authenticated={this.state.auth} updateMenu={this.handleUpdate}/> 
            : <NotAuthMenu style={isActive} updateMenu={this.handleUpdate}/>
          }
        </Toolbar>
      </AppBar>
      )
    }
 
}

export default withRouter(Menu);