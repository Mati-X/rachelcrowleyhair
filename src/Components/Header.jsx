import React from 'react'
import {Navbar, NavbarItem} from './Navbar'
import OutsidePhoto from '../public/annshairfashion.jpg'
import {PhoneNav, PhoneNavbarItem} from './PhoneNav';
import HeaderMain from './HeaderMain'
import { useMediaQuery } from 'react-responsive'

function Header() {

  const isDesktop = useMediaQuery({query: "(min-width: 1500px)"});
  const isPhone = useMediaQuery({query: "(max-width: 1150px)"});

  const PhotoStyle = {
    position: 'absolute',
    width: '100%',
    height: '80vh',
    backgroundImage: `url(${OutsidePhoto})`,
    backgroundSize: 'cover',
    filter: 'grayscale(100%)',
    backgroundPosition: 'center',
    opacity: 0.3,
    boxShadow: '0px 0px 50px 10px #000'
  }

  const PhotoStylePhone = {
    position: 'fixed',
    width: '100%',
    height: '20vh',
    backgroundImage: `url(${OutsidePhoto})`,
    backgroundSize: 'cover',
    filter: 'grayscale(100%)',
    backgroundPosition: 'center',
    opacity: 0.3,
    boxShadow: '0px 0px 50px 10px #000',
    zIndex: '91'
  }

  const BackPhotoStyle = {
    width: '100%',
    backgroundColor: '#000',
    position: 'absolute',
    zIndex: '-1',
    height: '80vh',
  }

  const BackPhotoStylePhone = {
    width: '100%',
    backgroundColor: '#000',
    position: 'fixed',
    zIndex: '-1',
    height: '20vh',
    zIndex: '90'
  }

  return (
    <div>
    <div style={isDesktop ? PhotoStyle : PhotoStylePhone}></div>
      <div style={isDesktop ? BackPhotoStyle : BackPhotoStylePhone}></div>
      {isPhone ? <PhoneNav>
        <PhoneNavbarItem link="/" width={'110px'}>Home</PhoneNavbarItem>
        <PhoneNavbarItem link="about"  width={'110px'}>About</PhoneNavbarItem>
        <PhoneNavbarItem link="services" width={'120px'}>Services</PhoneNavbarItem>
        <PhoneNavbarItem link="gallery" width={'120px'}>Gallery</PhoneNavbarItem>
        <PhoneNavbarItem link="contact" width={'170px'}>Contact Me</PhoneNavbarItem>
        </PhoneNav> : <Navbar>
        <NavbarItem link="/" width={'110px'}>Home</NavbarItem>
        <NavbarItem link="about"  width={'110px'}>About</NavbarItem>
        <NavbarItem link="services" width={'120px'}>Services</NavbarItem>
        <NavbarItem link="gallery" width={'120px'}>Gallery</NavbarItem>
        <NavbarItem link="contact" width={'170px'}>Contact Me</NavbarItem>
      </Navbar> }
      <HeaderMain/>
    </div>
  )
  }

export default Header