import React from 'react';
import { Link } from 'react-router-dom';

const BookNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20 bg-base-200/50 backdrop-blur-sm rounded-2xl shadow-sm border border-base-300">
            <h2 className="text-4xl font-black text-base-content mb-4 tracking-tight">404 - Book Not Found</h2>
            <p className="text-base-content/70 mb-8 text-center max-w-md">
                The book you're looking for doesn't exist or has been removed from our catalog.
            </p>
            <Link to="/" className="btn btn-primary shadow-lg hover:shadow-primary/50 transition-shadow">
                Return Home
            </Link>
        </div>
    );
};

export default BookNotFound;
