import React from 'react'
import {Grid,TextField} from '@mui/material';

export default function DescriptionForm(props) {
  return (
    <>
        <Grid item container xs={12} justifyContent="center">
                <TextField
                    required
                    multiline
                    rows={6}
                    id="description1"
                    label="Descripcion"
                    onChange={props.handleChanges}
                    value={props.item.description1}
                    inputProps={{style: {fontSize: 14}}}
                    sx={{width:"100%",margin:1}}
                />
        </Grid>
        <Grid item container xs={12} justifyContent="center">
                <TextField
                    required
                    multiline
                    rows={6}
                    id="description2"
                    label="Descripcion Adicional"
                    onChange={props.handleChanges}
					value={props.item.description2}
                    inputProps={{style: {fontSize: 14}}}
                    sx={{width:"100%",margin:1}}
                />
        </Grid>
    </>
  )
}
