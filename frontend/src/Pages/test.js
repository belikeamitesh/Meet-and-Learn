import React from "react";
import { Link } from "react-router-dom";
import "../CSS/test.css";

export default function test() {
	return (
		<React.Fragment>
			<div className='test'>
				<h1>
					<p>LETS CHECK OF YOU ARE A HUMAN OR NOT</p>
				</h1>
				<h4>PLEASE BRING YOUR FACE CLOSER FOR ACCURATE VERIFICATION</h4>
				{/* <img src={Verification} alt='image-verif' /> */}
				<div>
					<Link to='/verification'>CLICK TO PROCEED FOR VERIFICATION</Link>
				</div>
			</div>
		</React.Fragment>
	);
}
