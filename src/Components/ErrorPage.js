import React from 'react';
import { Link } from 'react-router-dom';


export default function ErrorPage() {
    return (
        <div>
            <p >404 Error!</p>
            <Link to="/LoginForm">Go Back</Link>
        </div>
    )
}
