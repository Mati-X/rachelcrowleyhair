import React from 'react'
import OutsidePhoto from '../public/annshairfashion.jpg'
import Line from './Line'
import { Icon } from '@iconify/react';


const PhotoStyle = {
    position: 'absolute',
    width: '100%',
    height: '400px',
    backgroundImage: `url(${OutsidePhoto})`,
    backgroundSize: 'cover',
    filter: 'grayscale(100%)',
    backgroundPosition: 'center',
    opacity: 0.7,
    boxShadow: '0px 0px 50px 10px #000'
  }

  const BackPhotoStyle = {
    width: '100%',
    backgroundColor: '#000',
    position: 'absolute',
    zIndex: '-1',
    height: '400px'
  }

  const GradientStyle = {
    background: 'linear-gradient(135deg, rgba(25,25,25,1) 40%, rgba(0,212,255,0) 100%)',
    width: '100%',
    position: 'absolute',
    zIndex: '0',
    height: '400px'
  }

  const TitleStyle = {
    position: 'relative',
    color: 'white',
    fontSize: '45px',
    fontFamily: 'Noir-Regular',
    top: '5%',
    left: '2.5%',
    zIndex: '2'
}

const LightStyle = {
  fontFamily: 'Noir-Regular',
  fontSize: '25px',
  marginTop: '30px',
}

const ButtonContainerStyle = {
  display:'flex',
  justifyContent:'space-around',
  width:'40%',
  position:'absolute',
  bottom:'0px',
  height:'150px',
}

const ButtonStyle = {
  textAlign: 'center',
  display:'flex',
  flexDirection:'column',
  alignItems: 'center',
  width:'200px',
  fontFamily: 'Noir-Regular',
  fontSize: '25px',
  marginTop: '30px',
  color:'white',
  cursor: 'pointer'
}

const AuthorStyle = {
  position: 'absolute',
  textAlign: 'right',
  bottom: '2.5%',
  right: '2.5%',
  color: 'white',
  fontFamily: 'Noir-Regular',
  fontSize: '25px',
  zIndex:'5'
}

function Footer() {
  return (
    <div className='relative bottom-0 w-full h-[400px]'>
      <div style={PhotoStyle}></div>
        <div style={BackPhotoStyle}></div>
        <div style={GradientStyle}></div>
        <div style={TitleStyle}>Rachel Crowley Hair Salon
          <Line width={'650px'} rotate={'0deg'} color={'white'}/>
          <div style={LightStyle}>47 North Street, Skibbereen, Ireland<br/>087 115 0961</div>
          </div>
          <div style={ButtonContainerStyle}>
            <a href='https://www.instagram.com/rcrowleyhair/' style={ButtonStyle}><Icon icon="entypo-social:instagram-with-circle" color="white" height="60" />Instagram</a>
            <a href='https://www.facebook.com/rachelcrowleyhairstylist' style={ButtonStyle}><Icon icon="entypo-social:facebook-with-circle" color="white" height="60" />Facebook</a>
          </div>
          <div style={AuthorStyle}>Created and designed by Mateusz Matla</div>
      </div>
  )
}

export default Footer