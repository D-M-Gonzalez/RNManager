import React, {useState} from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { logInUser } from '../../controller/logInUser'

export default function Login() {
	const [user, setUser] = useState({
		name:"",
		password:"",
	})
	const nav = useNavigate();

	const handleClick = (event) => {
		event.target.id === "login" && login();
		event.target.id === "register" && nav("/register");
	}

	const handleChange = (event) => {
		setUser({...user,[event.target.id]:event.target.value})
	}

	const login = async () => {
		const response = await logInUser(user);
		console.log(response)
		if ( response.status === 200){
			const storeUser = JSON.stringify(response.data);
			const token = JSON.stringify(response.data.accessToken);
			sessionStorage.clear();
			sessionStorage.setItem("user",storeUser);
			sessionStorage.setItem("token",token);
			nav("/home")
		}
	}

  return (
    <Grid container >
        <Grid item xs={12}>
				<Grid container>
					<Grid item md={2} xs={1}/>
					<Grid item mt={15} mb={15} md={8} xs={10}>
						<Paper elevation={4}>
							<Typography fontSize={{md:30,xs:20}} fontWeight="bolder" color="black" ml={5} pt={2}>Ingresa a tu cuenta</Typography>
							<Grid container>
								<Grid item md={2} xs={1}/>
								<Grid item md={8} xs={10}>
									<TextField 
										id="name" 
										label="Email" 
										variant="outlined"
										onChange={handleChange}
										sx={{marginTop:3,width:"100%"}}
										/>
								</Grid>
								<Grid item md={2} xs={1}/>
								<Grid item md={2} xs={1}/>
								<Grid item md={8} xs={10}>
									<TextField 
										id="password" 
										label="Password" 
										type="password"
										variant="outlined"
										onChange={handleChange}
										sx={{marginTop:3,width:"100%"}}
									/>
								</Grid>
								<Grid item md={2} xs={1}/>
								<Grid item md={2} xs={1}/>
								<Grid item md={3} xs={4.5} onClick={handleClick}>
									<Button variant="contained" id="login" sx={{width:"100%", marginTop:5,marginBottom:5, backgroundColor:"rgb(188,220,219)", color:"white"}}>
										<Typography color="black" id="login" fontWeight="bold">login</Typography>
									</Button>
								</Grid>
								<Grid item md={2} xs={1}/>
								<Grid item md={3} xs={4.5}>
									<Button variant="contained" disabled id="register" sx={{width:"100%", marginTop:5,marginBottom:5, backgroundColor:"rgb(188,220,219)", color:"white"}} onClick={handleClick}>
										<Typography color="black" fontWeight="bold">Register</Typography>
									</Button>
								</Grid>
								<Grid item md={2} xs={1}/>
							</Grid>
						</Paper>
					</Grid>
					<Grid item md={2} xs={1}/>
				</Grid>
        </Grid>
    </Grid>
  )
}
