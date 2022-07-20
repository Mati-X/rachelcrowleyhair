import React from 'react'
import Line from '../Components/Line'
import { useLocation } from 'react-router-dom'

function Contact() {

  const location = useLocation();
  console.log(location.pathname);
  

  const mapframeStyle = {
    width: '60vw',
    height: '40vw',
    clipPath: 'polygon(0 0, 100% 0%, 400px 100%, 0 100%)',
    position: 'absolute',
    left: '10rem',
    top: '2rem',
  }
  const infoStyle = {
    position: 'relative',
    top: '20vw',
    fontSize:'40px',
    textAlign:'right',
    right: '10rem',
    fontFamily: 'Noir-Regular',
    transform: 'translateY(-50%)'
  }

  const lineStyle = {
    width: 'calc(60vw + 6px)',
    height: '40vw',
    clipPath: 'polygon(0 0, 100% 0%, 406px 100%, 0 100%)',
    position: 'absolute',
    backgroundColor: 'black',
    left: '10rem',
    top: '2rem',
  }

  const routetitleStyle = {
    fontFamily: 'Noir-Medium',
    textAlign: 'center',
    fontSize: '60px',
    position: 'absolute',
    left:'10rem',
    top:'90vh',
    display: 'flex',
    alignItems: 'center',
    width: 'calc(100vw - 20rem)',
  }

  return (
    <div>      
      <div style={routetitleStyle}>Contact Me<Line top={'100%'} width={'100%'} rotate={'0deg'} color={'rgba(25,25,25,1)'}  position={'absolute'}/>
    </div>
    <div className='relative h-[60vw] w-full top-48'>
      <div style={lineStyle}></div><div className='h-[40vw] w-full box-content'><iframe style={mapframeStyle} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d348.1034432992635!2d-9.266064609002973!3d51.5499126287231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4845a5eacab03129%3A0x3645dc030ab1860b!2sAnns%20Hair%20Fashions!5e0!3m2!1spl!2sie!4v1658237024770!5m2!1spl!2sie" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    <div style={infoStyle}>
    Address: 47 North Street,<br/>
    Skibbereen, Ireland<br/>
    Phone Number: 087 115 0961<br/>
    E-mail: rcrowleyhair@gmail.com</div></div>
    </div></div>
  )
}

export default Contact