import React from 'react';

const Error = () => {
    return (
        <div className='flex flex-col gap-5 items-center justify-center h-screen'>
            <h2 className='text-3xl font-bold'>Oops!</h2>
            <h5 className='font-bold text-sm'>Sorry, an unexpected error has occured.</h5>
            <p>Not Found</p>
        </div>
    );
};

export default Error;