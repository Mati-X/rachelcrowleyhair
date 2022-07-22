import React from 'react'
import {Main} from '../Components/index.jsx';
import Line from '../Components/Line'
function Home() {




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
    <div style={routetitleStyle}>Home<Line top={'100%'} width={'100%'} rotate={'0deg'} color={'rgba(25,25,25,1)'}  position={'absolute'}/>
    </div>
    <div className='relative'> 
      <Main/>
    </div>
    </div>
)}

export default Home