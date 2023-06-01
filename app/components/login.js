'use client';
import Navbar from "./navbar";
import { useState, useEffect } from "react";

import "./login.css"

export default function Login(){
	useEffect(() => {
		const dialog = document.getElementById("login-form");

		// Close modal if clicked outside of modal
		dialog.addEventListener("click", e => {
			const dialogDimensions = dialog.getBoundingClientRect()
			if (
				e.clientX < dialogDimensions.left ||
				e.clientX > dialogDimensions.right ||
				e.clientY < dialogDimensions.top ||
				e.clientY > dialogDimensions.bottom
			) {
				// console.log("click outside");
				dialog.close();
			}
		})

		// Close modal if escape key is pressed
		dialog.addEventListener("keydown", e => {
			if (e.key === "Escape") {
				// console.log("escape");
				dialog.close();
			}
		})
	}, []);

	function closeLogin() {
		document.getElementById("login-form").close();
	}

	function openLogin() {
		document.getElementById("login-form").showModal();
	}

	return (
		<div className="login">
			<button type="open" className="open-login-form" onClick={openLogin}>Login</button>
			<div className="login-overlay">
				<dialog id="login-form" className="login-form">
					<form method="dialog">
						<h1>Login</h1>
						<label for="email">Email </label>
						<input type="email" placeholder="Enter Email" className="login-form email" name="email" required />
						<br />
						<label for="password">Password </label>
						<input type="password" placeholder="Enter Password" className="login-form password" name="password" required />
						<br />
						<button type="submit" value="LOGIN" className="login-button">Submit</button>
						<button className="close-login-form" onClick={closeLogin}>Close</button>
					</form>
				</dialog>
			</div>
		</div>
	)
}