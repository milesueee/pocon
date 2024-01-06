import React, { useEffect } from 'react';

const Initiate = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://kit.fontawesome.com/1ee8f271b9.js';
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []); 

    return null;
};

export default Initiate;
