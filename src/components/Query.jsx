import React from 'react';
import Register from './Query/Register';
import FAQ from './Query/FAQ';
import './CSS/Query.css';

const Query = () => {
    return (
        <div className="query-container">
            <div className="query-left">
                <Register />
            </div>
            <div className="query-right">
                <FAQ />
            </div>
        </div>
    );
};

export default Query;
