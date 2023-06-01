import Navbar from "./navbar";

export default function Login(){
	// const openForm = () => {
	//     document.getElementById("login-form").style.display = "block";
	// }
	
	// const closeForm = () => {
	//     document.getElementById("login-form").style.display = "none";
	// }

	return (
		<div className="login">
			{/* <button type="open" className="open-login-form" onClick={openForm}>Login</button> */}

			<div className="login-form" id="login-form" style={{display: "none"}}>
				<form>
					<h1>Login</h1>
					<label for="email">Email</label>
					<input type="email" placeholder="Enter Email" className="login-form" name="email" required />

					<label for="password">Password</label>
					<input type="password" placeholder="Enter Password" className="login-form" name="password" required />

					<button type="submit" value="LOGIN" className="login-button">Submit</button>
				</form>
				{/* <button type="close" className="close-form" onClick={closeForm}>Close</button> */}
			</div>
		</div>
	)
}