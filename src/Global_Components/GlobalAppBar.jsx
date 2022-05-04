import React from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { logout } from '../store/actions/login'
import {AppBar,InputBase ,Typography ,IconButton, Toolbar, Button   } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

const GlobalAppBar = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const onLogOut = () => {

    sessionStorage.removeItem('jsonWebToken')
    dispatch(logout('logout'))
    navigate("/login");
  }
  return (
    <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Dark Horse Solution
          </Typography>
          <Button color="inherit" onClick={onLogOut}>Logout</Button>
        </Toolbar>
      </AppBar>
  )
}

export default GlobalAppBar