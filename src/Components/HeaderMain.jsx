import React from 'react'
import Line from './Line'

function HeaderMain() {

    const MainStyle = {
        color: 'white',
        fontSize: '100px',
        fontFamily: 'Noir-Medium',
        padding: '35vh 100px'
    }

    const LightStyle = {
        fontFamily: 'Noir-Regular',
        fontSize: '50px',
        marginTop: '30px',
    }

  return (
    <div style={MainStyle}>
        Rachel Crowley 
        <Line width={'800px'} rotate={'0deg'} color={'white'}/>
        <div style={LightStyle}>Your local hairapist.</div>
    </div>
  )
}

export default HeaderMain