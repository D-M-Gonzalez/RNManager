import React from 'react'
import {Grid , Typography , Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, TextField} from '@mui/material/'

export default function MessageModal(props) {

    const handleChange = (event) => {
        props.setMessage(event.target.value)
    }
  
	const handleClick = (event) => {
		event.currentTarget.name === "accept" && props.handleSubmit(props.message)
		event.currentTarget.name === "cancel" && props.closeModal("cancelar")
	};

  return (
    <Dialog open={props.openMessage} name="dialog">
    <DialogTitle>Cambiar Mensaje</DialogTitle>
    <DialogContent>
        <DialogContentText>
            Escribre un nuevo mensaje para mostrar en el encabezado de la página.
        </DialogContentText>
        <Grid container justifyContent="center" >
            <Grid item container xs={12} justifyContent="center">
                <TextField
                    required
                    id="message"
                    label="Mensaje"
                    onChange={handleChange}
                    value={props.message}
                    inputProps={{style: {fontSize: 14}}}
                    sx={{width:"100%",margin:1}}
                    />
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
