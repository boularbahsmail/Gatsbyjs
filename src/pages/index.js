import React from "react";

// Layout
import Layout from '../components/Layout';

export default function Home() {
    return (
		<Layout>
			<section>
				<div>
					<h2>Gatsby Starter</h2>
					<p>Software Developer Based In Morocco.</p>
				</div>
	    			<img src="/banner.png" alt="Site-Banner" style={{ maxWidth: '100%' }} />
			</section>
		</Layout>
    )
}
