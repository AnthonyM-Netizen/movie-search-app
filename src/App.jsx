import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import SimpleBottomNavigation from './Components/MainNav/MainNav';
import Trending from './Components/Pages/Trending/Trending';
import Movies from './Components/Pages/Movies/Movies';
import Series from './Components/Pages/Series/Series';
import Search from './Components/Pages/Search/Search';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Import ThemeProvider and createTheme

// Create a default theme or customize it as per your needs
const theme = createTheme();

function App() {
  return (
    // Wrap your app with ThemeProvider to provide the theme context to all components
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <div className="app">
          <Routes>
            <Route path='/' element={<Trending />} exact />
            <Route path='/series' element={<Series />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/search' element={<Search />} />
          </Routes>
        </div>
        <SimpleBottomNavigation />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
