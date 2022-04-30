import React from 'react'
import {Grid , Typography , Box} from '@mui/material/'
import { Outlet } from 'react-router-dom'
import MainDial from '../../component/dial/MainDial'

export default function Layout() {
  return (
    <Box>
      <MainDial/>
      <Grid container>
          <Grid item container xs={12} justifyContent="center">
              <Typography mt={5} mb={5} fontSize={40} fontWeight="bolder" color="black">RegalitosNao Manager</Typography>
          </Grid>
          <Grid item xs={12} sx={{backgroundColor:"white"}}>
              <Outlet/>
          </Grid>
      </Grid>
    </Box>
  )
}
