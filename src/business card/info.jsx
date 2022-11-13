import React from 'react'
import Ibrahim from './images/ibrahim1.jpg'
import Smallgmail from './images/smallgmail.png'
import Smallphonelogo from './images/smallphonelogo.jpg'
export default function INFO() {
	return(
		<div className="info">
			<img className="my-img" src={Ibrahim}/>
			<button className="button1"><img className="gmail" src={Smallgmail}/>eero2015@gmail.com</button>
			<button className="button2"><img className="phone" src={Smallphonelogo}/>+2348164838863</button>
		</div>
	)
}