import { Paper, Typography } from '@mui/material'
import React from 'react'
import Player from '../components/Player/Player';
import Pomodoro from '../components/Pomodoro/Pomodoro';
import Todo from '../components/Todo/Todo';
import NavHeader from '../components/NavHeader/NavHeader';


//TODO Search for a fixed screen size according to the device.
// make the the child component from this page be movable within the given space

function Layout() {
  return (
    <Paper>
      <NavHeader />
      <Typography>This will is the Layout Page</Typography>
      <Player />
      <Pomodoro />
      <Todo />
    </Paper>
  )
}

export default Layout