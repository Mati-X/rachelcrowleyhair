
import React from 'react'
import AboutImgText from '../Components/AboutImgText.jsx';
import ProfilePicture from '../public/profilepicture.jpg';
import HairProduct from '../public/hairproducts.jpg';
import Line from '../Components/Line'
import { useMediaQuery } from 'react-responsive'
function About() {


  const routetitleStyle = {
    fontFamily: 'Noir-Medium',
    textAlign: 'center',
    fontSize: '60px',
    position: 'absolute',
    left:'10rem',
    display: 'flex',
    alignItems: 'center',
    width: 'calc(100vw - 20rem)',
  }
  return (
    <div>
    <div style={routetitleStyle}>About..<Line top={'100%'} width={'100%'} rotate={'0deg'} color={'rgba(25,25,25,1)'}  position={'absolute'}/>
    </div>
    <div className='h-[2200px] relative'>
    <div className='absolute top-48 w-full'><AboutImgText image={ProfilePicture}  title='..Me' type="rtext">I have hairdressing for about 25 years, since I was a teenager.
     I fell in love with hairdressing at a young age, I think because my father was a barber when I was growing up.
     I used to love to sit in his barber shop and watch how he did different styles and cuts, while there was a long queue out his door.
     My favourite part about hairdressing must be the different styles you can do and how you can transform someone’s look with a quick cut.
     Please feel free to give me a call for a quick consultation.

    </AboutImgText>
    </div><div className='absolute bottom-[750px] w-full'><AboutImgText image={HairProduct}  title='..Hair Products' type="ltext">I need to make sure my customers' hair will stay in perfect condition for a long time.
    That is why I recommend Alfaparf products.
    They are high-quality cosmetics which I use in my hair salon.
    You can buy them at my place and give your hair a new life.
    </AboutImgText></div>
    </div></div>
  )
}

export default About