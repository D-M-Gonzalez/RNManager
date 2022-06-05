import React from 'react'
import {Grid,Typography,TextField,MenuItem} from '@mui/material';

export default function MainForm(props) {
  return (
      <>
        <Grid item container xs={12} justifyContent="center">
		    <Typography mt={2} mb={2} fontWeight="bold" fontSize={{sm:30, xs:16}}>Crear item:</Typography>
		</Grid>
		<Grid item container xs={12} justifyContent="center">
			<TextField
				required
				id="name"
				label="Nombre"
				onChange={props.handleChanges}
				value={props.item.name}
				inputProps={{style: {fontSize: 14}}}
				sx={{width:"100%",margin:1}}
				/>
		</Grid>
		<Grid item container xs={12} justifyContent="center">
			<TextField
					required
					id="price"
					label="Precio"
					onChange={props.handleChanges}
					value={props.item.price}
					inputProps={{style: {fontSize: 14}}}
					sx={{width:"100%",margin:1}}
			/>
		</Grid>
		<Grid item container xs={12} justifyContent="center">
			<TextField
				select
				label="Select"
				inputProps={{style: {fontSize: 14}}}
				helperText="Elije la categoria"
				value={props.item.category ? props.item.category : "Handmade"}
				sx={{width:"100%",margin:1}}
				onChange={props.handleCatChange}
				>
					{props.cat.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
				    ))}
			</TextField>
		</Grid>
		<Grid item container xs={12} justifyContent="center">
			<TextField
				id="type"
				select
				label="Select"
				inputProps={{style: {fontSize: 14}}}
				helperText="Elije la sub-categoria"
				value={props.item.subcategory ? props.item.subcategory : "Esculturas"}
				sx={{width:"100%",margin:1}}
				onChange={props.handleSubCatChange}
				>
					{							
					props.subCat.subcategorias.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))
				 }
			</TextField>
		</Grid>
		<Grid item container xs={12} justifyContent="center">
			<TextField
				required
				id="tags"
				label="Etiquetas"
				onChange={props.handleChanges}
				value={props.item.tags}
				inputProps={{style: {fontSize: 14}}}
				sx={{width:"100%",margin:1}}
				/>
		</Grid>
      </>
  )
}
