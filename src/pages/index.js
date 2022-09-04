import React from "react";

// Layout
import Layout from '../components/Layout';

export default function Home() {
    return (
		<Layout>
			<section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<div style={{ width: '50%' }}>
					<h1>Gatsby Starter</h1>
					<p>Software Developer Based In Morocco.</p>
				</div>
	    			<div style={{ width: '50%' }}>
	    			    	<img src="/banner.png" alt="Site-Banner" style={{ maxWidth: '100%' }} />
				</div>
	    		</section>
		</Layout>
    )
}
