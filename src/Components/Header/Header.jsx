import './Header.css';
import LiveTvIcon from '@mui/icons-material/LiveTv';

const Header = () => {
  return (
    <span onClick={() => window.scroll(0,0) } className='header'><LiveTvIcon className='header-icon' /> Movie Entertainment Hub</span>
  )
}

export default Header