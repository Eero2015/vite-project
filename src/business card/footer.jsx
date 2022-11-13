import React from 'react'
import Twitter from'./images/twitter.png'
import Facebook from './images/facebook.png'
import Insta from './images/instagram1.png'
import Whats from './images/whatsapp1.png'
import Yout from './images/youtube.png'
import Scrimb from './images/srimba.png'
import Github from './images/github.png'

export default function FOOTER() {
	return (
		<footer>
				<img src={Twitter}/>
				<img src={Facebook}/>
				<img src={Insta}/>
				<img src={Whats}/>
				<img src={Yout}/>
				<img src={Scrimb}/>
				<img src={Github}/>
		</footer>
		)
}