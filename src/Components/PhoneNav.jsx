import React, { useState } from 'react';
import Line from './Line'
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrFormClose } from 'react-icons/gr'

export const PhoneNav = (props) =>  {

    const [isOpen,setIsOpen] = useState(false)
  
    const NavbarStyle = {
        display: `${isOpen ? 'flex' : 'none'}`,
        justifyContent: 'space-between',
        padding: '30px',
        alignItems: 'end',
        flexDirection: 'column',
        height: '80vh',
        width: '300px',
        top: '20vh',
        right: '0',
        position: 'fixed',
        color: 'black',
        backgroundColor: 'white',
        zIndex: '90'
    }

    const buttonStyle = {
        width: '300px',
        position:'fixed',
        top: '0',
        right: '0',
        height: '20vh',
        backgroundColor: `${isOpen ? 'white' : 'transparent'}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '90'

    }


  return (
    <div><button style={buttonStyle} onClick={() => setIsOpen(!isOpen)}>{isOpen ? <GrFormClose size={50}/> : <GiHamburgerMenu/>}</button> <div style={NavbarStyle}>{props.children}</div></div>
  )
  }
export const PhoneNavbarItem = (props) => {
    const buttonWidth = props.width;
    const buttonHeight = '100px'
    const buttonFontSize = '25px'
    const buttonStyle = {
        width: buttonWidth,
        height: buttonHeight,
        lineHeight: buttonHeight,
        fontSize: buttonFontSize,
        textAlign: 'right',
        fontFamily: 'Noir-Medium'
    }



    return (
      <Link to={{
        pathname: props.link,
        state: { fromDashboard: true }
      }}  style={buttonStyle}>{props.children}<Line width={buttonWidth} rotate={'0deg'} color={'black'}/></Link>
)
  }
