import React from "react";

// Components
import Navbar from '../components/Navbar';

export default function NotFound() {
    return (
		<section>
			<Navbar />
			<div>
				<h2>404</h2>
				<p>Page Not Found.</p>
			</div>
		</section>
    )
}
