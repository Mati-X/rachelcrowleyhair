import React from 'react'
import Line from './Line'
import { useMediaQuery } from 'react-responsive'
function AboutImgText(props) {

  const { type, title, image } = props;

  const containerStyle = type == 'rtext' ? ({
    left: '10%',
    width: '100%',
    height: '100%',
    position: 'relative'
  }) : ({
    right: '10%',
    width: '100%',
    height: '100%',
    position: 'relative',
    transform: 'rotateY(180deg)'
  })

  const photoStyle = type == 'rtext' ? ({
    left: 0,
    position: 'absolute',
    top: `0px`,
    width: `300px`,
    height: `600px`,
    border: '1px solid #000000',
    background: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }) : ({
    left: 0,
    position: 'absolute',
    top: `0px`,
    width: `300px`,
    height: `600px`,
    border: '1px solid #000000',
    background: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transform: 'rotateY(180deg)'})

  const titleStyle = type == 'rtext' ? ({
    position: 'relative',
    left: '400px',
    textAlign: 'left',
    width: '50%',
    top: '0px',
    fontFamily: 'Noir-Medium',
    fontSize: '60px'

  }) : ({
    position: 'relative',
    left: '25%',
    textAlign: 'right',
    width: '30%',
    fontFamily: 'Noir-Medium',
    fontSize: '60px',
    transform: 'rotateY(180deg)'})

  const textStyle = type == 'rtext' ? ({
    position: 'relative',
    left: '400px',
    textAlign: 'left',
    width: '50%',
    top: '150px',
    fontFamily: 'Noir-Regular',
    lineHeight: `50px`,
    fontSize: '30px',
    transform: 'translateY(-30%)'}) : ({

    position: 'relative',
    left: '400px',
    textAlign: 'right',
    width: '40%',
    top: '150px',
    fontFamily: 'Noir-Regular',
    lineHeight: '50px',
    fontSize: '30px',
    transform: 'rotateY(180deg)'})

  return (
    <div className='relative h-[700px] w-full' style={containerStyle}>
      <Line top={'300px'} width={'700px'} rotate={'90deg'} left={'0px'} color={'black'} position={'relative'} />
      <div style={photoStyle} ></div>
      <h1 style={titleStyle}>{title}</h1>
      <div style={textStyle}>{props.children}</div>
    </div>
  )
}

export default AboutImgText