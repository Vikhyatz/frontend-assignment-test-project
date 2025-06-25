import React from 'react'

const Loader = ({message}) => {
    return (
        <div className="flex justify-center flex-col items-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900" />
            <p className="text-xl text-gray-600 mt-8">{message}</p>
        </div>
    )
}

export default Loader