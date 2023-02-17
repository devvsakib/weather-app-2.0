import React from 'react'

const Box = ({ titleName, detailValue }) => {
    return (
        <div className='bg-[#7eb4bb]/20 p-4 rounded-lg'>
            <div>
                {/* Will add icon later */}
                <img src="/assets/uv.svg" alt="" srcset="" />
            </div>
            <div>
                <h2 className='text-sm md:text-md mb-2 font-semibold'>{titleName}</h2>
                <h2 className='text-2xl lg:text-4xl font-semibold'>{detailValue}</h2>
            </div>
        </div >
    )
}

export default Box