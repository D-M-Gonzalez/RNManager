import React, {useState, useEffect, useRef} from 'react';
import {Grid,Box} from '@mui/material';
import { sizeSelector } from '../../data/sizes';

export default function BigCardImage(props) {
    const [image, setImage] = useState();
	const [imageArray, setImageArray] = useState([]);
    const [timer, setTimer] = useState(0);
    const [index, setIndex] = useState(0);
	const [size, setSize] = useState({
		name: "xs",
		value: 250
	}
	)
	const imagesRef = [
		useRef(null),
		useRef(null),
		useRef(null),
	];

	useEffect(()=>{
		const found = sizeSelector.find((el)=>{
			if(el.name === props.size){
			}
			return el.name === props.size;
		})
		setSize(found)
	},[props.size])

	useEffect(()=>{
		let array = [];
		array.push((props.item.images[0].preview ? props.item.images[0].preview : ( props.urls[0].url ? "http://" + props.urls[0].url : `/assets/dollar.png`)))
		array.push((props.item.images[1].preview ? props.item.images[1].preview : ( props.urls[1].url ? "http://" + props.urls[1].url : `/assets/dollar.png`)))
		array.push((props.item.images[2].preview ? props.item.images[2].preview : ( props.urls[2].url ? "http://" + props.urls[2].url : `/assets/dollar.png`)))
		setImageArray(array)
	},[props])

    useEffect(()=>{
        time()
		setIndex(index < 2 ? index+1 : 0)
		setImage(imageArray[index])
		imagesRef.forEach((el,pos)=>{
			index === pos ? (el.current.style.border="1px solid rgb(255,206,199)") : (el.current.style.border="0px solid rgb(255,206,199)")
		})
    },[timer])

    const time = async () => {
		const response = await new Promise(function(resolve,reject){
			setTimeout(function(){resolve("okay")},3000)
		});
		response && setTimer(timer === 1 ? 0 : 1)
    }

	const handleClick = (event) => {
		setImage(imageArray[event.target.id])
		imagesRef.forEach((el,pos)=>{
			parseInt(event.target.id) === pos ? (el.current.style.border="1px solid rgb(255,206,199)") : (el.current.style.border="0px solid rgb(255,206,199)")
		})
	}
	return (
		  <>
			  <Grid item container xs={12} justifyContent="center">
				  <Box 
					  component="img"
					  sx={{height:size.value, width:size.value*0.8,borderRadius:3}}
					  alt="exampleimg"
					  src={image ? `${image}` : `/assets/dollar.png`}
				  />
			  </Grid>
			  <Grid item container mt={2} xs={12} justifyContent="center">
				  <Box>
					  <Box 
						  component="img"
						  id="0"
						  sx={{height:(size.value/3), width:(size.value/3*0.8),borderRadius:1,padding:0.5}}
						  alt="exampleimg"
						  ref={imagesRef[0]}
						  onClick={handleClick}
						  src={imageArray[0] ? `${imageArray[0]}` : `/assets/dollar.png`}
					  />
					  <Box 
						  component="img"
						  id="1"
						  sx={{height:(size.value/3), width:(size.value/3*0.8),borderRadius:1,padding:0.5}}
						  alt="exampleimg"
						  ref={imagesRef[1]}
						  onClick={handleClick}
						  src={imageArray[1] ? `${imageArray[1]}` : `/assets/dollar.png`}
					  />
					  <Box 
						  component="img"
						  id="2"
						  sx={{height:(size.value/3), width:(size.value/3*0.8),borderRadius:1,padding:0.5}}
						  alt="exampleimg"
						  ref={imagesRef[2]}
						  onClick={handleClick}
						  src={imageArray[2] ? `${imageArray[2]}` : `/assets/dollar.png`}
					  />
				  </Box>
			  </Grid>
		  </>
	)
}
