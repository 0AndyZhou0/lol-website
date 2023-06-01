'use client';
import Navbar from "./navbar";
import { useState } from "react";

export default function Login(){
	const [isOpen, setIsOpen] = useState(true);

	function toggleForm() {
		setIsOpen(!isOpen);
	}

	return (
		<div className="login">
			<button type="open" className="open-login-form" onClick={toggleForm}>Login</button>

			{ isOpen && <div className="login-form" id="login-form">
				<form>
					<h1>Login</h1>
					<label for="email">Email</label>
					<input type="email" placeholder="Enter Email" className="login-form" name="email" required />

					<label for="password">Password</label>
					<input type="password" placeholder="Enter Password" className="login-form" name="password" required />

					<button type="submit" value="LOGIN" className="login-button">Submit</button>
				</form>
				<button type="close" className="close-form" onClick={toggleForm}>Close</button>
			</div> }
		</div>
	)
}