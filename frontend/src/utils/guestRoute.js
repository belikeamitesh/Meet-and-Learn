import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../Context/auth";

export default function GuestRoute({ component: Component, ...rest }) {
	const { user } = useContext(AuthContext);
	console.log("guest", user);
	return (
		<Route
			{...rest}
			render={(props) =>
				!user ? <Redirect to='/test' /> : <Component {...props} />
			}
		/>
	);
}
