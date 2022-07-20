import React from 'react'
import { GalleryComponent } from '../Components/GalleryComponent'
import Line from '../Components/Line'
import './styles.css'

function Gallery() {
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
    <div><div style={routetitleStyle}>Gallery<Line top={'100%'} width={'100%'} rotate={'0deg'} color={'rgba(25,25,25,1)'}  position={'absolute'}/>
    </div><div className='container'>
  <GalleryComponent/></div></div>
  )
}

export default Gallery