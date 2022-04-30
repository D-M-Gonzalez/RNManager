import React from 'react'
import {Grid,Typography,Button,TextField} from '@mui/material';

export default function ImageUploadForm(props) {
  return (
      <>
        <Grid item container xs={12} justifyContent="center">
			<TextField
				helperText={props.helper}
				disabled
				value={props.item.images[props.index-1].name ? props.item.images[props.index-1].name : ""}
				sx={{width:"70%",margin:1}}
				>	
			</TextField>
			<input
				style={{ display: "none" }}
				id={props.button}
				type="file"
				onChange={props.upload(props.index)}
			/>
			<label htmlFor={props.button}>
				<Button variant="contained" color="primary" component="span" sx={{width:"30%",marginTop:2,backgroundColor:"rgb(188,220,219)"}}>
					<Typography color="black" fontSize={{sm:16,xs:10}}>Subir</Typography>
				</Button>
			</label>
		</Grid>
      </>
  )
}
