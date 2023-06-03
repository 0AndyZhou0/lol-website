'use client';
import { useState, useEffect } from "react";

import "./createuser.css"

export default function CreateUser(){
	useEffect(() => {
		const dialog = document.getElementById("createuser-form");

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
		document.getElementById("createuser-form").close();
	}

	function openLogin() {
		document.getElementById("createuser-form").showModal();
	}

	const createuser = async () => {
		console.log(document.getElementsByClassName("createuser-form email")[0].value);
		console.log(document.getElementsByClassName("createuser-form password")[0].value);
        console.log(document.getElementsByClassName("createuser-form confirm-password")[0].value);

		const res = await fetch("http://127.0.0.1:8090/api/collections/users/records", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
			body: JSON.stringify({
				email: document.getElementsByClassName("createuser-form email")[0].value,
				password: document.getElementsByClassName("createuser-form password")[0].value,
                passwordConfirm: document.getElementsByClassName("createuser-form confirm-password")[0].value,
			})
        });

		const json = await res.json();
		console.log(json);

		if (json.code === 400) {
			alert(json.message);
		}
		else {
			console.log(json.email);
			alert("Signup Successful " + json.email);
		}
	}

	return (
		<div className="createuser">
			<button type="open" className="open-createuser-form" onClick={openLogin}>SignUp</button>
			<div className="createuser-overlay">
				<dialog id="createuser-form" className="createuser-form">
					<form method="dialog">
						<h1>SignUp</h1>
						<label for="email">Email </label>
						<input type="email" placeholder="Enter Email" className="createuser-form email" name="email" required />
						<br />
						<label for="password">Password </label>
						<input type="password" placeholder="Enter Password" className="createuser-form password" name="password" required />
						<br />
                        <label for="password">Confirm Password </label>
						<input type="password" placeholder="Confirm Password" className="createuser-form confirm-password" name="confirm-password" required />
						<br />
						<button type="submit" value="CREATEUSER" className="createuser-button" onClick={createuser}>Submit</button>
						<button className="close-createuser-form" onClick={closeLogin}>Close</button>
					</form>
				</dialog>
			</div>
		</div>
	)
}