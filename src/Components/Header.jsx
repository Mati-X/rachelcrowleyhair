import React from 'react'
import {Navbar, NavbarItem} from './Navbar'
import OutsidePhoto from '../public/annshairfashion.jpg'
import HeaderMain from './HeaderMain'
import { useState, useEffect } from 'react';

function Header() {

  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    console.log('isOpen', isOpen)
  }, [isOpen]);

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

  const BackPhotoStyle = {
    width: '100%',
    backgroundColor: '#000',
    position: 'absolute',
    zIndex: '-1',
    height: '80vh',
  }

  return (
    <div>
    <div style={PhotoStyle}></div>
      <div style={BackPhotoStyle}></div>
      <Navbar>
        <NavbarItem link="/" width={'110px'}>Home</NavbarItem>
        <NavbarItem link="about"  width={'110px'}>About</NavbarItem>
        <NavbarItem link="services" width={'120px'}>Services</NavbarItem>
        <NavbarItem link="gallery" width={'120px'}>Gallery</NavbarItem>
        <NavbarItem link="contact" width={'170px'}>Contact Me</NavbarItem>
      </Navbar>
      <HeaderMain/>
    </div>
  )
  }

export default Header