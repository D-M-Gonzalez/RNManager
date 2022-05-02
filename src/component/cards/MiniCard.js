import React from 'react'
import {Grid,Typography,Box} from '@mui/material';

export default function MiniCard(props) {
  return (
    <Grid container mt={2} sx={{height:350, width:240, backgroundColor:"rgb(255,206,199)"}}>
		<Grid item container xs={12} justifyContent="center" sx={{height:270, width:240}}>
			<Box 
				component="img"
				sx={{height:270,width:240}}
				alt="exampleimg"
				src={props.item.images[0].preview ? `${props.item.images[0].preview}` : (props.url ? props.url : 'assets/dollar.png')}
			/>
		</Grid>
		<Grid item container xs={12} justifyContent="center" sx={{height:40, width:240}}>
			<Typography fontSize={25} mt={1} fontFamily="Playlist">{props.item.name}</Typography>
		</Grid>
		<Grid item container xs={12} mt={1} mb={3} justifyContent="center" sx={{height:40, width:240}}>
			<Typography fontFamily="Montserrat">S/{props.item.price}</Typography>
		</Grid>
	</Grid>
  )
}
