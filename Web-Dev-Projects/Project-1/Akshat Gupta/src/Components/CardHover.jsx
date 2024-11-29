import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const CardHover = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="relative w-72 h-48 overflow-hidden group">
                {/* Slide 1 */}
                <div className="absolute inset-0 flex items-center justify-center bg-blue-600 transition-transform duration-500 group-hover:translate-y-0 translate-y-20">
                    <div className="text-white text-8xl">
                        <FontAwesomeIcon icon={faUserCircle} />
                    </div>
                </div>
                
                {/* Slide 2 */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white shadow-lg transition-transform duration-700 group-hover:translate-y-0 -translate-y-20">
                    <h3 className="text-2xl text-gray-800 mb-2">Hello there!</h3>
                    <p className="text-gray-600 text-center">Trust yourself and keep going.</p>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-blue-600"></div>
                </div>
            </div>
        </div>
    );
};

export default CardHover;
