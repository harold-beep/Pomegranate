import { Button, Typography } from '@mui/material'
import React from 'react'

function NavHeader() {
  return (
    <>
    <Typography>This is where the buttons that will control the sub app within the page</Typography>
    <Button>Player</Button>
    <Button>Pomodoro</Button>
    <Button>Todo</Button>
    <Typography><em>button clock that will be added in the future</em></Typography>
    </>
  )
}

export default NavHeader;