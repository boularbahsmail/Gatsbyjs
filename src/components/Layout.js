import React from "react";

// Components
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
		<div  className="layout">
			<Navbar />
			<div className="content">
                {children}
			</div>
            <Footer />
		</div>
    )
}
