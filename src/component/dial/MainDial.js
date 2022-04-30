import React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SaveIcon from '@mui/icons-material/Save';
import SearchIcon from '@mui/icons-material/Search';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import { Link, useNavigate } from 'react-router-dom';

const actions = [
  { icon: <Link to="/home"><SaveIcon sx={{display:"block",color:"black"}} /></Link>, label: 'Save Product', key: "home"},
  { icon: <Link to="/all"><SearchIcon sx={{display:"block",color:"black"}}/></Link>, label: 'View all Products', operation:"all", key:"all" },
  { icon: <Link to="/allimages"><ImageSearchIcon sx={{display:"block",color:"black"}} /></Link>, label: 'View all images', operation:"allimages", key:"allimages" },
];

export default function MainDial() {
    const nav = useNavigate()

    const handleClick = (event) => {
        event.target.name && nav(event.target.name)
    }

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