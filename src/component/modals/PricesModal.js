import React from 'react'
import {Grid , Typography , Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, IconButton} from '@mui/material/'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function PricesModal(props) {

    const handleChange = action => (event) => {
            action === "add" && props.setPrices ( props.prices + 1);
            action === "reduce" && props.prices > 0 && props.setPrices ( props.prices - 1);
    }
  
	const handleClick = (event) => {
		event.currentTarget.name === "accept" && props.handleSubmit(props.prices)
		event.currentTarget.name === "cancel" && props.closeModal("cancelar")
	};

  return (
    <Dialog open={props.openPrices} name="dialog">
    <DialogTitle>Cambiar Precios</DialogTitle>
    <DialogContent>
        <DialogContentText>
            Presiona para modificar los precios de TODOS los productos.
        </DialogContentText>
        <Grid container justifyContent="center" >
            <Grid item container xs={1.5} justifyContent="center">
                <IconButton
                    onClick={handleChange("add")}
                    >
                    <AddCircleIcon/>
                </IconButton>
            </Grid>
            <Grid item container xs={1.5} alignContent="center" justifyContent="center">
                <Typography>{props.prices} %</Typography>
            </Grid>
            <Grid item container xs={1.5} justifyContent="center">
                <IconButton
                    onClick={handleChange("reduce")}
                    >
                    <RemoveCircleIcon/>
                </IconButton>
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
  )
}
