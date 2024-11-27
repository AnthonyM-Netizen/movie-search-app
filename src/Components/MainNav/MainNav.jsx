import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';






export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  useEffect (() => {
    if(value === 0)  navigate('/');
    else if(value === 1)  navigate('/series');
    else if(value === 2)  navigate('/movies');
    else if(value === 3)  navigate('/search');  
  }, [value])

  return (
    <Box sx={{ width: "100%",
        position: "fixed",
        bottom: 0,
        zIndex: 1000,
        backgroundColor: "#39445a"}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction style={{ color: "black" }} label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction style={{ color: "black" }} label="TV Series" icon={<OndemandVideoIcon />} />
        <BottomNavigationAction style={{ color: "black" }} label="Movies" icon={<MovieCreationIcon />} />
        <BottomNavigationAction style={{ color: "black" }} label="Search" icon={<SearchIcon />} />
        <BottomNavigationAction style={{ color: "black" }} label="Settings" icon={<SettingsIcon />} />
      </BottomNavigation>
    </Box>
  );
}