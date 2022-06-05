import React, {useState} from 'react'
import {Grid , Typography , Box, Backdrop, CircularProgress } from '@mui/material/'
import { Outlet, useNavigate } from 'react-router-dom'
import MainDial from '../../component/dial/MainDial'
import PricesModal from '../../component/modals/PricesModal';
import { modifyPrices } from '../../controller/modifyPrices';
import MessageModal from '../../component/modals/MessageModal';
import { modifyMessage } from '../../controller/modifyMessage';

export default function Layout() {
	const [openBackdrop, setOpenBackdrop] = useState(false);
	const [openPrices, setOpenPrices] = useState(false);
	const [openMessage, setOpenMessage] = useState(false);
	const [prices, setPrices] = useState(0);
	const [message, setMessage] = useState();
	const nav = useNavigate()

	const handleClose = () => {
		setOpenBackdrop(false);
	};
	const handleToggle = () => {
		setOpenBackdrop(true);
	};

	const handleClickOpen = (id) => {
		if( id === "setprices" ){
			setPrices(0)
			setOpenPrices(true)
		}
		if( id === "setmessage" ){
			setMessage("")
			setOpenMessage(true)
		}
	};

	const handleClickClose = (id) => {
		if(id === "cancelar"){
			setOpenPrices(false)
			setOpenMessage(false)
		}
	}
  
	const handleClick = (event) => {
		event.target.name === "backdrop" && setOpenBackdrop(false)
	};

	const changePrices = async (input) => {
		setOpenPrices(false)
		const response = await modifyPrices(input)
		nav(0)
	}

	const changeMessage = async (input) => {
		setOpenMessage(false)
		const response = await modifyMessage(input)
		nav(0)
	}

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
			<PricesModal
				openPrices={openPrices}
				closeModal={handleClickClose}
				handleSubmit={changePrices}
				setPrices={setPrices}
				prices={prices}
			/>
			<MessageModal
				openMessage={openMessage}
				closeModal={handleClickClose}
				handleSubmit={changeMessage}
				setMessage={setMessage}
				message={message}
			/>
      		<MainDial handleClick={handleClickOpen}/>
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
