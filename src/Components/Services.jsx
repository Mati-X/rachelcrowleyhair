import React from 'react'
import ServiceImgOne from '../public/serviceimgone.jpg'
import ServiceImgTwo from '../public/serviceimgtwo.jpg'
import Line from './Line'
import { Link } from "react-router-dom";

function ServicesList() {

    const services = ['Mens cut', 'Womens dry cut', 'Womens wet cut', 'Cut and blow dry', 'Curly blow dry', 'Upstyle', 'Straighten / Curl', 'Hair moisturising treatment', 'Toner for blonde hair', 'Half head highlights', 'Full head highlights', 'Full dye', 'Prem']
    var listOne = []
    var listTwo = []
    for (var i = 0; i < 7; i++) {
        listOne.push(
            <div key={services[i]}>{services[i]}
            </div>
        )
    }
    for (var i = 7; i < services.length; i++) {
        listTwo.push(
            <div key={services[i]}>{services[i]}
            </div>
        )
    }

    const photoStyle = {
        right: '10%',
        position: 'absolute',
        top: '25px',
        width: '450px',
        height: '450px',
        border: '1px solid #000000',
        background: `url(${ServiceImgOne})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: '0px 0px 40px 20px rgba(0,0,0,0.4)'}
        
    const photoStyle2 = {
        left: '10%',
        position: 'absolute',
        bottom: '0px',
        width: '400px',
        height: '400px',
        border: '1px solid #000000',
        background: `url(${ServiceImgTwo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: '0px 0px 40px 20px rgba(0,0,0,0.4)'}

    const sectionTitleStyle = {
        fontFamily: 'Noir-Medium',
        fontSize: '30px',
        lineHeight: '25px',
        textAlign: 'center',
        top: '1200px',
        position: 'absolute',
        width: '100%'
    }

  return (
    <div className='relative h-[1000px] w-full my-48'>
    <div className='leading-[4rem] text-right text-3xl absolute font-[Noir-Regular] left-32'>{listOne}</div>
            <Line top={'22.5%'} left={'150px'} width={'500px'} rotate={'90deg'} color={'rgba(0,0,0,1)'}  position={'absolute'}/>
      <div style={photoStyle} ></div>
    <div className='bottom-0 leading-[4rem] text-3xl right-32  absolute font-[Noir-Regular]'>{listTwo}</div>
            <Line top={'80%'} right={'300px'} width={'500px'} rotate={'90deg'} color={'rgba(0,0,0,1)'}  position={'absolute'}/>
      <div style={photoStyle2} ></div>
      <Link   to={{
    pathname: "/contact",
    state: { fromDashboard: true }
  }}><div style={sectionTitleStyle}><p className='text-[50px]'>Contact me</p><br/>for full price list</div></Link>
    </div>
  )
}

export default ServicesList