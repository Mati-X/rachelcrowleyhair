import React from 'react'
import Line from '../Components/Line'
import ServicesList from '../Components/Services'

function Services() {

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
    <div  className="h-[1500px]"> <div style={routetitleStyle}>Services<Line top={'100%'} width={'100%'} rotate={'0deg'} color={'rgba(25,25,25,1)'}  position={'absolute'}/>
    </div><ServicesList/></div>
  )
}

export default Services