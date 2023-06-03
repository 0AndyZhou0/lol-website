"use client";
import catbot from '@/public/assets/catbot.png';
import Image from 'next/image';
import Link from 'next/link';
import Login from './login';
import CreateUser from './createuser';
import { useUser } from '../context/usercontext';
import { useState, useEffect } from 'react';

import "./navbar.css";

export default function Navbar() {
	const { user } = useUser();
	const [email, setEmail] = useState("");

	useEffect(() => {
		if (user) {
			setEmail(user.email);
		}
	}, []);

	return (
		<nav className="navbar">
			{/* Navbar Logo */}
			<Image className="navbar-logo" src={catbot} alt="CatBot" width={75} height={100} style={{padding: "0 5px 0 0"}}/>

			{/* Navbar Links Menu */}
			<ul className="navbar-list">
				<input type="checkbox" id="navbar-toggle" className="navbar-toggle" />
				<label htmlFor="navbar-toggle" className="navbar-toggle-label hamburger">&#9776;</label>

				<div className="navbar-links">
					<li><Link className="navbar-link" href="/">Home</Link></li>
					<li><Link className="navbar-link" href="/champions">Champions</Link></li>
					<li><Link className="navbar-link" href="/about">About</Link></li>
					<li><Link className="navbar-link" href="/test">Test</Link></li>
				</div>
			
				{email && <li>{email}</li>}
				{!email && <li><Login /></li>}
				{!email && <li><CreateUser /></li>}
			</ul>
			
		</nav>
	);
}