import React, { useEffect, useState } from 'react'
import {Grid,Typography,useMediaQuery, useTheme} from '@mui/material';
import DetailCardImage from './DetailCardImage';
import categorias from '../../data/categorias';

export default function DetailCard(props) {
	const theme = useTheme();
	const windowSize = [
	{
		name: "xs",
		value: useMediaQuery(theme.breakpoints.only('xs')),
	},
	{
		name: "sm",
		value: useMediaQuery(theme.breakpoints.only('sm')),
	},
	{
		name: "md",
		value: useMediaQuery(theme.breakpoints.only('md')),
	},
	{
		name: "lg",
		value: useMediaQuery(theme.breakpoints.only('lg')),
	},
	{
		name: "xl",
		value: useMediaQuery(theme.breakpoints.only('xl')),
	},
	]
	const [size, setSize] = useState("xs")

	useEffect(()=>{
		const found = windowSize.find((el)=>{
			return el.value === true;
		}).name
		setSize(found)
	},[JSON.stringify(windowSize)])

  return (
      <>
        <Grid container item mt={10} xs={12}>
			<Grid item xs/>
			<Grid item container xl={4} lg={5} md={5} xs={12} sx={{width:450}}>
				<DetailCardImage item={props.item} urls={props.urls} size={size}/>
			</Grid>
			<Grid item xl={0.1} lg={0.5}/>
			<Grid item container xl={4} lg={5} md={5} xs={12} justifyContent="center">
			 	<Grid item md xs={1}/>
					<Grid item container xs={10} justifyContent="center">
						<Typography mt={2} mb={2} fontSize={{lg:55,md:45,sm:35,xs:30}} fontFamily="Playlist" fontWeight="bolder">{props.item.name}</Typography>
					</Grid>
					<Grid item xs={1}/>
					<Grid item xs={1}/>
					<Grid item container xs={10}>
						<Typography mt={2} fontSize={{lg:16,md:14,sm:13,xs:12}} align="justify" fontFamily="Montserrat" >{props.item.description1}</Typography>
					</Grid>
					<Grid item xs={1}/>
					<Grid item xs={1}/>
					<Grid item container xs={10}>
						<Typography mt={2} fontSize={{lg:16,md:14,sm:13,xs:12}} fontFamily="Montserrat" >{props.item.description2}</Typography>
					</Grid>
					<Grid item xs={1}/>
					<Grid item xs={1}/>
					<Grid item container xs={10}>
						<Typography fontSize={{lg:25,md:23,sm:20,xs:18}} fontFamily="Montserrat" >Precio: S/{props.item.price}</Typography>
					</Grid>
					<Grid item xs={1}/>
					<Grid item xs={1}/>
					<Grid item container xs={10}>
						<Typography fontSize={{lg:25,md:23,sm:20,xs:18}} fontFamily="Montserrat" >{props.item.category && categorias.find((el)=>{return el.value === props.item.category}).label}</Typography>
					</Grid>
					<Grid item md xs={1}/>
				</Grid>
			<Grid item xs/>
		</Grid>
      </>
  )
}
