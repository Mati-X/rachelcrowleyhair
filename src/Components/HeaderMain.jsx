import React from 'react'
import Line from './Line'
import { useMediaQuery } from 'react-responsive'

function HeaderMain() {

  const isDesktop = useMediaQuery({query: "(min-width: 1500px)"});

    const MainStyle = {
        color: 'white',
        fontSize: '100px',
        fontFamily: 'Noir-Medium',
        padding: '35vh 100px'
    }

    const MainStylePhone = {
      padding: '1vh 5vw',
      color: 'white',
      fontSize: '6vh',
      fontFamily: 'Noir-Medium',
      position: 'fixed',
      zIndex: '90'
    }

    const LightStyle = {
        fontFamily: 'Noir-Regular',
        fontSize: '50px',
        marginTop: '30px',
    }
    const LightStylePhone = {
      fontFamily: 'Noir-Regular',
      fontSize: '4vh',
      marginTop: '10px',
  }

    const restofHeader = [
      <Line width={'800px'} rotate={'0deg'} color={'white'}/>,
      <div style={LightStyle}>Your local hairapist.</div>]

  return (
    <div style={isDesktop ? MainStyle : MainStylePhone}>
        Rachel Crowley
        {isDesktop ? restofHeader : [
      <Line width={'350px'} rotate={'0deg'} color={'white'}/>,
      <div style={LightStylePhone}>Hair Salon.</div>]}
    </div>
  )
}

export default HeaderMain