import React from 'react'
import Line from './Line'
import Hairapist from '../public/293430824_462432129215223_8743951724541038351_n.jpg'
import { Link } from "react-router-dom";
function Main() {

  const LeftStyle = {
    height: '800px',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    justifyContent:'space-around',
    left:'8rem',
  }
  const RightStyle = {
    top: '225px',
    height: '800px',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    right:'8rem',
    justifyContent:'space-around',
    textAlign: 'right',
    
  }

  const ContainerStyle = {
  fontFamily: 'Noir-Regular',
  fontSize: '25px',
  padding: '30px',
  paddingRight:'220px',
  color: 'black',
  }

  const ContainerStyle2 = {
    fontFamily: 'Noir-Regular',
    fontSize: '25px',
    padding: '30px',
    paddingLeft:'220px',
    color: 'black',
    }

  const TitleStyle = {
    fontFamily: 'Noir-Medium',
    fontSize: '50px'
  }

  return (
    <div className="h-[1000px]">
        <div style={LeftStyle}>
        <Link to={{
        pathname: '/about',
        state: { fromDashboard: true }
      }}  style={ContainerStyle}><div style={TitleStyle}>About</div>
          <Line width={'460px'} rotate={'0deg'} color={'black'}/>
            Read about me and products that I use.
          </Link>
            <Link to={{
        pathname: '/services',
        state: { fromDashboard: true }
      }}  style={ContainerStyle}><div style={TitleStyle}>Services</div>
          <Line width={'460px'} rotate={'0deg'} color={'black'}/>
            Check what I can do with your hair.
          </Link>
        </div>

        <div style={RightStyle}>
          <Link to={{
        pathname: '/gallery',
        state: { fromDashboard: true }
      }}  style={ContainerStyle2}><div style={TitleStyle}>Gallery</div>
          <Line width={'460px'} rotate={'0deg'} color={'black'}/>
            Watch results of my work.
          </Link>
            <Link to={{
        pathname: '/contact',
        state: { fromDashboard: true }
      }}  style={ContainerStyle2}><div style={TitleStyle}>Contact Me</div>
          <Line width={'460px'} rotate={'0deg'} color={'black'}/>
            Get my email, hair salon address etc.
          </Link>
        </div>
    </div>
  )
}

export default Main