import React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SaveIcon from '@mui/icons-material/Save';
import SearchIcon from '@mui/icons-material/Search';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MessageIcon from '@mui/icons-material/Message';
import { Link, useNavigate } from 'react-router-dom';


export default function MainDial(props) {
  const nav = useNavigate()
  
  const handleClick = (event) => {
    if ( event.target.name !== "setprices" && event.target.name !== "setmessage" && event.target.name ){
      nav(event.target.name)
    } else if ( event.target.name === "setprices" ) {
      handlePrices("setprices")
    } else if ( event.target.name === "setmessage" ) {
      handlePrices("setmessage")
    }
  }

  const handleDial = id => () => {
    props.handleClick(id)
  }

  const handlePrices = (id) => {
    props.handleClick(id)
  }
  const actions = [
    { icon: <Link to="/home"><SaveIcon sx={{display:"block",color:"black"}} /></Link>, label: 'Crear producto', key: "home"},
    { icon: <Link to="/all"><SearchIcon sx={{display:"block",color:"black"}}/></Link>, label: 'Ver todos los productos', operation:"all", key:"all" },
    { icon: <AttachMoneyIcon onClick={handleDial("setprices")} name="setprices" sx={{display:"block",color:"black"}} />, label: 'Cambiar precios', operation:"setprices", key:"setprices" },
    { icon: <MessageIcon onClick={handleDial("setmessage")} name="setmessage" sx={{display:"block",color:"black"}} />, label: 'Cambiar mensaje', operation:"setmessage", key:"setmessage" },
  ];

  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1, position:"fixed", bottom:50, left:100, zIndex:"tooltip" }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon sx={{color:"black"}} />}
        FabProps={{sx:{backgroundColor:"rgb(255,206,199)"}}}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.key}
            name={action.key}
            icon={action.icon}
            tooltipTitle={action.label}
            onClick={handleClick}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}