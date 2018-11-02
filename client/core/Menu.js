import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
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
      if (history.location.pathname == path)
        return {color: '#5bb4dc' , borderBottom: '3px solid'}
      else
        return {color: '#ffffff'}
    }
    return(
      <AppBar position="static">
        <Toolbar style={{minHeight: '0px'}}>
        <Link to="/">
          <Typography variant="display1" color="secondary" aria-label="Home" style={isActive(this.props.history, "/")}>
            Workout Builder
          </Typography>
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