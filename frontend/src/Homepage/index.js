import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import Above from "../Components/aboveHome";
import Logo from "../Components/images/Logo.png"
import CounselHome from "../Components/images/listen.jpg";

function Home() {
	return (
		<React.Fragment>
			<div className='homepage'>
				<div className='front-top'>
					<div
						data-poster-url={Logo}
						data-video-urls={Logo}
						data-autoplay={true}
						data-loop={true}
						data-wf-ignore={true}
						className='video_div'>
						<video
							autoPlay={true}
							loop={true}
							muted=''
							playsInline=''
							data-wf-ignore={true}
							disablePictureInPicture={true}
							className='video-name'>
							<source
								src={Logo}
								data-wf-ignore={true}
							/>
							<source
								src={Logo}
								data-wf-ignore={true}
							/>
						</video>
					</div>
					<Above />
				</div>
				{/* <CounselPage /> */}
				<div className='front-bot'>
				<div>
						<span className='bot-heading'>Free Courses by IBM and Coursera</span> <br />
						<img src="https://about.coursera.org/images/logos/coursera-logo-full-rgb.png" className="img"alt="coursera"></img>
						<button className='course1'><a className="a"href="https://www.coursera.org/professional-certificates/ibm-data-science">Data Science</a></button>
						<button className='course2'><a className="a" href="https://www.coursera.org/specializations/data-structures-algorithms">DSA</a></button>
						<button className='course3'><a className="a"href="https://www.coursera.org/specializations/web-design">Web Development</a></button>
						<img src="https://www.investopedia.com/thmb/zes2hNHtMmFNAQZ8VgUb6p-8MzI=/1783x1265/filters:no_upscale():max_bytes(150000):strip_icc()/ibm-logo-3-56a81a2c3df78cf7729c1f61.jpg" className="img"alt="ibm"></img>
				</div>
					{/* <div>
						<span className='bot-heading'>Need a mentor for any subject??</span>
					</div> */}
					<Link to='/counsel' className='link-counsel'>
						<div className='bot-desc'>
							<span>Need Mentor? We Are here to</span>
							<span>
								<img src={CounselHome} alt='img' className='bot-image' />
							</span>
						</div>
					</Link>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Home;
