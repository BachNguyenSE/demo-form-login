import React from 'react';
import PropTypes from 'prop-types';


function Home() {
    return (
        <div style={{ minHeight: "100vh", backgroundSize: "cover" }}>

            <div style={{ padding: '20px' }}>
                <h1>Welcome to Home Page</h1>
                <p>This is a basic layout for the Home page.</p>
                <p>You can customize it further according to your requirements.</p>
            </div>
        </div>
    );
}

export default Home;