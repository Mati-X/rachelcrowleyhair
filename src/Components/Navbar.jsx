import React from 'react';
import Line from './Line'
import { Link } from "react-router-dom";

export const Navbar = (props) =>  {
    const NavbarStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '15vh',
        width: '60%',
        top: '0',
        right: '0',
        position: 'absolute',
        color: 'white',
    }


  return (
    <div style={NavbarStyle}>{props.children}</div>
  )
  }
export const NavbarItem = (props) => {
    const buttonWidth = props.width;
    const buttonHeight = '55px'
    const buttonFontSize = '25px'
    const buttonStyle = {
        width: buttonWidth,
        height: buttonHeight,
        lineHeight: buttonHeight,
        fontSize: buttonFontSize,
        textAlign: 'center',
        fontFamily: 'Noir-Medium'
    }



    return (
      <Link to={{
        pathname: props.link,
        state: { fromDashboard: true }
      }}  style={buttonStyle}>{props.children}<Line width={buttonWidth} rotate={'0deg'} color={'white'}/></Link>
)
  }
