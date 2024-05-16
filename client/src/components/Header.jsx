import { Avatar, Button, Dropdown, Navbar, TextInput, Select} from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import { signoutSuccess } from '../redux/user/userSlice';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import NavSearch from './search/NavSearch';
import './css/styles.css'

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [t, i18n] = useTranslation("global");
  const [selectedLanguage, setSelectedLanguage] = useState('en'); 
  
  
    const handleLanguageChange = (e) => {
      setSelectedLanguage(e.target.value);
      if(e.target.value === "en"){
        handlechangeLanguage("en")
      }
      if(e.target.value === "uz"){
        handlechangeLanguage("uz")
      }
      if(e.target.value === "ru"){
        handlechangeLanguage("ru")
      }
    }

  const handlechangeLanguage = (lang) => {
    i18n.changeLanguage(lang); 
  }

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };



  return (
    <Navbar className='border-b-2'>
      <Link
        to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
          Rasulov
        </span>
        dev
      </Link>
      <NavSearch />
      <div className='flex gap-2 md:order-2'>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>{t("profile.out")}</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to='/sign-in'>
            <Button gradientDuoTone='purpleToBlue' outline>
            {t("sign.sign_in")}
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link to='/'>{t("header.home")} </Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as={'div'}>
          <Link to='/about'>{t("header.about")}</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/contact'} as={'div'}>
          <Link to='/contact'>{t("header.contact")}</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/project'} as={'div'}>
          <Link to='/project'>{t("header.project")}</Link>
        </Navbar.Link>
      </Navbar.Collapse>
        <Navbar.Collapse>
        <div className='flex '>
           <div className='right-2'>
           <select className='trns bg-gradient-to-r' value={selectedLanguage} onChange={handleLanguageChange}>
                  <option value="en" className='trns-opt bg-gradient-to-r'>EN</option>
                  <option value="uz" className='trns-opt'>UZ</option>
                  <option value="ru" className='trns-opt'>RU</option>
                </select>
           </div>
          <Button
             className='w-12 h-10 sm:inline left-2'
             color='gray'
             pill
             onClick={() => dispatch(toggleTheme())}>
             {theme === 'light' ? <FaSun /> : <FaMoon />}
           </Button>
            </div>
        </Navbar.Collapse>
      
    </Navbar>
  );
}
