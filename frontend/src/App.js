import React from "react";
import ChatRooms from "./Pages/ChatRooms";
import CounselRoom from "./Pages/CounselRoom";
import CounselPage from "./Pages/CounselPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Homepage";
import Navbar from "./Components/Navbar";
import Map from "./Components/Map";
import Login from "./Pages/Login";
import Verification from "./Pages/Verification";
import Register from "./Pages/Register";
import NotHuman from "./Pages/NotHuman";
import Test from "./Pages/test";
import AuthRoute from "./utils/authRoute";
import GuestRoute from "./utils/guestRoute";
import "./Components/style.css";
import { AuthProvider } from "./Context/auth";

export default function App() {
	return (
		<AuthProvider>
			<Router>
				<Navbar />
				<GuestRoute exact path='/chatroom' component={ChatRooms} />
				<Route exact path='/counsel' component={CounselPage} />
				<Route exact path='/counselroom' component={CounselRoom} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/test' component={Test} />
				<Route exact path='/map' component={Map} />
				<Route exact path='/verification' component={Verification} />
				<AuthRoute exact path='/login' component={Login} />
				<AuthRoute exact path='/register' component={Register} />
				<Route exact path='/map' component={Map} />
				<Route exact path='/verification' component={Verification} />
				<Route exact path='/verificationfailed' component={NotHuman} />
				<Route exact path='/' component={Home} />
			</Router>
		</AuthProvider>
	);
}
