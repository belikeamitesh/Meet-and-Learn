import React from "react";
import '../CSS/notHuman.css';

export default function NotHuman() {
	return (
		<React.Fragment>
			<div className="not_human">
				<h2>
					SORRY YOU ARE NOT VERIFIED, PLEASE MAKE SURE THAT YOUR FACE IS VISIBLE ON THE SCREEN.
				</h2>
				<div>
					<a href="/verification" calssName="">VERIFY AGAIN</a>
				</div>
				
			</div>
		</React.Fragment>
	);
}
