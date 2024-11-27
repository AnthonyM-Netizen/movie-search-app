import React from 'react'
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material';

const darkTheme = createTheme({
    palette: {
      type: "dark",
    },

    components: {
        MuiPagination: {
          styleOverrides: {
            root: {
              '& .MuiPaginationItem-root': {
                color: 'white', // To ensure pagination items (numbers) are white
              },
              '& .MuiPaginationItem-ellipsis': {
                color: 'white', // To ensure ellipsis (...) is white too
              },
            },
          },
        },
      },
  });

const CustomPagination = ({ setPage }) => {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0,0)

    };



  return (
    <div
    style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
        
      }}>
        <ThemeProvider  theme={darkTheme}>
            <Pagination onChange={(e) => handlePageChange(e.target.textContent)} count={10} variant="outlined" color="primary" shape="rounded" 
          hideNextButton hidePrevButton />
        </ThemeProvider>
        
    </div>
  )
}

export default CustomPagination