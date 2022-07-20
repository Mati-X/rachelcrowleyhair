import React from 'react'

function Line(props) {

    const {width, rotate, color, top, position, left, right} = props;
    const style = {
        position: `${position}`,
        top: `${top}`,
        left: `${left}`,
        right: `${right}`,
        width: width,
        transform: `rotate(${rotate})`,
        height: '0.3rem',
        borderRadius: '5px',
        backgroundColor: `${color}`,
        zIndex: '10',
        transformOrigin: 'center center'
    }
  return (
    <div  style={style}></div>
  )
}

export default Line