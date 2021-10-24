import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { AuthContext } from "../Context/auth";
import { useForm } from "../utils/hooks";
import TravelLogin from "../Components/images/Logo.jpeg";
import "../CSS/register.css";

export default function Register() {
	const [errors, setErrors] = useState([]);
	const history = useHistory();
	const context = useContext(AuthContext);

	const initialState = {
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	};

	const { onChange, onSubmit, values } = useForm(registerUser, initialState);
	const [addUser, { loading }] = useMutation(REGISTER_USER, {
		update(_, { data: { register: userData } }) {
			context.login(userData);
			history.push("/");
		},
		onError(err) {
			setErrors(err.graphQLErrors[0].extensions.exception.errors);
		},
		variables: values,
	});

	function registerUser() {
		addUser();
	}

	return (
		<div className='register-container'>
			<div className='register-left'>
				<div className='image-box'>
					<img className='register-image' src={TravelLogin} alt='Travel' />
				</div>
			</div>
			<div className='register-right'>
				<div className='register-wrapper'>
					<div className='register-form'>
						<h1 className='register-header'>SIGN UP</h1>
						<form onSubmit={onSubmit}>
							<input
								type='text'
								className='input-field'
								name='username'
								placeholder='Username'
								value={values.username}
								onChange={onChange}
							/>
							<input
								type='text'
								className='input-field'
								name='email'
								placeholder='Email'
								value={values.email}
								onChange={onChange}
							/>
							<input
								type='password'
								className='input-field'
								name='password'
								placeholder='Password'
								value={values.password}
								onChange={onChange}
							/>
							<input
								type='password'
								className='input-field'
								name='confirmPassword'
								placeholder='Confirm Password'
								value={values.confirmPassword}
								onChange={onChange}
							/>
							<button type='submit' className='register-button'>
								{loading ? "REGISTERING" : "SIGN UP"}
							</button>
						</form>
						{Object.keys(errors).length > 0 && (
							<div className='ui error message'>
								<div className='list'>
									{Object.values(errors).map((value) => (
										<li key={value}>{value}</li>
									))}
								</div>
							</div>
						)}
					</div>
					<div className='login-new'>
						<span>Already a Member?</span>
						<Link className='login-link' to='/login'>
							Login Here
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

const REGISTER_USER = gql`
	mutation register(
		$username: String!
		$email: String!
		$password: String!
		$confirmPassword: String!
	) {
		register(
			registerInput: {
				username: $username
				email: $email
				password: $password
				confirmPassword: $confirmPassword
			}
		) {
			id
			email
			username
			createdAt
			token
		}
	}
`;
