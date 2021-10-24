import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../Context/auth";

export default function AuthRoute({ component: Component, ...rest }) {
	const { user } = useContext(AuthContext);
	console.log(user);
	return (
		<Route
			{...rest}
			render={(props) =>
				user ? <Redirect to='/chatroom' /> : <Component {...props} />
			}
		/>
	);
}
