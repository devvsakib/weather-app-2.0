import React from 'react'

const PreviousData = ({ forecast }) => {
    console.log(forecast[0]);
    return (
        <>
            {
                forecast.map((e) => (
                    <div className='flex justify-between mt-3 items-center border-b-[1px] border-white/20 pb-2' >
                        <div>
                            <p className='text-sm'>{e.date}</p>
                        </div>
                        <div className='flex items-center flex-col  justify-center'>
                            <img className='rounded-lg w-8 h-8 mx-auto' src={e.day.condition.icon} />
                            <h3 className='text-sm capitalize'>{e.day.condition.text}</h3>
                        </div>
                        <div>
                            <h3 className='text-sm'><b>{e.day.maxtemp_c}</b>/{e.day.mintemp_c}</h3>
                        </div>
                    </div >
                ))
            }
        </>
    )
}

export default PreviousData 