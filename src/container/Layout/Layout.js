import React, {useState} from 'react'
import {Grid , Typography , Box, Backdrop, CircularProgress, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, IconButton} from '@mui/material/'
import { Outlet } from 'react-router-dom'
import MainDial from '../../component/dial/MainDial'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function Layout() {
	const [openBackdrop, setOpenBackdrop] = useState(false);
	const [openDialog, setOpenDialog] = useState(false);
	const [prices, setPrices] = useState(0);
	const handleClose = () => {
		setOpenBackdrop(false);
	};
	const handleToggle = () => {
		setOpenBackdrop(true);
	};

	const handleClickOpen = () => {
	  setOpenDialog(true);
	};
  
	const handleClick = (event) => {
		console.log(event.target)
		event.target.name === "backdrop" && setOpenBackdrop(false)
		event.target.name === "dialog" && setOpenDialog(false)
		event.target.name === "accept" && setOpenDialog(false)
		event.target.name === "cancel" && setOpenDialog(false)
	};

  return (
    	<Box>
      		<Backdrop
				sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
				name="backdrop"
				open={openBackdrop}
				onClick={handleClick}
      			>
        		<CircularProgress color="inherit" />
      		</Backdrop>
			<Dialog open={openDialog} name="dialog">
        		<DialogTitle>Subscribe</DialogTitle>
        		<DialogContent>
					<DialogContentText>
						Presiona para modificar los precios de TODOS los productos.
					</DialogContentText>
					<Grid container justifyContent="center" >
						<Grid item container xs={1.5} justifyContent="center">
							<IconButton><AddCircleIcon/></IconButton>
						</Grid>
						<Grid item container xs={1.5} alignContent="center" justifyContent="center">
							<Typography>{prices} %</Typography>
						</Grid>
						<Grid item container xs={1.5} justifyContent="center">
							<IconButton><RemoveCircleIcon/></IconButton>
						</Grid>
					</Grid>
        		</DialogContent>
        		<DialogActions>
					<Button variant="contained" name="accept" onClick={handleClick} sx={{margin:1,backgroundColor:"rgb(255,206,199)"}}>
						<Typography color="black" name="accept" onClick={handleClick} fontSize={{sm:16,xs:10}}>Aceptar</Typography>
					</Button>
					<Button variant="contained" name="cancel" onClick={handleClick} sx={{margin:1,backgroundColor:"rgb(188,220,219)"}}>
						<Typography color="black" name="cancel" onClick={handleClick} fontSize={{sm:16,xs:10}}>Cancelar</Typography>
					</Button>
        		</DialogActions>
      		</Dialog>
      		<MainDial func={handleClickOpen}/>
      		<Grid container>
				<Grid item container xs={12} justifyContent="center">
					<Typography mt={5} mb={5} fontSize={40} fontWeight="bolder" color="black">RegalitosNao Manager</Typography>
				</Grid>
				<Grid item xs={12} sx={{backgroundColor:"white"}}>
					<Outlet context={{lock: [handleToggle],unlock: [handleClose]}}/>
				</Grid>
      		</Grid>
    	</Box>
  )
}
